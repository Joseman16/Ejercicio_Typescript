// 🔹 Variables de tipos básicos
let nombre: string = "José";
let edad: number = 25;
let activo: boolean = true;
let indefinido: undefined = undefined;
let nulo: null = null;

console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Activo:", activo);
console.log("Indefinido:", indefinido);
console.log("Nulo:", nulo);

// 🔹 Tupla para ubicación (lat, lng)
let ubicacion: [number, number] = [-2.170998, -79.922359]; // Ejemplo: Guayaquil
console.log("Ubicación (lat, lng):", ubicacion);

// 🔹 Enum para estados de una orden
enum EstadoOrden {
  Pendiente,
  Enviado,
  Entregado
}

// Uso del enum
let estado: EstadoOrden = EstadoOrden.Pendiente;
console.log("Estado de la orden:", EstadoOrden[estado]);
