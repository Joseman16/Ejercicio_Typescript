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
export {};
//# sourceMappingURL=strings.js.map