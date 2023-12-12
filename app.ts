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

function sum(a: number, b: string): number {
  return a + b; // Error de tipo: no se puede sumar un número y una cadena
}

const result = sum(5, "10");
console.log(result);
