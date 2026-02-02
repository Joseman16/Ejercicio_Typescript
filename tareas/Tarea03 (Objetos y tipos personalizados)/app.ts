
type transformers = {
  carroceria: string;
  modelo:string;
  antibalas:boolean;
  pasajeros:number;
  disparar?:()=>void; // El metodo disparar es opcional
}

// Objetos
const batimovil = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

const bumblebee = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};

console.log(batimovil);
console.log(bumblebee);


// Villanos debe de ser un arreglo de objetos personalizados

type villano = {
  nombre:string;
  edad: (number | undefined);
  mutante:boolean;
}

const villanos:villano[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];

console.log(villanos);

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis

type charlesType = {
  poder:string;
  estatura:number;
}

const charles: charlesType = {
  poder:"psiquico",
  estatura: 1.78
};

type apocalipsisType = {
  lider:boolean;
  miembros:string[];
}

const apocalipsis: apocalipsisType = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: (charlesType | apocalipsisType | undefined);

console.log("\n-- Mystique --");
mystique = charles;
console.log(mystique);


console.log("\n-- Mystique cambia de forma --");
mystique = apocalipsis;
console.log(mystique);