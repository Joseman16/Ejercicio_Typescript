//Parametros opcionales de las funciones
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || '----'}`;
    };
    //let noName : any;
    //let noName: string;
    //const name = fullName('Tony', true);
    const name = fullName('Tony');
    console.log({ name });
})();
export {};
//# sourceMappingURL=args-optional.js.map