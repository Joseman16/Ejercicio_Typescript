//Parametros REST
(() => {
    const fullName = (firsname, ...restArgs) => {
        return `${firsname} ${restArgs.join(' ')}`;
    };
    //(const fullName = (firsname: string);
    const superman = fullName('Clark', 'Joseph', 'Kent', 'Herrera');
    console.log({ superman });
})();
export {};
//# sourceMappingURL=args-rest.js.map