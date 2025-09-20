//Parametros REST

(() =>{

    const fullName = (firsname: string, ...restArgs:string[]): string => {
        return `${firsname} ${restArgs.join(' ')}`;
    } 

    //(const fullName = (firsname: string);
    const superman = fullName ('Clark','Joseph','Kent', 'Herrera');
    console.log({superman});

})()