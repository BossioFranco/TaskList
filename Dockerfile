# Usa la imagen oficial de Node como base
FROM node:19-slim

# Define el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Evita problemas de instalacion causados por el cache de npm
RUN npm cache clean --force

# Instala las dependencias
RUN npm install --force

# Copia el resto de los archivos de la aplicación
COPY . .

#Instalar eas
RUN npm install -g eas-cli

#Instalar expo
RUN npm install -g expo

# Expone el puerto en el que se ejecutará el servidor de desarrollo de React native
EXPOSE 8081

# Ejecuta el servidor de desarrollo de React native
CMD ["npx", "expo", "start", "-w"]