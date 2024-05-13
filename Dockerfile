# Usa la imagen oficial de Node como base
FROM node:14-alpine


# Define el directorio de trabajo dentro del contenedor
WORKDIR /app


# Copia los archivos package.json y package-lock.json
COPY package*.json ./


# Instala las dependencias
RUN npm install


# Copia el resto de los archivos de la aplicación
COPY . .


#Instalar eas
RUN npm install -g eas-cli


#Instalar expo
RUN npm install -g expo


#Run web based dependencies
RUN npm i react-native-web@0.19.10
RUN npm i react-dom@18.2.0
RUN npm i @expo/metro-runtime@3.2.1


#Instalar git
RUN apk add --update git


# Ingresa a la cuenta expo para poder comenzar el build
RUN expo login -u francob -p tractor1.6


# Construye la aplicación de React native
RUN npm run build




# Expone el puerto en el que se ejecutará el servidor de desarrollo de React native
EXPOSE 8081


# Ejecuta el servidor de desarrollo de React native
CMD ["npx", "expo", "start", "-w"]