(() =>{
    let isSuperman: boolean = true;
    let isBatman: boolean = true;

    //isSuperman = true && true; //v and v = v
    isSuperman = (isBatman) ? true:false;

    console.log({isSuperman})
    console.log({isBatman})
})()