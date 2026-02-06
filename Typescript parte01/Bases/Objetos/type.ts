(() =>{

    //Palabra reservada type
    type Hero = {
        name:string;
        age?: number;
        powers: (number[] | string[]);
        getName?: () => string;
    }
 

    let flash:Hero = {
        name: 'Barry Allen',
        age:22,
        powers: [1,2]
        //powers: ['Super Fuerza', 'Viajar en el tiempo']
    }

    let superman: Hero = {
        name: 'Clark Kent',
        age:60,
        powers: ['Volar'],
        //powers: ['Super Fuerza', 'Volar'],
        getName(){
            return this.name;
        }
    }

    console.log( superman);
    console.log( flash);

}) ()