// 🔹 1. Función que concatena dos strings
function concatenar(a: string, b: string): string {
  return a + b;
}
console.log("Concatenación:", concatenar("Hola ", "Mundo"));

// 🔹 2. Función flecha que multiplica dos números
const multiplicar = (x: number, y: number): number => x * y;
console.log("Multiplicación:", multiplicar(5, 3));

// 🔹 3. Función que devuelve la cantidad de elementos de un array
function contarElementos(arr: string[]): number {
  return arr.length;
}
console.log("Cantidad de elementos:", contarElementos(["uno", "dos", "tres"]));

// 🔹 4. Función con apellido opcional
function nombreCompleto(nombre: string, apellido?: string): string {
  return apellido ? `${nombre} ${apellido}` : nombre;
}
console.log("Nombre completo:", nombreCompleto("José"));
console.log("Nombre completo:", nombreCompleto("José", "León"));

// 🔹 5. Función con parámetro con valor por defecto
function saludar(modo: string = "simple"): string {
  return modo === "simple" ? "Hola!" : "¡Saludos cordiales!";
}
console.log("Saludo (default):", saludar());
console.log("Saludo (formal):", saludar("formal"));

// 🔹 6. Función con parámetro rest
function imprimirNombres(...nombres: string[]): void {
  console.log("Lista de nombres:");
  nombres.forEach((n) => console.log("- " + n));
}
imprimirNombres("Ana", "Luis", "María", "Pedro");
