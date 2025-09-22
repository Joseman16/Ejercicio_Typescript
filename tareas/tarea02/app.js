(function () {
    // Funciones Básicas
    function sumar(a, b) {
        return a + b;
    }
    var contar = function (heroes) {
        return heroes.length;
    };
    var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    contar(superHeroes[0]);
    contar(superHeroes[1]);
    contar(superHeroes[2]);
    contar(superHeroes[3]);
    //Parametros por defecto
    var llamarBatman = function (llamar) {
        if (llamar === void 0) { llamar = true; }
        if (llamar) {
            console.log("Batiseñal activada");
        }
    };
    llamarBatman();
    // Rest?
    var unirheroes = function (personas) {
        return personas.join(" ");
    };
    console.log(typeof superHeroes);
    // Tipo funcion
    var noHaceNada = function (numero, texto, booleano, arreglo //aqui le indico que es de tipo superHeroe
    ) {
        if (booleano === void 0) { booleano = true; }
    };
    /*const noHaceNada = (
      numero: number,
      texto: string,
      booleano: boolean = true,
      arreglo: typeof superHeroes //aqui le indico que es de tipo superHeroe
    ):object => {
      return {};
    };*/
    // Crear el tipo de funcion que acepte la funcion "noHaceNada"2
    var noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada;
    console.log(noHaceNadaTampoco(16, 'Jose', true, ['Aburrido', 'sin ganas de vivir', 'introvertido', 'pero a la vez con ganas de triunfar', 'quiero comerme el mundo']));
})();
