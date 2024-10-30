const rutaImagen='https://image.tmdb.org/t/p/w1280';
const apiConsulta='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=2';
const contenedor= document.getElementById('contenedor');
 
DevolverPeliculas();
 
async function DevolverPeliculas()
{
    let query= await fetch(apiConsulta);
    let data= await query.json();
    console.log(data);
    await MostrarResultados(data.results);
}
 
async function MostrarResultados(peliculas)
{
    for (let i=0; i<peliculas.length;i++)
    {
        let pelicula=peliculas[i];
        let div= document.createElement('div');
        div.innerHTML=`<img src='${rutaImagen +pelicula.poster_path }'/>
        <div>Titulo: ${pelicula.title} ${pelicula.vote_average} Descripcion: ${pelicula.overview} </div>`;
        contenedor.appendChild(div);
    }
}