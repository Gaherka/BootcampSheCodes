/** 
 * Crea una clase llamada Persona y va contener lo siguiente:
Atributos: nombre, apellido, dirección, teléfono y edad.
Métodos: 
•	Crea un método que en base a la edad imprima un mensaje si es mayor de edad o no.
•	Crea un método para mostrar todos los datos personales.
•	Crea una clase extra llamada Empleado y va contener un atributo llamado sueldo.
•	En la clase Empleado añade los métodos cargar sueldo e imprimir sueldo.
•	La clase Empleado va heredar de la clase Persona.
•	Define un objeto de la clase Empleado y que se imprima los datos del empleado y su sueldo.
*/

class Persona {
    nombre
    apellido
    direccion
    telefono
    edad

    constructor(nombre, apellido, direccion, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    verificarEdad(edad) {
        this.edad = edad;

        if(this.edad <= 17) {
            return this.nombre + " es menor de edad";
        } else {
            return this.nombre + " es mayor de edad";
        }
    }

    informacionPersonal() {
        return "Nombre Completo: " + this.nombre + " " + this.apellido + "\nDireccion: " + this.direccion +
                "Telefono: " + this.telefono;
    }
}

//Herencia
class Empleado extends Persona {
    sueldo

    //capturando el sueldo que se ingrese por parametro
    cargarSueldo(sueldo) {
        this.sueldo = sueldo;
    }

    imprimirSueldo() {
        return this.nombre + " su sueldo es: " + this.sueldo;
    }
}

//clase padre
let persona = new Persona("Marcos", "Landaverde", "San Salvador", 75826541)
console.log(persona.informacionPersonal());

console.log("*********************************************");
let empleado1 = new Empleado("Juan", "Solis", "San Ignacio", 74128563)
console.log(empleado1.informacionPersonal());
empleado1.cargarSueldo(500);
console.log(empleado1.imprimirSueldo());
console.log(empleado1.verificarEdad(25));