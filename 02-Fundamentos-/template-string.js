const nombre = 'Deadpool';
const real = 'Wade Winston';

const normal = nombre + ' ' + real;
const template = `${ nombre } ${ real }`;


const html = `
<h1> hola </h1>
<p> mundo </p>

`;
console.log(normal);
console.log(template);
console.log(html);



console.log(normal === template);