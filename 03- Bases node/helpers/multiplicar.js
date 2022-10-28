
const fs = require('fs');
const colors = require('colors');
const crearArchivo = async( n=5, listar = false, hasta = 5 ) => {
        try{
            let salida = '';
                                    
            for(let i = 1 ; i <= hasta ; i ++){
                salida += `${n} ${'x'.gray} ${ i } ${'='.red} ${ n*i}\n`;
            }
            if(listar === false){
                console.log(colors.red('================'))
                console.log(colors.yellow(` Tabla del ${n}`))
                console.log(colors.cyan('================'))
                console.log(salida);
            }
           
                  
            fs.writeFileSync( `./salidas/tabla-${n}.txt`, salida);


        
            return `Tabla-${ n}.txt creado`;    

        }catch(error){

        }
    
        fs.writeFileSync( `tabla-${n}.txt`, salida);
        
            return `Tabla-${ n}.txt creado`;    
    }

    

 
module.exports ={
    crearArchivo
};




