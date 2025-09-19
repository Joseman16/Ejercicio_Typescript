"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const hero1 = [batman, existe];
    const hero2 = [superman, existe];
    const villano = ['Lex Lutor', 5, true];
    villano[0] = 'Lex Lutor 2';
    villano[1] = 10;
    villano[2] = false;
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    const fuerzaFlash = 5;
    const fuerzaSuperman = 100;
    const fuerzaBatman = 1;
    const fuerzaAcuaman = 0;
    let enumeraciones;
    (function (enumeraciones) {
        enumeraciones[enumeraciones["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
        enumeraciones[enumeraciones["fuerzaBatman"] = 1] = "fuerzaBatman";
        enumeraciones[enumeraciones["fuerzaFlash"] = 2] = "fuerzaFlash";
        enumeraciones[enumeraciones["fuerzaSuperman"] = 3] = "fuerzaSuperman";
    })(enumeraciones || (enumeraciones = {}));
    console.log(enumeraciones);
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
//# sourceMappingURL=app.js.map