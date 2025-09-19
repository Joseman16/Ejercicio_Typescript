(() =>{

    //No utilizar any 
    let avengers: any = 123;
    const exist: any = "Estoy aqui";
    let power: number = 0;

    avengers = 'Dr Strange';
    console.log((avengers as string).charAt(0));

    avengers = 1293.3232;
    console.log((<number>avengers).toFixed(2));

    console.log(exist);
    console.log(power);
})()