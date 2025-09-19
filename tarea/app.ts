(() => {

    // Tipos
    const batman:string = 'Bruce';
    const superman: string = 'Clark';
    const existe:boolean = false;
  
    // Tuplas
    const parejaHeroes:[string, string] = [batman, superman];
    const hero1:[string, boolean] = [batman, existe];
    const hero2:[string, boolean] = [superman, existe];


    const villano:[string, Number, boolean] = ['Lex Lutor',5,true];
    villano[0] = 'Lex Lutor 2';
    villano[1] = 10;
    villano[2] = false;

  

    // Arreglos
    const aliados: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    const fuerzaFlash:number = 5;
    const fuerzaSuperman:number = 100;
    const fuerzaBatman:number = 1;
    const fuerzaAcuaman:number = 0;

    enum fuerzah1{
      fuerzaAcuaman,
      fuerzaBatman,
      fuerzaFlash,
      fuerzaSuperman
    }

    enum fuerzah2{
      Acuaman = 0,
      Batman = 1,
      Flash = 5,
      Superman = 100
    }

    const fFlash = fuerzah2.Flash;
    const fSuperman = fuerzah2.Superman;
    const fBatman = fuerzah2.Batman;
    const fAcuaman = fuerzah2.Acuaman;

    console.log(fuerzah1);
    console.log(fuerzah2);
  
    // Retorno de funciones
    function activar_batiseñal():string{
      return 'activada';
    }
  
    function pedir_ayuda():void{
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = poder.length;
    console.log( "El valor del número: ", poder as number);
    console.log( "La cantidad de digitos: ", largoDelPoder);
  
  
  })()
  
  