function Pokemon(nombre, color, poderDeAtaque){
	this.nombre = nombre;
	this.color = color;

	this.nivelDeAmistad = 0;

	this.vida = 100;
	this.poderDeAtaque = poderDeAtaque;

	this.mostrarPokemon = function(){
		return("Hola, soy: " + this.nombre + " y soy de color: " + this.color);
	}

	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad = this.nivelDeAmistad + valor;
		return("El nivel de amistad de " + this.nombre + " es: " + this.nivelDeAmistad);
	}

	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderDeAtaque;
		return("Este pokémon perdió: " + pokemon.vida + " de vida");
	}

}

function combatir(){
	var dato = document.getElementById("cajita");
	var pokemon1 = document.getElementById("pokemon1").value;
	var pokemon2 = document.getElementById("pokemon2").value;
	var valorAtak = prompt("Ingres un valor de ataque");
	var atak1 = new Pokemon(pokemon1, "color", valorAtak);
	var atak2 = new Pokemon(pokemon2, "otro color", 5);

	atak1.atacar(atak2);
	dato.innerHTML = atak1.nombre + " atacó a " + atak2.nombre + " y " + atak2.nombre + " tiene: " + atak2.vida + " puntos de vida";
}
