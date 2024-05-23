$(document).ready(function() {
    $.getJSON("js/pokemon_data.json", function(data) {
      data.forEach(entrenadorData => {
        let pokemons = entrenadorData.pokemons.map(pokemonData => new Pokemon(pokemonData.nombre, pokemonData.tipo, pokemonData.foto));
        let entrenador = new Entrenador(entrenadorData.entrenador, pokemons);
  
        // Crear elementos con las clases correspondientes
        let entrenadorDiv = $("<div>").addClass("entrenador");
        entrenadorDiv.append($("<h2>").text(entrenador.nombre));
        let pokemonList = $("<ul>");
  
        entrenador.pokemons.forEach(pokemon => {
          let pokemonItem = $("<li>").addClass("pokemon");
          pokemonItem.append($("<img>").attr("src", pokemon.foto));
          pokemonItem.append($("<div>"));
          pokemonItem.find("div").append($("<h3>").text(pokemon.nombre));
          pokemonItem.find("div").append($("<span>").text(pokemon.tipo).addClass(`pokemon-type ${pokemon.tipo.toLowerCase().replace("/", " ")}`)); // Reemplaza espacios con guiones
          pokemonList.append(pokemonItem);
        });
  
        entrenadorDiv.append(pokemonList);
        $("#entrenadores").append(entrenadorDiv);
      });
    });
  });
  
  class Pokemon {
    constructor(nombre, tipo, foto) {
      this.nombre = nombre;
      this.tipo = tipo;
      this.foto = foto;
    }
  }
  
  class Entrenador {
    constructor(nombre, pokemons) {
      this.nombre = nombre;
      this.pokemons = pokemons;
    }
  }