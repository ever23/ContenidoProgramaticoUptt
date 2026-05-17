const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Librerías de la Cátedra (ORM)
const dbTabla = require('mysql-tab');
const Model = require('tabla-model');

const app = express();
const puerto = 3000;
const CLAVE_SECRETA = "Mi_Super_Secreto_UPTT_2026"; // Clave para firmar el JWT

// Configuración visual y Middlewares básicos
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // Permite leer las cookies (donde guardaremos el token)

// ==========================================
// 1. CONFIGURACIÓN DE BASE DE DATOS Y ORM
// ==========================================
const poolBD = new dbTabla({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'uptt_seguridad'
});

// Definimos el Modelo de Usuarios
const ModeloUsuario = new Model("Usuarios", [
    { name: "id", type: "int", primary: true, autoincrement: true },
    { name: "nombre", type: "varchar(100)" },
    { name: "email", type: "varchar(100)", unique: true },
    { name: "password_hash", type: "varchar(255)" } // NUNCA guardamos contraseñas en texto plano
]);
poolBD.addModel(ModeloUsuario);
const tablaUsuarios = poolBD.tabla("Usuarios");

// ==========================================
// 2. MIDDLEWARE DE SEGURIDAD (JWT)
// ==========================================
// Este middleware protegerá las rutas del CRUD. Si no hay token válido, te echa.
function verificarAutenticacion(req, res, next) {
    const token = req.cookies.token_acceso; // Leemos el token de la cookie
    
    if (!token) {
        return res.redirect('/login'); // Si no tiene ticket VIP, lo mandamos a loguearse
    }

    try {
        // Verificamos si la firma matemática es válida
        const datosDesencriptados = jwt.verify(token, CLAVE_SECRETA);
        req.usuarioLogueado = datosDesencriptados; // Guardamos quién es para usarlo luego
        next(); // ¡Adelante! Tienes permiso
    } catch (error) {
        // Si el token es falso o expiró
        res.clearCookie('token_acceso');
        return res.redirect('/login');
    }
}

// ==========================================
// 3. RUTAS PÚBLICAS (Login y Registro Inicial)
// ==========================================

// Mostrar pantalla de Login
app.get('/login', (req, res) => {
    res.render('login', { error: null });
});

// Procesar el Login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        // 1. Buscamos al usuario por correo usando el ORM
        const usuariosEncontrados = await tablaUsuarios.select(`email="${email}"`);
        
        if (usuariosEncontrados.length === 0) {
            return res.render('login', { error: "Credenciales inválidas" });
        }

        const usuarioDB = usuariosEncontrados[0];

        // 2. Verificamos la contraseña con BCRYPT
        const esValido = await bcrypt.compare(password, usuarioDB.password_hash);
        if (!esValido) {
            return res.render('login', { error: "Credenciales inválidas" });
        }

        // 3. Generamos el Token JWT (Pase VIP)
        const token = jwt.sign({ id: usuarioDB.id, email: usuarioDB.email, nombre: usuarioDB.nombre }, CLAVE_SECRETA, { expiresIn: '1h' });

        // 4. Guardamos el token en una Cookie segura para no perder la sesión
        res.cookie('token_acceso', token, { httpOnly: true });
        
        // Lo mandamos al panel privado
        res.redirect('/');
    } catch (error) {
        res.render('login', { error: error.message });
    }
});

// Cerrar Sesión
app.get('/logout', (req, res) => {
    res.clearCookie('token_acceso');
    res.redirect('/login');
});

// ==========================================
// 4. RUTAS PRIVADAS (CRUD de Usuarios)
// ==========================================
// Aplicamos el middleware "verificarAutenticacion" a todas las rutas de aquí hacia abajo
app.use(verificarAutenticacion);

// Panel Principal (Leer / Mostrar Usuarios)
app.get('/', async (req, res) => {
    try {
        const listaUsuarios = await tablaUsuarios.select();
        // Pasamos la lista y los datos del usuario que inició sesión
        res.render('usuarios', { usuarios: listaUsuarios, miPerfil: req.usuarioLogueado });
    } catch (error) {
        res.status(500).send("Error de BD: " + error.message);
    }
});

// Crear Usuario (Aplica Hashing a la clave)
app.post('/usuarios', async (req, res) => {
    try {
        const { nombre, email, password } = req.body;
        
        // ¡Regla de Oro! Encriptamos la clave antes de que toque la BD
        const rondasSal = 10;
        const hashSecreto = await bcrypt.hash(password, rondasSal);

        // Guardamos con el ORM
        const nuevoUsuario = {
            nombre: nombre,
            email: email,
            password_hash: hashSecreto
        };
        await tablaUsuarios.insert(nuevoUsuario);
        
        res.redirect('/');
    } catch (error) {
        res.status(500).send("Error registrando usuario: " + error.message);
    }
});

// Eliminar Usuario
app.post('/eliminar-usuario/:id', async (req, res) => {
    try {
        const id = req.params.id;
        // Evitamos que el usuario se elimine a sí mismo
        if (id == req.usuarioLogueado.id) {
            return res.status(403).send("No puedes eliminar tu propia cuenta mientras estás logueado.");
        }

        let usuario = await tablaUsuarios.selectById(id);
        if (usuario) await usuario.delete();
        res.redirect('/');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Iniciar servidor
app.listen(puerto, async () => {
    console.log(`Servidor de Seguridad escuchando en http://localhost:${puerto}`);
    console.log(`NOTA: Para la primera prueba, inserta un usuario manualmente o modfica el código para auto-crear un admin.`);
    
    // Auto-crear un usuario admin si la tabla está vacía (Para facilitar la corrección)
    try {
        const usuarios = await tablaUsuarios.select();
        if (usuarios.length === 0) {
            const hash = await bcrypt.hash("1234", 10);
            await tablaUsuarios.insert({ nombre: "Administrador", email: "admin@uptt.edu.ve", password_hash: hash });
            console.log("--> 🔑 Creado usuario inicial: admin@uptt.edu.ve | Clave: 1234");
        }
    } catch(e) {}
});
