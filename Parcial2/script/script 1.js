console.log("JS cargado");

let edad; //declarasion
edad=18; //asignacion
let nombre="Juan"; //declaracion y asignacion
console.log("Mi nombre es: "+nombre);

var apellidoPaterno = "De la cruz";
console.log("Mi apellido es: " + apellidoPaterno);

var preferencia="tacos";
if (true){
    let preferencia="pizza";
    console.log(preferencia);
}
console.log(preferencia);

//var se utiliza para variables globales
//let se utiliza para variables locales
//que su alcance el limitado solo a un bloue de codigo

const sexo = "F";
console.log(sexo);
//sexo="M";//variables de tipo constante
//no permiten las aisgnciones de nuevos valores
//Uncaught TypeError: Assignment to constant variable

//alt+96 ``

let template=`Mi nombre es ${nombre} y mi apellido es ${apellidoPaterno} y mi edad es ${edad}`;
console.log(template);