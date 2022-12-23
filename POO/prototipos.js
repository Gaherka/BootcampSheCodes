/** 
 * Prototipo: Toma en cuenta un objeto y devuelve sus caracteristicas
*/

function Libro_prototipo(titulo, categoria, descripcion, anio) {
    this.titulo = titulo;
    this.categoria = categoria;
    this.descripcion = descripcion;
    this.anio_publicacion = anio;

    this.capturarInformacion = function() {
        return "Informacion del libro: \n" + "Titulo: " + this.titulo + "\nCategoria: " + this.categoria +
        "\nDescripcion: " + this.descripcion + "\nAño de publicacion: " + this.anio_publicacion;
    }
}

/** Instanciando el prototipo de Libro */
let libro_pro = new Libro_prototipo("Clean Code", "Informatica", "Se trata de buenas practicas", 1980);
console.log(libro_pro.capturarInformacion());