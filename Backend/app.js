// Configuración del servidor y gestionar la lógica de negocios
// npm run start
// Primero se importan las dependencias
// Configurar las dependencias 
// npm start (ejecuta todo) node nombreDelArchivo.js ejecuta solo el archivo seleccionado
// npm run dev (ejecuta nodemon)
// ctrl + c en la terminal para parar nodemon
// get, post, put, delete

import express from 'express'; 

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('¡Server works');
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
