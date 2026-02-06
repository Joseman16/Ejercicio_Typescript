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
//# sourceMappingURL=type.js.map