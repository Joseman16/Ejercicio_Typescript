"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Función anonima, autoinvocada
(() => {
    const hero = 'Flash';
    //retorna un string
    function returName() {
        return hero;
    }
    const activateBatiSignal = () => {
        return '¡Batiseñal activada!';
    };
    console.log(activateBatiSignal());
    console.log(typeof activateBatiSignal());
    const heroName = returName();
    console.log(heroName);
    /*No retorna nada
    function returName2():void{
        
    }
    */
})();
//# sourceMappingURL=funciones01.js.map