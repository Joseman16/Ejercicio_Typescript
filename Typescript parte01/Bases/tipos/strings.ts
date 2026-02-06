(() => {
    const batman: any = 'Batman'
    const linternaVerde: string = "Linterna's Verde";
    const volcanNegro: string = `Volcan Negro`; 
    let nombre: string = "José";

    //const abc = 123;
    //console.log(`I'm ${batman}, ${abc.toString()}`);
    console.log(`I'm ${batman}`);

    //Conversión a mayúsculas
    console.log(batman.toUpperCase());

    console.log(batman[10]?.toUpperCase());
    console.log(batman[10]?.toUpperCase() || "No esta definido");
    console.log(batman[10]?.toUpperCase() || batman[2].toUpperCase());

    const years: number = 22;
    console.log(`I´m ${nombre}, years old: ${years}`);

}) ()