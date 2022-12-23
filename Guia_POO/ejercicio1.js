/**
 * Crear una clase Cabecera Pagina, que contenga 3 métodos, 
 * el primer método que obtenga el título, color y fuente de la página, 
 * el segundo método que indique como desea que aparezca el título si centrado, derecha o izquierda y 
 * el tercer método que imprima todas las propiedades.
 */

class CabeceraPagina {
    //definamos propiedades
    titulo
    color
    fuente
    posicion

    //definir metodos
    obtenerFuente(titulo, color, fuente) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
    }

    posicionFuente(posicion) {
        this.posicion = posicion;
    }

    informacion() {
        return "La cabecera de la pagina tendra:\n" +
        "Titulo: " + this.titulo + "\nColor de fuente: " + this.color +
        "\nTipo de Fuente: " + this.fuente + "\nUbicacion del titulo: " + this.posicion;
    }
}

//Instanciando la clase
let encabezado = new CabeceraPagina();
encabezado.obtenerFuente("Programación Orientada a Objetos","azul","Arial Black");
encabezado.posicionFuente("Centrado");
console.log(encabezado.informacion());

let encabezado2 = new CabeceraPagina();
encabezado2.obtenerFuente("Prototype en JavaScript","rojo","Calibri");
encabezado2.posicionFuente("Izquierda");
console.log(encabezado2.informacion());
