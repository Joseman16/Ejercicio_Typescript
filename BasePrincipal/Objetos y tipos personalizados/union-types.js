(() => {
    //Esta variable se puede convertir uan variable de 3 tipos 
    //de datos diferentes, dependiendo de la situación
    let myCustomVariable = 'Josema';
    console.log(typeof myCustomVariable);
    myCustomVariable = 23;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Spiderman',
        age: 21,
        powers: [1, 2]
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();
export {};
//# sourceMappingURL=union-types.js.map