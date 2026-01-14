Dermalytica

Dermalytica es una aplicación web educativa full stack que utiliza inteligencia artificial para ayudar a clasificar manchas de la piel y lunares como benignos o malignos.
El objetivo de la app es aplicar y consolidar conocimientos en desarrollo web y consumo de APIs, con fines educativos.

⚠️ Esta aplicación es solo para fines educativos y no reemplaza la evaluación profesional de un dermatólogo.

Funcionalidades

    Subir imágenes de manchas o lunares

    Recibir predicciones sobre si son benignos o malignos utilizando un modelo de IA de Roboflow

    Flujo simple e intuitivo para usuarios, integrando backend y frontend

Tecnologías utilizadas

    Frontend: Next.js, TypeScript

    Backend: Node.js, Express, arquitectura en capas

    IA / ML: Modelo de clasificación de Roboflow

    Otros: FormData para subir imágenes y consumo de API REST

Instalación y ejecución local

Clonar el repositorio:

git clone https://github.com/ramirezaed/skin-lesion-classifier-front.git

Instalar dependencias del backend y frontend:

# Backend

cd backend
npm install

# Frontend

cd ../frontend
npm install

Configurar variables de entorno:
Crea un archivo .env en la raíz del backend con:

API_HOST=tu api

Levantar la aplicación:

# Backend

cd backend
npm run dev

# Frontend

cd ../frontend
npm run dev

Abrir en el navegador:

http://localhost:3000
