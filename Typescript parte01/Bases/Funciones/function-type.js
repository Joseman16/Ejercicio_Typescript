"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    const addNumber = (a, b) => {
        return a + b;
    };
    const addNumber2 = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado`;
    /*
        Tenemos que especificar siempre que es de tipo function
        aunque sin especficar el tipo de dato, igual nos funciona
        
        -let myFunction

        Pero siempre hay que hacer esto:

        -let myFunction: Function;

    */
    let myFunction;
    let myFunction1;
    let myFunction2;
    let myFunction3;
    //myFunction = 10; Ya mo se puede asignar un valor, ya que no es una variable
    //console.log(myFunction);
    /*
        La variable myFnction, se convierte en una función
        cuando le asigno una función, ejemplo:
            myFunction = addNumber;
    */
    myFunction1 = addNumber;
    console.log(myFunction1(2, 3));
    myFunction2 = greet;
    console.log(myFunction2('Josema'));
    myFunction3 = saveTheWorld;
    console.log(myFunction3());
})();
//# sourceMappingURL=function-type.js.map