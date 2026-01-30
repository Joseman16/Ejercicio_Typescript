(() =>{
    /*
        No me permite que unan variable que tiene definido 
        un tipo de dato sea undefined
    */

    /* strictNullChecks, es una restricción*/
    //let nada: number = undefined;
    //let nada: boolean = undefined

    let isActive: (boolean | undefined) = undefined;
    console.log(isActive);

})()