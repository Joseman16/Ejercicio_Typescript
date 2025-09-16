
// Interfaz Vehiculo
interface Vehiculo {
  marca: string;
  velocidadMaxima: number;
}

// Clase Auto que implementa Vehiculo
class Auto implements Vehiculo {
  marca: string;
  velocidadMaxima: number;
  private velocidadActual: number;

  constructor(marca: string, velocidadMaxima: number) {
    this.marca = marca;
    this.velocidadMaxima = velocidadMaxima;
    this.velocidadActual = 0;
  }

  // Método para acelerar el auto
  acelerar(incremento: number = 10): void {
    this.velocidadActual += incremento;
    if (this.velocidadActual > this.velocidadMaxima) {
      this.velocidadActual = this.velocidadMaxima;
    }
    console.log(
      `${this.marca} aceleró a ${this.velocidadActual} km/h (Máx: ${this.velocidadMaxima} km/h)`
    );
  }
}

// Ejemplo de uso
const miAuto = new Auto("Toyota", 180);
miAuto.acelerar(); // +10
miAuto.acelerar(30); // +30
miAuto.acelerar(200); // No pasa de 180
