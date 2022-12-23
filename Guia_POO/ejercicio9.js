/**
 * Crear una función Heroe, que contenga como propiedad nombre, poder y un método para imprimir los datos.
Crear un método extra para la función Heroe, utilizando la propiedad prototype. 
 */

function Heroe(nombre,poder) {
    this.nombre = nombre;
    this.poder = poder;

    this.mostrarDatos = function() {
        console.log("El nombre del superheroe es: " + this.nombre + " su poder es: " + this.poder);
    }
}

Heroe.prototype.kill = function() {
    console.log("Elastic Girl kill someone");
}

Heroe.prototype.sleep = function() {
    console.log("zzzzzzzzz");
}

let superheroe = new Heroe("Elastic Girl","elasticidad");
superheroe.mostrarDatos();
superheroe.kill();
superheroe.sleep();