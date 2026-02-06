(() =>{

    //never != void
    //never != undefined
    //never == never}

    //Nerver: mi función no deber teminar exitosamente
    const error = (message: string):(never | number) =>{
        
        if(false){
            throw new Error(message);
        }
        return 1;
    }

    error('Auxilio, necesito ayuda');
    console.log('Sigo vivo');

}) ()