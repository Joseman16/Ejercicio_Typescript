(() =>{
    //3 o 4 formas de definir strings
    //const batman:any = 'Batman';
    const batman:string = 'Batman';
    const linternaVerde:string = "Lintern's Verde";
    const volcanNegro:string = `Héroe: Volcan negro `;


    console.log(`I'm ${batman}`);
    console.log(batman.toUpperCase());

    console.log(batman[10]?.toUpperCase() || 'No esta presente');

})()