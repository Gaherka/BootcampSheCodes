/** 
 * Ejercicio n°2:
Al ingresar la nota de un alumno, se desea saber si este aprobó o no una materia en el colegio. 
Para aprobar se necesita una nota mayor o igual a 7.0. Diseñe una aplicación en Java que al 
ingresar la nota muestre con un mensaje en el cual indique si el alumno aprobó o no. Además, si 
la nota está entre 6.50 y 6.99, tiene la posibilidad de realizar un examen de suficiencia para 
aprobar.
 */

class notaAlumno {
    constructor(alumno, nota) {
        this.nota = nota
        this.alumno = alumno
    }

    calcularNota() {
        if(this.nota >= 7) {
            return "Aprobo 🥳"
        } else if (this.nota >= 6.50 && this.nota <= 6.99) {
            return "Examen diferido 🤞"
        } else {
            return "Reprobo 😢"
        }
    }

    imprimirBoleta() {
        return "Nombre del Alumno: " + this.alumno + " su nota es: " + this.nota + " Status: " + this.calcularNota()
    }
}

let estudiante = new notaAlumno("Karla", 9)
estudiante.calcularNota()
console.log(estudiante.imprimirBoleta());