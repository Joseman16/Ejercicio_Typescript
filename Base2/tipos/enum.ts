(() =>{
    //Basicamente se convierte en una funcion
    enum AudioLevel {
        min = 1, //0 valores por defecto
        medium = 5, //1
        max = 10 // 2
    }
    //let audioLevel //10 (mas alto) y 1 (mas bajo)
    const cureentAudio = AudioLevel.medium;
    
    console.log(cureentAudio);
    console.log(AudioLevel);

})()