(() =>{
    type Hero = {
        name: string;
        age?: number;
        powers: (number[] | string[]);
        getName?: () => string;
    }

    let myCustomVariable: (string | number | Hero) = 'Clark Kent';
    
    console.log( typeof myCustomVariable );
    console.log( myCustomVariable );
    
    console.log('\n --- ');
    myCustomVariable = 20;
    console.log( typeof myCustomVariable );
    console.log( myCustomVariable );
    
    console.log('\n --- ');
    myCustomVariable = {
        name: 'Peter Parker',
        age: 21,
        powers: ['Super fuerza', 'Trepar muros']
    };
    console.log( typeof myCustomVariable );
    console.log( myCustomVariable );
    

})()