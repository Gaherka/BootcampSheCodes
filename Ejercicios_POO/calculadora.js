/** 
 * Ejercicio n°4:
crear una calculadora con las operaciones aritméticas básicas (Clase: CalculadoraBasica) en la 
cual deben existir métodos que acepten 2 operandos para suma, resta, división y multiplicación. 
Ejemplo: cbasica.suma(numero1,numero2). A la vez le solicitan crear otra calculadora que 
contendrá otras operaciones avanzadas (Clase: CalculadoraAvanzada) en esta debe hacer 
operaciones de potencia, opuesto y factorial. Ejemplo: cavanzada.potencia(numero1,numero2), 
cavanzada.factorial(numero);
Tome en cuenta que el opuesto de un número: opuesto de 1 es -1, opuesto de -2 es 2.
Tome en cuenta Factorial de un número: ¡n! = 1*2*3*…*(n-1) *n. Ejemplo:
3! = 1*2*3 = 6
4! =1*2*3*4=24
 */

class calculadoraBasica {
    constructor(numero1, numero2) {
        this.numero1 = numero1
        this.numero2 = numero2
    }
    
    suma() {
        let suma = this.numero1 + this.numero2
        console.log(sumar);
    }

    resta() {
        let restar = this.numero1 + this.numero2
        console.log(restar);
    }

    multiplicacion() {
        let multiplicar = this.numero1 + this.numero2
        console.log(multiplicar);
    }

    division() {
        let dividir = this.numero1 + this.numero2
        console.log(dividir);
    }
}

let calculadoraB = new calculadoraBasica(30,25)
calculadoraB.division()

class CalculadoraAvanzada {
    valor1
    valor2

    potencia(numero1, numero2) {
        this.valor1 = numero1
        this.valor2 = numero2

        //Potencia = Math.pow()
        let potencia = Math.pow(this.valor1, this.valor2)
        console.log("La potencia es: " + potencia);
    }

    calcularFactorial(numero) {
        var factorial = 1
        // factorial !5 = 1 * 2 * 3 * 4 * 5 = 120 
        for(let i = 1; i <=numero; i++) {
            factorial = factorial * i
        }
        console.log("El factorial del numero " + numero + " es igual a " + factorial);
    }

    numeroOpuesto(numero) {
        let opuesto
        console.log("El opuesto del numero " + numero + " es: " + opuesto)
    }
}

let calculadoraA = new CalculadoraAvanzada()
calculadoraA.potencia(12.3)
calculadoraA.calcularFactorial(5)
calculadoraA.numeroOpuesto(300)