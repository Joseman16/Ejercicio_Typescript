"use strict";
(() => {
    //función void, es cuando no retona nada...
    function callBatman() {
    }
    const callSuperman = () => {
    };
    const operaciones = () => {
        console.log("Suma: " + (2 + 2));
        console.log("Resta: " + (10 - 4));
        console.log("Multiplicación: " + (2 * 8));
        console.log("División: " + (12 / 2));
        console.log("Residuo de la divisón: " + (13 % 3));
        console.log("Potencia: " + (Math.pow(2, 4)));
        console.log("Raiz cuadrada: " + Math.sqrt(64));
    };
    operaciones();
    const a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=void.js.map