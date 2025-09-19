(() =>{
    //const numbers:(string | number | boolean )[] = [1,2,3,4,5,'6',7,8,9,10]; 
    const numbers:number[] = [1,2,3,4,5,6,7,8,9,10];

    numbers.push(11); //insertar datos (push)
    console.log(numbers);

    const villanos = ['Omega Rojo', 'Duende verde', 'Optupus']
    villanos.forEach(v => console.log(v.toUpperCase()) ); //recorrer arreglo (forEach)



})()