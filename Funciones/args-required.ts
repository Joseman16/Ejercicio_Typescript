(() =>{
    const fullName = (firstName:string, lastName:(string | boolean)): string =>{
        
        /*if(!firstName){
            throw new  Error ('Nombre requerido');   
        }*/
       
        return `${firstName} ${lastName}`
    }


    //Ahora se hce obligatorio colocar los parametros
    const name = fullName('Tony', 'Stark');
    console.log({name})

}) ()