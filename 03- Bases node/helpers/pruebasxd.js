const crearArchivo = ( n = 5) => {

    return new Promise(( resolve, reject ) => {

        const numero = numeros.find( _N => n.n === n )?.numero;

        ( numero ) 
            ? resolve( numero )
            : reject( `No se ha podido imprimir correctamente a tabla....` );
    });
}




