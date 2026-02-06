define("app", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const a = 10;
        console.log(a);
    })();
});
/*
message:string = "Hola mundo!";
//console.log(message);
const hero = {
    name: 'Ironman',
    age: 45
}
console.log(hero.age + 1)
*/
/*
const palabra1: string = "Hola mundo";
let palabra2: string = "Hola mundo cruel";
let palabra3:string;
palabra3 = "Hostia tio!!"
console.log(palabra1);
console.log(palabra2);
console.log(palabra3);
*/
/*
function sayHello(msg:string){
    console.log("Hola "+msg);
}

function suma(num1: number, num2: number){
    console.log("La suma: "+num1 + num2);
}
sayHello('Jose');
suma(2,7);
*/ 
define("Funciones/args-defaults", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const fullName = (firstName, lastName, upper = false) => {
            if (upper) {
                return `${firstName} ${lastName || '---'}`.toUpperCase();
            }
            else {
                return `${firstName} ${lastName || '---'}`;
            }
        };
        //Ahora se hce obligatorio colocar los parametros
        const name = fullName('Tony', 'Stark');
        console.log({ name });
    })();
});
define("Funciones/args-required", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const fullName = (firstName, lastName) => {
            /*if(!firstName){
                throw new  Error ('Nombre requerido');
            }*/
            return `${firstName} ${lastName}`;
        };
        //Ahora se hce obligatorio colocar los parametros
        const name = fullName('Tony', 'Stark');
        console.log({ name });
    })();
});
define("Funciones/args-rest", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const fullName = (firstName, ...restoDeNombre) => {
            return `${firstName} ${restoDeNombre.join(' ')}`;
        };
        const superman = fullName('Clark', 'Joseph', 'Kent', 'Leon');
        console.log({ superman });
    })();
});
define("Funciones/funciones01", ["require", "exports"], function (require, exports) {
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
});
define("Funciones/function-type", ["require", "exports"], function (require, exports) {
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
});
define("Objetos/objetos", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        var _a;
        let flash = {
            name: 'Josman',
            age: 22,
            powers: ['Super Velocidad', 'Viajar en el tiempo']
        };
        // flash = {
        //     name: 'Clark Kent',
        //     age:60,
        //     powers: ['Super Fuerza', 'Volar'],
        //     getNombre (){
        //         return this.name;
        //     }
        // }
        let flash2 = {
            name: 'Barry Allen',
            age: 25,
            powers: ['Super Velocidad', 'Viajar en el tiempo'],
        };
        //Esto sirve para agregar propiedades a un objeto ya declarado
        flash2 = {
            name: 'Clark Kent',
            age: 60,
            powers: ['Super Fuerza', 'Volar'],
            //Con el signo de interrogacion en la declaracion de la variable,
            //indicamos que esa propiedad es opcional
            getName() {
                return this.name;
            }
        };
        console.log((_a = flash2.getName) === null || _a === void 0 ? void 0 : _a.call(flash2));
    })();
});
define("Objetos/objetos02", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        let flash = {
            name: 'Barry Allen',
            age: 22,
            powers: ['Super Fuerza', 'Viajar en el tiempo']
        };
        let superman = {
            name: 'Clark Kent',
            age: 60,
            powers: [1]
        };
    })();
});
define("Objetos/type", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        let flash = {
            name: 'Barry Allen',
            age: 22,
            powers: [1, 2]
            //powers: ['Super Fuerza', 'Viajar en el tiempo']
        };
        let superman = {
            name: 'Clark Kent',
            age: 60,
            powers: ['Volar'],
            //powers: ['Super Fuerza', 'Volar'],
            getName() {
                return this.name;
            }
        };
        console.log(superman);
        console.log(flash);
    })();
});
define("Objetos/union-types", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        let myCustomVariable = 'Clark Kent';
        console.log(typeof myCustomVariable);
        console.log(myCustomVariable);
        console.log('\n --- ');
        myCustomVariable = 20;
        console.log(typeof myCustomVariable);
        console.log(myCustomVariable);
        console.log('\n --- ');
        myCustomVariable = {
            name: 'Peter Parker',
            age: 21,
            powers: ['Super fuerza', 'Trepar muros']
        };
        console.log(typeof myCustomVariable);
        console.log(myCustomVariable);
    })();
});
define("tipos/any", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        let avenger = 123;
        let exists;
        let power;
        avenger = 'Dr Strange';
        console.log(avenger.charAt(0));
        avenger = 150.13321958;
        console.log(avenger.toFixed(2));
        console.log(exists);
        console.log(power);
    })();
});
define("tipos/arrays", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        //const numbers:(string | number | boolean)[] = [1,2,3,4,5,'6',7,8,9,10]; (esto es raro, y no somos tan especificos)
        //numbers.push(true);
        console.log(numbers);
        const villians = ['Omega Rojo', 'Duende verde', 'Spiderman'];
        console.log("\nVillanos en MAYUSCULAS:");
        villians.forEach(v => console.log(v.toUpperCase()));
        console.log("\nVillanos en minusculas:");
        villians.forEach(v => console.log(v.toLowerCase()));
        console.log("\nVillanos con for tradicional:");
        for (let i = 0; i < villians.length; i++) {
            console.log(villians[i]);
        }
    })();
});
define("tipos/booleans", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        //let isSuperman = true;
        let isSuperman = true;
        let isBataman = false;
        let isSpiderman;
        //Creo un ternario 
        //(verdadero) ? devuelvo 1er valor: devuelvo el 2do valor
        isSpiderman = (isBataman) ? true : false;
        console.log(isSpiderman);
        //AND:
        //isSuperman = true && false; // is false
        //isSuperman = false && true; //is falsse
        //isSuperman= false && false; // is false
        isSuperman = true && true; //is true
        //OR:
        //isBataman = false || false;
        //isBataman = true || false;
        isBataman = false || true;
        //isBataman = true || true;
        console.log(isSuperman);
        console.log(isBataman);
    })();
});
define("tipos/enums", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        //Enumeración
        /*
        Automaticamente asigna los valores de menor a mayor
    
        enum AudioLevel {
            min, //0
            medium, //1
            max //2
        }
        */
        let AudioLevel;
        (function (AudioLevel) {
            AudioLevel[AudioLevel["min"] = 1] = "min";
            AudioLevel[AudioLevel["medium"] = 2] = "medium";
            AudioLevel[AudioLevel["max"] = 10] = "max";
        })(AudioLevel || (AudioLevel = {}));
        let currentAudio = AudioLevel.medium;
        console.log(currentAudio);
        console.log(AudioLevel);
        let Dia;
        (function (Dia) {
            Dia[Dia["Lunes"] = 1] = "Lunes";
            Dia[Dia["Martes"] = 2] = "Martes";
            Dia[Dia["Miercoles"] = 3] = "Miercoles";
            Dia[Dia["Jueves"] = 4] = "Jueves";
            Dia[Dia["Viernes"] = 5] = "Viernes";
            Dia[Dia["Sabado"] = 6] = "Sabado";
            Dia[Dia["Domingo"] = 7] = "Domingo";
        })(Dia || (Dia = {}));
        let diaHoy = Dia.Jueves;
        console.log("El dia numero: ", diaHoy);
        console.log(Dia);
    })();
});
define("tipos/never", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        //never != void
        //never != undefined
        //never == never}
        //Nerver: mi función no deber teminar exitosamente
        const error = (message) => {
            if (false) {
                throw new Error(message);
            }
            return 1;
        };
        error('Auxilio, necesito ayuda');
        console.log('Sigo vivo');
    })();
});
define("tipos/null-undefined", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        /*
            No me permite que unan variable que tiene definido
            un tipo de dato sea undefined
        */
        /* strictNullChecks, es una restricción*/
        //let nada: number = undefined;
        //let nada: boolean = undefined
        let isActive = undefined;
        console.log(isActive);
    })();
});
define("tipos/numbers", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        //any = "Cualquier tipo"
        //let avengers: any;
        let avengers = 5;
        console.log(avengers);
        const villans = 20;
        if (avengers < villans) {
            console.log("Estamos en problemas");
        }
        else {
            console.log("Nos salvamos");
        }
        //avengers = 123;
        //avengers = Number("123A"); //NaN -> Not a Number 
        avengers = Number("123");
        console.log({ avengers });
    })();
});
define("tipos/strings", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        var _a, _b, _c;
        const batman = 'Batman';
        const linternaVerde = "Linterna's Verde";
        const volcanNegro = `Volcan Negro`;
        let nombre = "José";
        //const abc = 123;
        //console.log(`I'm ${batman}, ${abc.toString()}`);
        console.log(`I'm ${batman}`);
        //Conversión a mayúsculas
        console.log(batman.toUpperCase());
        console.log((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase());
        console.log(((_b = batman[10]) === null || _b === void 0 ? void 0 : _b.toUpperCase()) || "No esta definido");
        console.log(((_c = batman[10]) === null || _c === void 0 ? void 0 : _c.toUpperCase()) || batman[2].toUpperCase());
        const years = 22;
        console.log(`I´m ${nombre}, years old: ${years}`);
    })();
});
define("tipos/tuplas", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        //Nombrre del héroe y su poder
        const hero = ['Dr. Strange', 100, true];
        hero[0] = 'Iroman';
        hero[1] = 200;
        hero[2] = false;
        console.log(hero);
    })();
});
define("tipos/void", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        //void = vacio
        //function callBatman(){}
        function callBatman() {
            return;
        }
        const callSuperman = () => {
            return;
        };
        //callBatman();
        let a = callBatman();
        console.log(a); // undefined
    })();
});
//# sourceMappingURL=main.js.map