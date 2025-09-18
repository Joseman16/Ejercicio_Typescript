"use strict";
(() => {
    //let avengers; //al principio es any 
    let avengers = 10;
    console.log(avengers);
    const villans = 20;
    //villans.toFixed //sacar la parte fija
    if (avengers < villans) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
    //avengers = 123;
    avengers = Number('123');
    console.log({ avengers });
})();
//# sourceMappingURL=numbers.js.map