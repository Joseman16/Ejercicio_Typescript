(() =>{
    //añadir numero
    const addNumber =  (a:number, b:number) => a + b;
    /*const addNumber = (a: number, b: number) => {
        return a + b;
    }*/

    //saludar
    const greet = (name:string) => `Hola ${name}`;
    //salvar al mundo
    const saveTheWorld = () =>  `El mundo esta salavado`;

    //función que le dimos un valor...
    //let myFunction; //ahora es de tipo any
    
    /*myFunction = 10;
    console.log(myFunction);*/

    //En esta función digo que teiene dos parametros de tipo number
    //Y que retorna un tipo number...
    //let myFunction: (y:number, z:number) => number;

    //Recibe string, y retorna un string
    //let myFunction: (y:string) => string;

    //Solo retorna un string
    //let  myFunction: () => string;

    let myFunction: Function;

    myFunction = addNumber;

    //Le estoy asignando esta variable "myFunction" propiedades del
    //metodo addNumber, que este si recibe 2 parametros...
    console.log(myFunction(3,4));


    //ahora le asignamos la propiedades del metodo greet
    myFunction = greet
    console.log(myFunction("Josema"))

    //Ahora solo le asigno las propiedades de Salavar el mundo,
    //solo retorna ese mensaje...
    myFunction = saveTheWorld
    console.log(myFunction())


    //saber leer firma en typescript
    
})()