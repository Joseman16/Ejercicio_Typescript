//Parametros obligatorios de las funciones

(() =>{
    const fullName = ( firstName:string, lastName:(string | boolean)) => {
        
        
        return `${firstName} ${lastName}`;
    
    }

    //let noName : any;
    //let noName: string;

    //const name = fullName('Tony', true);
    const name = fullName('Tony', 'Stark');

    console.log({name});

})()