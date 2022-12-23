/**
 * Encapsulamiento: Es la capacidad donde yo asigno la forma como se va a acceder a la informacion de la Clase
 * forma de acceso: publico, protegido, privado
 * 
 * en JS estan public, private
 */

class Persona {
    nombre
    apellido
    edad
    direccion
    #DUI // # = Declaracion atributo privado

    constructor (nombre, apellido, edad, direccion, dui) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.direccion = direccion;
        this.#DUI = dui;
    }

    //Accediendo al atributo privado mediante get y set
    
    set capturarDui(dui) {
        this.#DUI = dui;
    }

    get retornarDui() {
        return "Su numero de Dui es: " + this.#DUI
    }

    imprimirDui() {
        return "Su numero de DUI es: " + this.#DUI;
    }

    //metodo privado

    #saludo(){
        return "Buenas noches " + this.nombre;
    }

    verificarSaludo(){
        return this.#saludo();
    }

}

let persona1 = new Persona("Karla", "Hernández", 25, "San Salvador", "28194505-5");
console.log(persona1.imprimirDui());

//let apellido = persona1.apellido = "Chacon";
//console.log(apellido);

let persona2 = new Persona("Juan", "Landaverde", 30, "Santa Tecla");
persona2.capturarDui = "1908457-8";
console.log(persona2.retornarDui);