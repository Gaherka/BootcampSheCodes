/**
 * Programacion Orientada a Objetos:
 * Es un estilo o paradigma que esta orientado a clases y asi podemos crear objetos
 * 
 * Clase: Es una plantilla, donde tenemos atributos y metodos
 */

class Libros {
    titulo
    categoria
    descripcion
    anio_publicacion

    /** Metodo que inicializa las variables o las propiedades */

    constructor (titulo, categoria, descripcion, anio) {
        this.titulo = titulo;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.anio_publicacion = anio;
    }

    capturarInformacion() {
        return "Informacion del libro: \n" + "Titulo: " + this.titulo + "\nCategoria: " + this.categoria +
        "\nDescripcion: " + this.descripcion + "\nAño de publicacion: " + this.anio_publicacion;
    }
}

/** Instanciando la clase Libro */

let libro1 = new Libro("Harry Potter","Fantasia","Se trata de un chico qe tiene magia", 1999);
console.log(libro1.capturarInformacion());
console.log("/***********************/");
let libro2 = new Libro("El señor de los anillos","Fantasia","Se trata de guerra y poder",1980);
console.log(libro2.capturarInformacion());
