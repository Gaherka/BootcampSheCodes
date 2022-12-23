/** 
 * Crear una clase Operaciones, dicha clase va contener los siguientes métodos:
    • Crear un método que reciba un array como parámetro, e imprimir todos los valores del array ingresados por el usuario.
    • Crear un método que reciba un array y obtener la media, valor máximo y mínimo del array ingresado e imprimirlos.
*/

class Operaciones{
    suma
    media
    i = 0
    datos = []
    numero = []

    mostrarDatos(nombre,edad,cargo,salario) {
        this.datos.push(nombre,edad,cargo,salario)
        return "El nombre del usuario es: " + nombre + "\nLa edad es: " + edad + "\nEl cargo es: " + cargo +
        "\nEl salarios es: " + salario;
    }

    calcularDatos(v1,v2,v3,v4,v5) {
        this.numeros.push(v1,v2,v3,v4,v5)

        for(this.i = 0; this.i < this.numeros.length(); this.i++) {
            this.suma += this.numeros[this.i]
        }

        return this.media = this.suma / this.numeros.length()
    }
}

let operar = new Operaciones();
console.log(operar.mostrarDatos("Daniela",20,"Web Designer"));
console.log(operar.calcularDatos(2,5,15,20,8));