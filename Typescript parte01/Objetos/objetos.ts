(() =>{
    let flash = {
        name: 'Josman',
        age: 22, 
        powers: ['Super Velocidad', 'Viajar en el tiempo']
    }

    // flash = {
    //     name: 'Clark Kent',
    //     age:60,
    //     powers: ['Super Fuerza', 'Volar'],
    //     getNombre (){
    //         return this.name;
    //     }
    // }

    let flash2: {name: string, age: number, powers: string[], getName?: () => string} = {
        name: 'Barry Allen',
        age: 25,
        powers: ['Super Velocidad', 'Viajar en el tiempo'],
    }   


    //Esto sirve para agregar propiedades a un objeto ya declarado
    flash2 = {
        name: 'Clark Kent',
        age:60,
        powers: ['Super Fuerza', 'Volar'],
        
        //Con el signo de interrogacion en la declaracion de la variable,
        //indicamos que esa propiedad es opcional
        getName(){
            return this.name;
        }
    }

    console.log( flash2.getName?.());

}) ()