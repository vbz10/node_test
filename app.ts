function saludar(nombre: string): string {
  return `Hola, ${nombre}!`;
}

const mensaje = saludar("Mundo");
console.log(mensaje);

// Nueva función añadida
function sumar(a: number, b: number): number {
  return a + b;
}

const resultado = sumar(5, 3);
console.log(`La suma de 5 y 3 es: ${resultado}`);