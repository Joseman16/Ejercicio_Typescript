//Parametros por defecto
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || '----'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || '----'}`;
        }
    };
    //let noName : any;
    //let noName: string;
    //const name = fullName('Tony', true);
    const name = fullName('Tony', 'stark', true);
    console.log({ name });
})();
export {};
//# sourceMappingURL=args-default.js.map