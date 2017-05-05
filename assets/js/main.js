function Pokemon(nombre, color, poderDeAtaque){
	this.nombre = nombre;
	this.color = color;

	this.nivelDeAmistad = 0;

	this.vida = 100;
	this.poderDeAtaque = poderDeAtaque;
}

var Pikachu = new Pokemon("Pikachu", "Amarillo", 100);
var Charmander = new Pokemon("Charmander", "Rojo", 20);

Pikachu.atacar(Charmander);
console.log(Charmander.vida);