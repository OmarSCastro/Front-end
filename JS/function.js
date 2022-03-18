const fetchPokemon = () =>{
    const nombre_pokemon = document.getElementById("nombre");
    let pokemon_input = nombre_pokemon.value.toLowerCase();
    console.log("Seleccionaste: "+ pokemon_input);
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon_input}`;
    fetch(url).then((res) =>{
        console.log(res);
        if (res.status != 200){
            pokeImage ('./img/cual.jpg');
        }
        else{
            return res.json();
        }
    }).then((data) =>{
        console.log(data);
        let  pokemon_imagen = data.sprites.front_default;
        let pokemon_tipo = data.types[0].type.name;
        let pokemon_movimiento  = data.moves[0].move.name;
        let pokemon_estadistica = data.stats[0].stat.name;
        estadisticasPokemon(pokemon_estadistica);
        pokeMovimientos(pokemon_movimiento );
        pokeImage(pokemon_imagen);
        nombrePokemon(pokemon_input);
        tipoPokemon(pokemon_tipo);
    })
}


const estadisticasPokemon = (estadistica_pokemon) => {
    const pokeEstadistica = document.getElementById("estadistica");
    pokeEstadistica.textContent=estadistica_pokemon;
}

const nombrePokemon = (nombre_panel) => {
    const pokeNombre = document.getElementById("nombre_pokemon");
    pokeNombre.textContent=nombre_panel;
}

const tipoPokemon = (tipo_panel) => {
    const pokeTipo = document.getElementById("tipo");
    pokeTipo.textContent=tipo_panel;
}

const pokeImage = (url) =>{
    const pokeImg = document.getElementById("pokemon")
    pokeImg.src = url;
}

const pokeMovimientos = (movimiento) => {
    const pokeMoves = document.getElementById("movimiento")
    pokeMoves.textContent = movimiento;
}


