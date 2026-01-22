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
export {};
//# sourceMappingURL=numbers.js.map