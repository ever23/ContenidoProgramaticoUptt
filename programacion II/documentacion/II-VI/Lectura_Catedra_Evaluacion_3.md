# Manual de Estudio Profundo: Evaluación 3
## Materia: Programación II (Trayecto II)
### Eje Temático: Seguridad, Autenticación y Sesiones

---

## 🧭 Introducción: La Identidad en un Protocolo Sin Memoria
Imagina que vas al cajero automático. Metes tu tarjeta y tu clave secreta (Te "Autenticas"). El cajero verifica quién eres y te da la opción de retirar dinero (Pides "Autorización"). Todo esto funciona perfectamente en el mundo real.

Pero en la web nos topamos con un problema de arquitectura inmenso: **El Protocolo HTTP es "Stateless" (Sin Estado o Amnésico).**
Esto significa que cada vez que haces clic en una página web diferente o le pides datos al servidor, el servidor sufre "amnesia total". Si te logueas en `/api/login` y el servidor dice "¡Ah, eres tú, bienvenido!", un milisegundo después haces clic en `/api/ver-saldo` y el servidor ya no tiene ni idea de quién eres y te bloqueará el acceso.

¿Cómo resolvemos esto y mantenemos a un usuario "conectado" mientras navega?

---

## 🏛️ CAPÍTULO I: Autenticación vs Autorización

Es fundamental separar estos dos conceptos de seguridad cibernética:

1. **Autenticación (¿Quién eres?):** El proceso de probar la identidad real del usuario ante el sistema. Usualmente comparando un Credencial (Email) y un Secreto (Contraseña) provisto por el usuario contra una tabla en la Base de Datos.
2. **Autorización (¿Qué puedes hacer?):** Una vez que el sistema sabe quién eres, este proceso decide tus privilegios. Un alumno está autenticado en el sistema universitario, pero no está *autorizado* para modificar las notas, porque eso es privilegio del "Rol Profesor".

### La Regla Sagrada del Almacenamiento de Contraseñas
**Jamás en la historia de la informática se debe guardar una contraseña en texto plano en la Base de Datos (ej. "gatito123").**
Si un hacker roba tu base de datos, tendrá acceso a la vida de tus usuarios. 
Las contraseñas deben pasar por una función criptográfica de un solo sentido llamada **Hashing** (ej. usando la librería `bcrypt`). "gatito123" se convierte en un texto inentendible `$2a$10$vI8aWB...`. Cuando el usuario ingresa su contraseña en el futuro, se aplica el mismo algoritmo matemático; si los resultados coinciden, la contraseña era correcta. Nadie, ni siquiera el programador o administrador del sistema, puede desencriptar y saber cuál era la contraseña original.

---

## 🧩 CAPÍTULO II: Resolviendo la Amnesia del HTTP

Existen dos arquitecturas predominantes para "recordarle" al servidor quiénes somos en cada petición.

### 2.1 El Método Clásico: Cookies y Sesiones Estatales
1. Te logueas con correo y password.
2. El Servidor (Node) crea un archivo temporal en su memoria (Sesión) anotando "Usuario ID 5 está activo" y le asigna un Ticket largo llamado "SessionID" (ej. XYZ-123).
3. El Servidor le envía ese Ticket a tu navegador mediante un cabezal especial llamado `Set-Cookie`.
4. A partir de ese momento, tu navegador (Chrome) enviará esa Cookie silenciosamente de regreso al servidor en cada clic posterior. El servidor mira la Cookie, busca "XYZ-123" en sus cajones, ve que pertenece al Usuario 5, y lo deja entrar.

### 2.2 El Estándar Moderno API: JWT (JSON Web Tokens)
Para sistemas escalables y aplicaciones móviles, guardar sesiones en el servidor es ineficiente. El estándar actual es JWT (Sin Estado).
1. Te logueas.
2. El servidor **Firma Digitalmente** un pase VIP que contiene tu ID (El Token JWT) usando una Clave Maestra encriptada de alta seguridad que solo el servidor posee, y te entrega el Token.
3. El servidor *no guarda nada en su memoria*. Se olvida de ti inmediatamente.
4. En futuras peticiones (ej. Ver Saldo), el Frontend debe inyectar manualmente ese Token en las cabeceras HTTP (`Authorization: Bearer <token>`).
5. El servidor recibe la petición, toma el Token, y usa su Clave Maestra matemática para verificar si la firma es legítima. Si la firma cuadra (nadie hackeó el token alterando su contenido), te deja entrar.

---

## 🏗️ CAPÍTULO III: Middlewares de Protección

En Express, la Autorización se implementa elegante y modularmente usando **Middlewares**.

Haces una función llamada `verificarToken`. Si un usuario intenta entrar a `/api/ruta-secreta`, Node envía la petición primero al middleware `verificarToken`. Si el token falta, expiró, o es falso, el middleware lanza un error de acceso `Status 401 Unauthorized`. Si el token es válido, el middleware invoca a `next()` y le permite al flujo continuar hacia su destino.

---

## 💻 Laboratorio: Lógica de Login con JWT

Veamos el algoritmo general para la ruta de Autenticación.

```javascript
// Ruta pública de Login
app.post('/api/login', async (req, res) => {
    const { email, passwordPlano } = req.body;

    // 1. Verificar existencia en BD usando el ORM mysql-tab
    const tablaUsuarios = poolBD.tabla("Usuarios");
    
    // Pasamos "*", null (para no usar joins), y nuestro filtro WHERE como objeto
    const usuarios = await tablaUsuarios.select(`email="${email}"`);
    
    if (usuarios.length === 0) {
        return res.status(401).json({ error: "Credenciales inválidas" }); // No existe
    }

    // Extraemos la fila (Objeto dbRow)
    const usuarioDB = usuarios[0];

    // 2. Comparación Criptográfica Segura
    // bcrypt compara la clave introducida hoy, con el Hash (garabato) guardado hace meses en la BD
    const esValido = await bcrypt.compare(passwordPlano, usuarioDB.password_hash);
    
    if (!esValido) {
        return res.status(401).json({ error: "Credenciales inválidas" }); // Clave errónea
    }

    // 3. Autenticación exitosa: Generación del Token JWT
    // Empaquetamos el ID y su ROL de permisos en el token
    const cargaDatos = { id: usuarioDB.id, rol: usuarioDB.rol };
    
    // Firmamos el token con una CLAVE_MAESTRA super secreta
    const tokenGenerado = jwt.sign(cargaDatos, "MI_CLAVE_SUPER_SECRETA_123", { expiresIn: '2h' });

    // 4. Entregamos el pase VIP al cliente
    res.json({ 
        mensaje: "Bienvenido al sistema",
        token: tokenGenerado 
    });
});
```

---

## 📘 ANEXO: Diccionario Técnico Formal

- **Stateless Protocol (Protocolo Sin Estado):** Diseño de comunicación en el cual el receptor no retiene información ni contexto transaccional sobre solicitudes anteriores de un mismo cliente (característica fundacional de HTTP).
- **Autenticación:** Mecanismo de validación criptográfica o comparativa diseñado para establecer de manera fiable la identidad reportada de un agente (usuario o máquina) interactuando con el sistema.
- **Autorización:** Evaluación algorítmica de los niveles de privilegio asignados a una identidad previamente autenticada, dictaminando su acceso a recursos computacionales o estructurales específicos.
- **Hashing Criptográfico:** Algoritmo matemático unidireccional (irreversible) que transforma una entrada de datos de longitud variable en una cadena alfanumérica de longitud fija (Hash), diseñada para enmascarar información altamente confidencial previniendo su ingeniería inversa.
- **JWT (JSON Web Token):** Estándar abierto (RFC 7519) que define una forma compacta y autónoma de transmitir información segura entre partes mediante la estructuración de un objeto JSON firmado criptográficamente (vía HMAC o RSA) para certificar la inmutabilidad de su carga útil.
- **HTTP Header Authorization:** Cabecera estándar delegada por el protocolo HTTP destinada al transporte seguro de credenciales transaccionales (típicamente empleando el esquema 'Bearer') desde el cliente hacia las compuertas del servidor.
