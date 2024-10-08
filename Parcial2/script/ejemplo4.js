// api document - Sirve para acceder a los elementos del álrbol DOM

const boton=document.getElementById("btn");
const contenedor=document.getElementById("contenedor");
console.log(boton);




var contador=0;
template=`<div class='salida'> El total de clicks es
            ${contador}
            </div]>`;
boton.addEventListener('click', function(){
    contador++;
    //console.log("Total de clicks "+contador);
    contenedor.insertAdjacentHTML('beforeend', template);
});