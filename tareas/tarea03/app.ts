(() => {
  type auto = {
    carroceria: string,
    modelo: string,
    antibalas: boolean,
    pasajeros: number,
    disparar?: () => void
  }

  // Objetos
  const batimovil:auto = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4,
  };

  const bumblebee:auto = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
      // El metodo disparar es opcional
      console.log("Disparando");
    },
  };

  // Villanos debe de ser un arreglo de objetos personalizados
  type Villano = {
    nombre: string,
    edad: number | undefined,
    mutante: boolean
  };

  const villanos: Villano[] = [
    {
      nombre: "Lex Luthor",
      edad: 54,
      mutante: false,
    },
    {
      nombre: "Erik Magnus Lehnsherr",
      edad: 49,
      mutante: true,
    },
    {
      nombre: "James Logan",
      edad: undefined,
      mutante: true,
    },
  ];

  // Multiples tipos
  // cree dos tipos, uno para charles y otro para 
  type charle = {
    poder: String,
    estatura: Number
  }
  
  type apoc = {
    lider:true,
    miembros: string[]
  }


  const charles: charle = {
    poder: "psiquico",
    estatura: 1.78,
  };

  const apocalipsis:apoc = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
  };

  // Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
  let mystique: charle | apoc;

  mystique = charles;
  console.log(mystique);

  mystique = apocalipsis;
  console.log(mystique)

})();
