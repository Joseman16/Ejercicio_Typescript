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
export {};
//# sourceMappingURL=arrays.js.map