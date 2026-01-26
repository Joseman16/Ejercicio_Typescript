(() =>{

    //Enumeración
    /*
    Automaticamente asigna los valores de menor a mayor

    enum AudioLevel {
        min, //0
        medium, //1
        max //2
    }
    */
    enum AudioLevel {
        min = 1,
        medium, 
        max = 10
    }

    let currentAudio = AudioLevel.medium;
    
    console.log(currentAudio);
    console.log(AudioLevel);


    enum Dia {
        Lunes = 1,
        Martes,
        Miercoles,
        Jueves,
        Viernes,
        Sabado,
        Domingo
    }

    let diaHoy: Dia = Dia.Jueves;
    console.log("El dia numero: ", diaHoy);
    console.log(Dia);


}) ()