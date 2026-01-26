(() => {
    //Enumeración
    /*
    Automaticamente asigna los valores de menor a mayor

    enum AudioLevel {
        min, //0
        medium, //1
        max //2
    }
    */
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.medium;
    console.log(currentAudio);
    console.log(AudioLevel);
    let Dia;
    (function (Dia) {
        Dia[Dia["Lunes"] = 1] = "Lunes";
        Dia[Dia["Martes"] = 2] = "Martes";
        Dia[Dia["Miercoles"] = 3] = "Miercoles";
        Dia[Dia["Jueves"] = 4] = "Jueves";
        Dia[Dia["Viernes"] = 5] = "Viernes";
        Dia[Dia["Sabado"] = 6] = "Sabado";
        Dia[Dia["Domingo"] = 7] = "Domingo";
    })(Dia || (Dia = {}));
    let diaHoy = Dia.Jueves;
    console.log("El dia numero: ", diaHoy);
    console.log(Dia);
})();
export {};
//# sourceMappingURL=enums.js.map