/**
 * Herencia: Podemos reutilizar codigo de otras clases heredadas
 */

class Personas {
    nombre
    apellido
    direccion

    constructor(nombre, apellido, direccion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
    }

    imprimirDatos() {
        return "Informacion Personal: " + "\nNombre Completo: " + this.nombre + "" + this.apellido +
                "\nDireccion: " + this.direccion;
    }
}

class Estudiante extends Persona {
    materia
    grado

    constructor(nombre, apellido, direccion, materia, grado) {
        //Llamando al constructor padre (clase Personas)
        super(nombre, apellido, direccion);
        this.materia = materia;
        this.grado = grado;
    }

    imprimirEstudiante() {
        return "Informacion Estudiantil\n" + "Materia: " + this.materia + "\nGrado: " + this.grado;
    }
}

let estudiante1 = new Estudiante("Karina", "Sanchez", "San Miguel", "programacion", "Cuarto año de la U");
console.log(estudiante1.imprimirDatos());
console.log(estudiante1.imprimirEstudiante());
