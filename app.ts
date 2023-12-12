/*function saludar(nombre: string): string {
  return `Hola, ${nombre}!`;
}

const mensaje = saludar("Mundo");
console.log(mensaje);

// Nueva función añadida
function sumar(a: number, b: number): number {
  return a + b;
}

const resultado = sumar(5, 3);
console.log(`La suma de 5 y 3 es: ${resultado}`);*/

import * as express from 'express';

const app = express();

app.get('/login', (req, res) => {
  // Simulando una vulnerabilidad al almacenar la contraseña en texto plano
  const password = req.query.password;
  console.log(`Contraseña ingresada: ${password}`);

  // Aquí debería haber lógica para comparar y verificar la contraseña (esto es solo para el ejemplo)
  // Nunca deberías almacenar contraseñas en texto plano en un entorno de producción

  res.send('¡Login exitoso!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
