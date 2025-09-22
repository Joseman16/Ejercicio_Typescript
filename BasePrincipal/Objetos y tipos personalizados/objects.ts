(() => {
  //Esto es un objeto
  /*let flash:object = {
        name: 'Barry Allen',
        age:24,
        powers:['SuperVelocidad', 'Viaja en el tiempo']
    }*/

  let flash: { name: string, age?: number, powers: string[], getName?: () => string } = { 
    name: "Barry Allen",
    age: 20,
    powers: ["SuperVelocidad", "Viaja en el tiempo"],
    getName() {
      return this.name;
    }
  }

  //El getNombre es obligatorio o no...
  /*flash = {
    name: "Clark Kent",
    //age: 60,
    powers: ["super fuerza"],
    getName() {
      return this.name;
    }
  }*/

    let superman: { name: string, age?: number, powers: string[], getName?: () => string } = { 
    name:   "Clark Kent",
    age: 50,
    powers: ["SuperVelocidad", "fuerza"],
  }

  if (flash.getName) {
    console.log(flash.getName());
  } else {
    console.log(flash.name);
  }
})();
