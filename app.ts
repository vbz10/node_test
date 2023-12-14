/*import * as express from 'express';
const app = express();

// Ejemplo 1: Uso de eval (no recomendado)
app.get('/eval-example', (req, res) => {
  const user_input = req.query.input;
  eval(user_input); // Evita esto en aplicaciones del mundo real
  res.send('Evaluación completa');
});

// Ejemplo 2: Uso de exec en child_process (no recomendado)
app.get('/exec-example', (req, res) => {
  const command = req.query.command;
  const { exec } = require('child_process');
  exec(command); // Evita ejecutar comandos no validados
  res.send('Comando ejecutado');
});

// Ejemplo 3: Concatenación de rutas insegura (no recomendado)
app.get('/path-concat-example', (req, res) => {
  const user_input = req.query.filename;
  const filePath = '/uploads/' + user_input; // Evita esto y valida las rutas de archivo
  res.send('Ruta de archivo concatenada');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});*/

import * as express from 'express';
const app = express();

// Ruta segura sin vulnerabilidades
app.get('/safe', (req, res) => {
  res.send('Operación segura');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

