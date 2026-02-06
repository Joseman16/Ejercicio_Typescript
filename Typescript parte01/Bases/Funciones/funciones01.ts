//Función anonima, autoinvocada
(() =>{
    const hero: string = 'Flash';

    //retorna un string
    function returName():string{
        return hero;
    }

    const activateBatiSignal = (): string =>{
        return '¡Batiseñal activada!'
    }

    console.log(activateBatiSignal());
    console.log(typeof activateBatiSignal());

    const heroName = returName();
    console.log(heroName)

    /*No retorna nada
    function returName2():void{
        
    }
    */

}) ()