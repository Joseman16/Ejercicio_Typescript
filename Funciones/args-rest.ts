(() =>{

    const fullName = (firstName:string, ...restoDeNombre:string[]):string =>{
        return `${firstName} ${restoDeNombre.join(' ')}`;
    }


    const superman = fullName('Clark', 'Joseph', 'Kent', 'Leon');

    console.log({superman});

}) ()