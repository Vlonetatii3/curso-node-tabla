


//setTimeout( () => {
  //  console.log('Hola Mundo');

//}, 1000);


const getUsarioByID = ( id ) => {
    const usario = {
        id,
        nombre: 'Fernando'
    }
}


setTimeout( () => {
    console.log(usario)
}, 1500 )


getUsarioByID(10, ( usuario) => {
    console.log(usuario.id );
    console.log( usuario.nombre.toUpperCase());
    
});



