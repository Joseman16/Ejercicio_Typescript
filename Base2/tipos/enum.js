"use strict";
(() => {
    //Basicamente se convierte en una funcion
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 5] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max"; // 2
    })(AudioLevel || (AudioLevel = {}));
    //let audioLevel //10 (mas alto) y 1 (mas bajo)
    const cureentAudio = AudioLevel.medium;
    console.log(cureentAudio);
    console.log(AudioLevel);
})();
//# sourceMappingURL=enum.js.map