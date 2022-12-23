/**
 * Confessionar la clase Tabla vista en conceptos anteriores. Plantear una clase Celda que colabore con la clase Tabla.
 * La clase Tabla debe definir una matriz de objetos de la clase Celda. La clase Celda debe definir los atributos: texto, colorFuente y colorFondo
 */

class Celda{
    constructor(texto,colorFuente,colorFondo) {
        this.texto = texto;
        this.colorFuente = colorFuente;
        this.colorFondo = colorFondo;
    }
}

class Tabla extends Celda{
    constructor(texto,colorFuente,colorFondo) {
        super(texto,colorFuente,colorFondo)
    }

    mostrarTabla() {
        console.log(arrTabla = [this.texto,this.colorFuente,this.colorFondo]);
    }
}

let objeto = new Tabla("Miercoles","Azul","Blanco");
objeto.mostrarTabla();