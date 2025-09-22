(() => {
    //Esto es un objeto 
  type Hero = {
    name: string;
    age?: number;
    powers: number[];
    getName?: () => string;
  };

  //Esta variable se puede convertir uan variable de 3 tipos 
  //de datos diferentes, dependiendo de la situación
  let myCustomVariable: (string | number | Hero) = 'Josema';
  console.log( typeof myCustomVariable);

  myCustomVariable = 23;
  console.log (typeof myCustomVariable);

  myCustomVariable ={
    name: 'Spiderman',
    age:21,
    powers: [1,2]
  }

  console.log(typeof myCustomVariable);
  console.log(myCustomVariable);
})();
