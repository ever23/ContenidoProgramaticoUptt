# Usa una imagen ligera de Node.js
FROM node:22-slim

# Crea el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala las dependencias (solo las de producción)
RUN npm install --omit=dev

# Copia todo el código fuente al contenedor
COPY . .

# Expone el puerto que usa Express
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
