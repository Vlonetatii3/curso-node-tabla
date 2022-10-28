

const Deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre(){
        return ` ${ this.nombre} ${ this.apellido} ${ this.poder}`
    }
}




function imprimeHeroe(heroe){
    const { nombre, apellido, poder, edad = 0} =heroe;
    console.log(nombre, apellido, poder, edad);

}
//imprimeHeroe( Deadpool );


const heroes = ['Deadpool', 'Superman', 'Batman'];
const [h1, h2, h3] = heroes;


console.log(h1,h2,h3);

