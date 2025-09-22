(() => {
  // Funciones Básicas
  function sumar(a: number, b: number):number {
    return a + b;
  }

  const contar = (heroes: string[]):number => {
    return heroes.length;
  };

  const superHeroes:string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
  contar(superHeroes);


  //Parametros por defecto
  const llamarBatman = (llamar: boolean = true) => {
    if (llamar) {
      console.log("Batiseñal activada");
    }
  };

  llamarBatman();

  // Rest?
  const unirheroes = (personas: string[]) => {
    return personas.join(" ");
  };

  console.log(typeof superHeroes);
  // Tipo funcion
  /*const noHaceNada = (
    numero: number,
    texto: string,
    booleano: boolean = true,
    arreglo: Array<string> //aqui le indico que es de tipo superHeroe
  ) => {};

  const noHaceNada = (
    numero: number,
    texto: string,
    booleano: boolean = true,
    arreglo: typeof superHeroes //aqui le indico que es de tipo superHeroe
  ):object => {
    return {};
  };*/

  const noHaceNada = (
    numero: number,
    texto: string,
    booleano: boolean = true,
    arreglo: string[] 
  ) => {};


  // Crear el tipo de funcion que acepte la funcion "noHaceNada"2
  let noHaceNadaTampoco:(n:number, s:string, b:boolean, a:string[]) => void;
  noHaceNadaTampoco = noHaceNada;

  console.log(noHaceNadaTampoco(16, 'Jose', true, ['Aburrido', 'sin ganas de vivir', 'introvertido', 'pero a la vez con ganas de triunfar', 'quiero comerme el mundo']));
})();
{}