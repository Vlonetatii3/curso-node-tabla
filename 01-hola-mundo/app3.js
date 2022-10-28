

console.log('Inicio del programa');//1
setTimeout ( () => {
    console.log('Primer TimeOut');//5

}, 3000);



setTimeout( () => {
    console.log('Segundo Timeout');//2
}, 0);


setTimeout( () => {
    console.log('Tercer Timeout');//3
}, 0)



console.log('Fin del programa.');//4 :: 2 