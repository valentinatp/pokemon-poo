function Pokemon(nombre, color){
	this.nombre = nombre;
	this.color = color;

	this.nivelDeAmistad = 0;

	this.mostrarPokemon = function(){
		return("Hola, soy: " + this.nombre + " y soy de color: " + this.color);
	}

}

var Pikachu = new Pokemon("Pikachu", "Amarillo");