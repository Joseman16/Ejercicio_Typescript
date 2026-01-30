(() => {

    // Tipos
    const batman:string = 'Bruce';
    const superman:string = 'Clark';
  
    const existe:boolean = false;
  
    // Tuplas
    const parejaHeroes:[string, string] = [batman,superman];
    const villano:[string, number, boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    enum fuerzas {
      fuerzaFlash = 5,
      fuerzaSuperman = 100,
      fuerzaBatman = 1,
      fuerzaAcuaman = 0
    } 
    console.log('fuerza de bartman: ', fuerzas.fuerzaBatman);
    console.log('fuerza de Supermna: ',fuerzas.fuerzaSuperman)

  
    // Retorno de funciones
    function activar_batiseñal(): string{
      return 'activada';
    }
  
    function pedir_ayuda():void{
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    /*const poder: any = '100';
    const largoDelPoder:number = poder.length;
    console.log( largoDelPoder );*/
  
    
    const poder: unknown = '100';

    // Error sin aserción (casting, cast)
    // poder.length

    const largo = (poder as string).length;
    console.log('Digitos del poder: ', largo);
    const nivel_poder = (poder as number);
    console.log('Nivel de poder: ', nivel_poder)

  })()
  
  