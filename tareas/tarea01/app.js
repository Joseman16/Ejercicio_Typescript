"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let fuerzas;
    (function (fuerzas) {
        fuerzas[fuerzas["fuerzaFlash"] = 5] = "fuerzaFlash";
        fuerzas[fuerzas["fuerzaSuperman"] = 100] = "fuerzaSuperman";
        fuerzas[fuerzas["fuerzaBatman"] = 1] = "fuerzaBatman";
        fuerzas[fuerzas["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
    })(fuerzas || (fuerzas = {}));
    console.log('fuerza de bartman: ', fuerzas.fuerzaBatman);
    console.log('fuerza de Supermna: ', fuerzas.fuerzaSuperman);
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    /*const poder: any = '100';
    const largoDelPoder:number = poder.length;
    console.log( largoDelPoder );*/
    const poder = '100';
    // Error sin aserción (casting, cast)
    // poder.length
    const largo = poder.length;
    console.log('Digitos del poder: ', largo);
    const nivel_poder = poder;
    console.log('Nivel de poder: ', nivel_poder);
})();
//# sourceMappingURL=app.js.map