/** 
 * Crear una función constructora Profesor, que contenga como propiedades nombre, apellido, dirección, materia y 2 métodos, un método para imprimir los datos personales 
 * y otro método que imprima la materia que imparte el profesor.  
 */

class Profesor{
    constructor(nombre,apellido,direccion,materia) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.materia = materia;
    }

    imprimirDatos(){
        return "Nombre Completo: " + this.nombre + " " + this.apellido + "\nDireccion: " + this.direccion;
    }

    imprimirMateria(){
        return "El profesor imparte la materia de: " + this.materia;
    }
}

let profesor = new Profesor("Oscar","Lemus","San Salvador","Programacion");
console.log(profesor.imprimirDatos());
console.log(profesor.imprimirMateria());