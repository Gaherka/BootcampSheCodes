/**
 * 
 */

class Cancion {
    titulo
    genero
    #autor //atributo privado

    //Inicializando valores por el constructor
    constructor(titulo, genero) {
        this.titulo = titulo;
        this.genero = genero;
    }

    //set y get

    /**
     * set => recibe, captura el valor de la propiedad privada
     */
    set capturarAutor(autor) {
        this.#autor = autor;
    }

    /**
     * get => retorna, imprime, devuelve el valor de la propiedad privada
     */
    get imprimirAutor() {
        return "El autor de la cancion es: " + this.#autor;
    }

    imprimirCancion() {
        return "El nombre de la cancion es: " + this.titulo + " y su genero es: " + this.genero;
    }
}

/** Instanciando la clase */
let cancion = new Cancion("New Rules","pop",);
cancion.capturarAutor = "Dua Lipa";
console.log(cancion.imprimirAutor());
console.log(cancion.imprimirCancion());