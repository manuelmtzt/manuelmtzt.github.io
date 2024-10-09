const api="https://pokeapi.co/api/v2/pokemon/1/";
const contenedor=document.getElementById("contenedor");
//fetch consulta a una url mediante los verbos de http

async function consultarPokemon(){
    let consulta = await fetch(api);
    let datos = await consulta.json(); //json es un intercambiador de datos
    dibujarPokemon(datos);
    console.log(datos);
}

function dibujarPokemon(datosPokemon){
    let rutaImagen=datosPokemon.sprites.other.home.front_default;
    let rutaNombre=datosPokemon.name;
    let rutaTipo=datosPokemon.types[0].type.name;
    let pokemon=`<div>Nombre: ${rutaNombre}</div><img src="${rutaImagen}" />
    <div>Tipo: ${rutaTipo}</div>`;
    contenedor.innerHTML=pokemon;
}

consultarPokemon();
