/**
 * Crea una clase llamada Cuenta y va contener lo siguiente:
Atributos: nombre, cantidad, tipo de cuenta y número de cuenta.
Métodos: 
•	Crear un constructor que reciba como parámetros el nombre, cantidad, tipo de cuenta y número de cuenta.
•	Crea un método llamado depositar y en base a la cantidad ingresada en el constructor haz una condición de que si la cantidad es menor a $5.00 que se imprima un mensaje que el valor a depositar debe ser mayor a $5.00 y sino solo imprima un mensaje de que se ha depositado correctamente y la cantidad depositada.
•	Crea un método llamado retirar, que reciba un parámetro llamado valor y en base a eso tienes que restar la cantidad menos el valor ingresado e imprimir un mensaje de lo que ha retirado y cuanto le queda en su cuenta.
Nota: Para el método retirar debes de validar que lo que se retire sea mayor de $5.00 ya que si no hay efectivo debes de tirar un mensaje que no hay nada en la cuenta.
•	Crea un método para mostrar los datos de su nombre, tipo de cuenta y número de cuenta. 
•	Define un objeto de la clase Cuenta y llama sus métodos.

*/

class Cuenta {
    nombre
    cantidad
    tipo_cuenta
    numero_cuenta

    //constructor => inicializando valores
    constructor(nombre, cantidad, cuenta, numero_cuenta) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.cuenta = cuenta;
        this.numero_cuenta = numero_cuenta;
    }

    depositar() {
        if(this.cantidad <= 5) {
            return "La cantidad a ingresar debe ser mayor o igual a $5 dolares";
        } else {
            return "La cantidad depositada fue: " + this.cantidad
        }
    }

    retirar(valor_retirar) {
        if(this.cantidad >= 5) {
            //proceso de retirar
            if(valor_retirar < this.cantidad){
                let total_cuenta = this.cantidad - valor_retirar;
                return "Retiraste: " + valor_retirar + "\n" + "Lo que quedo en la cuenta es: " + total_cuenta;            
            } else {
            return "Tu cuenta solo tiene $" + this.cantidad;
            }
        } else {
            return "La cuenta no tiene tantos fondos para retirar";
        }
    }

    informacionCuenta() {
        return "Nombre del propietario: " + this.nombre + "\nTipo de cuenta: " + this.tipo_cuenta +
                "\nNumero de cuenta: " + this.numero_cuenta;
    }
}

//Intanciando la clase
let cliente1 = new Cuenta("Sandra Murcia",100,"Cuenta de Ahorro", "250978458")
console.log(cliente1.informacionCuenta());
console.log(cliente1.depositar());
console.log(cliente1.retirar(25));