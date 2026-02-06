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
//# sourceMappingURL=objetos.js.map