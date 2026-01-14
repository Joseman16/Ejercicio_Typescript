(() =>{
    //let isSuperman = true;
    let isSuperman: boolean = true;
    let isBataman: boolean = false;
    let isSpiderman: boolean;

    //Creo un ternario 
    //(verdadero) ? devuelvo 1er valor: devuelvo el 2do valor
    isSpiderman = (isBataman) ? true: false;
    console.log(isSpiderman);


    //AND:
    //isSuperman = true && false; // is false
    //isSuperman = false && true; //is falsse
    //isSuperman= false && false; // is false
    isSuperman = true && true; //is true


    //OR:
    //isBataman = false || false;
    //isBataman = true || false;
    isBataman = false || true;
    //isBataman = true || true;


    console.log(isSuperman);
    console.log(isBataman);

})()