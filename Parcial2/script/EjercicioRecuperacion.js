const rutaImagen='https://image.tmdb.org/t/p/w1280';
const apiConsulta='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=2'
const contenedor1= document.getElementById('contenedor1');

async function peliculaRandom() {
    let consulta=await fetch (apiConsulta);
    let resultado=await consulta.json();
    let aleatorio=Math.floor(Math.random()*20)+1;
    let pelicula = resultado.results[aleatorio];
    let div=document.createElement('div')
    div.innerHTML=`<img src='${rutaImagen +pelicula.poster_path }'/>`
    contenedor1.appendChild(div);
}


peliculaRandom();