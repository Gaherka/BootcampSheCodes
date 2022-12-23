/**
 * Crear una función Persona, que contenga como propiedades como nombre, apellido, dirección, dui, un método para imprimir la información personal.
Crear una función Empleado, que herede de la función Persona las propiedades, método y crear un método extra que contenga el sueldo y la dirección donde trabaja el empleado.
 */

function Persona(nombre,apellido,direccion,DUI) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = direccion;
    this.DUI = DUI;

    this.infoPersonal = function() {
        return "Nombre Completo: " + this.nombre + " " + this.apellido + "\nDireccion: " + this.direccion +
        "\nDUI: " + this.DUI
    }
}

let persona = new Persona("Karla","Hernandez","San Salvador","02379384758");
console.log(persona.infoPersonal());