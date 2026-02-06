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
//# sourceMappingURL=args-required.js.map