/** 
 * Crear una clase Persona que tenga como atributos el nombre y la edad. Definir como responsabilidades un método que cargue los datos personales y otro que los imprima.
Plantear una segunda clase Empleado que herede de la clase Persona. Añadir un atributo sueldo y los métodos de cargar el sueldo e imprimir todos los datos del empleado (sobrescribir el método imprimir de la clase Persona).
Definir un objeto de la clase Persona y llamar a sus métodos. También crear un objeto de la clase Empleado y llamar a sus métodos.
*/

class Personas{
    nombre
    edad

    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    imprimirInformacion(){
        return "Nombre: " + this.nombre + "\nEdad: " + this.edad;
    }
}

//Herencia
class Empleados extends Personas{
    sueldo
    
    //capturando el sueldo que se ingrese por parametro
    cargarSueldo(sueldo){
        this.sueldo = sueldo;
    }

    imprimirSueldo(){
        return this.nombre + " su sueldo es " + this.sueldo;
    }

    //sobreescribir el metodo de la clase Padre
    //Polimorfismo
    imprimirInformacion(){
        return "Nombre: " + this.nombre + "\nEdad: " + this.edad + "\nSueldo del empleado: $" + this.sueldo;
    }
}

let persona1 = new Personas("Maria",24);
console.log(persona1.imprimirInformacion());
console.log("/****** segunda instancia *********/");
let empleado1 = new Empleados("Juana",28);
empleado1.cargarSueldo(750);
console.log(empleado1.imprimirInformacion());
Contraer












