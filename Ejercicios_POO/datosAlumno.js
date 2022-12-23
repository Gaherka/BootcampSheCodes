/** 
 * Ejercicio n°3:
Cree una clase llamada Estudiante, en ella debe asignar desde su constructor los datos 
personales del alumno. Crear un método (fuction) en esta clase para ingresar 5 materias que cursa el 
estudiante y otro método para toda la información (datos personales y materias). Usar una 
clase separada donde debe instanciar y mostrar los datos (Objetivo: dominar clases e instanciar 
objetos).
 */

class Estudiante {

    Asignaturas = []
    constructor (nombre, apellido, edad, grado) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.grado = grado
    }

    ingresaMaterias(materia) {
        this.Asignaturas.push(materia)
    }

    infoEstudiante() {
        return "Nombre Completo: " + this.nombre + this.apellido + " edad " + this.edad + " edad: " + this.edad + 
        " grado " + this.grado + " Lista de Materias: " + this.Asignaturas
    }
}

let estudiante = new Estudiante("Karla", "Hernandez", 25, "noveno")
estudiante.ingresaMaterias("Programacion", "Historia", "Quimica", "Filosofia", "Expresion Oral")
console.log(estudiante.infoEstudiante());