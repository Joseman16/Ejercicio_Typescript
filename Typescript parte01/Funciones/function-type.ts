(() =>{
    const addNumber = (a: number, b:number) =>{
        return a + b;
    }

    const  addNumber2 = (a: number, b: number) => a + b;

    const greet = (name: string) => `Hola ${name}`;

    const saveTheWorld = ():string =>`El mundo está salvado`

    /*
        Tenemos que especificar siempre que es de tipo function
        aunque sin especficar el tipo de dato, igual nos funciona
        
        -let myFunction

        Pero siempre hay que hacer esto:

        -let myFunction: Function;

    */
    
    let myFunction: Function;

    let myFunction1: (y: number, z:number) => number;

    let myFunction2: (y:string) => string;

    let myFunction3: () => string;

    //myFunction = 10; Ya mo se puede asignar un valor, ya que no es una variable
    //console.log(myFunction);

    /*
        La variable myFnction, se convierte en una función
        cuando le asigno una función, ejemplo:
            myFunction = addNumber;     
    */
    myFunction1 = addNumber;
    console.log(myFunction1(2,3));

    myFunction2 = greet;
    console.log(myFunction2('Josema'));

    myFunction3 = saveTheWorld;
    console.log(myFunction3());

})()