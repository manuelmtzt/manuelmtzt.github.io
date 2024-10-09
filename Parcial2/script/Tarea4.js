
    async function consultarPokemon(id) {
        
        const api = `https://pokeapi.co/api/v2/pokemon/${id}/`;
        let consulta = await fetch(api);
        let datos = await consulta.json();
        return datos;

    }
    
    async function cargarPokemones() {

        for (let i = 1; i <= 151; i++) {
            let datosPokemon = await consultarPokemon(i);
            imprimirPokemon(datosPokemon, i);
        }

    }
    
    function imprimirPokemon(datosPokemon, i) {
        const contenedor = document.getElementById(`contenedor${i}`);
        
        let rutaImagen=datosPokemon.sprites.other.home.front_default;
        let rutaNombre=datosPokemon.name;
        let rutaTipo=datosPokemon.types[0].type.name;

        switch (rutaTipo) {
            case 'fire':
                contenedor.style.backgroundColor = 'rgba(255, 99, 71, 0.5)'; 
                break;
            case 'water':
                contenedor.style.backgroundColor = 'rgba(135, 206, 250, 0.5)'; 
                break;
            case 'grass':
                contenedor.style.backgroundColor = 'rgba(144, 238, 144, 0.5)'; 
                break;
            case 'electric':
                contenedor.style.backgroundColor = 'rgba(255, 255, 0, 0.5)'; 
                break;
            case 'psychic':
                contenedor.style.backgroundColor = 'rgba(255, 182, 193, 0.5)'; 
                break;
            case 'ice':
                contenedor.style.backgroundColor = 'rgba(173, 216, 230, 0.5)'; 
                break;
            case 'bug':
                contenedor.style.backgroundColor = 'rgba(199, 233, 81, 0.5)'; 
                break;
            case 'normal':
                contenedor.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'; 
                break;
            case 'poison':
                contenedor.style.backgroundColor = 'rgba(128, 0, 128, 0.5)'; 
                break;
            case 'ground':
                contenedor.style.backgroundColor = 'rgba(222, 184, 135, 0.5)';
                break;
            case 'fairy':
                contenedor.style.backgroundColor = 'rgba(255, 192, 203, 0.5)'; 
                break;
            case 'fighting':
                contenedor.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
                break;
            case 'rock':
                contenedor.style.backgroundColor = 'rgba(139, 137, 137, 0.5)'; 
                break;
            case 'ghost':
                contenedor.style.backgroundColor = 'rgba(128, 0, 128, 0.5)';
                break;
            case 'dragon':
                contenedor.style.backgroundColor = 'rgba(0, 0, 255, 0.5)';
                break;
            case 'steel':
                contenedor.style.backgroundColor = 'rgba(192, 192, 192, 0.5)';
                break;
            case 'dark':
                contenedor.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
                break;
        }
        
        let impresion = `<div>Nombre: ${rutaNombre}</div>
                        <img src="${rutaImagen}"/>
                        <div>Tipo: ${rutaTipo}</div>`;
                        
        contenedor.innerHTML = impresion; 
    }
    

    cargarPokemones();

