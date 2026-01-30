(() =>{
    const fullName = (firstName:string, lastName?:string, upper: boolean = false): string =>{
        
        if(upper){
            return `${firstName} ${lastName || '---'}`.toUpperCase();
        }else{
            return `${firstName} ${lastName || '---'}`
        }

        
    }


    //Ahora se hce obligatorio colocar los parametros
    const name = fullName('Tony', 'Stark');
    console.log({name})

}) ()