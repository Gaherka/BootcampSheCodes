/** 
 * Ejercicio n°1:
 * Crear la clase llamada “UtilesEscolares”, en este ejemplo se utiliza un Map que es un conjunto
de valores, con el detalle de que cada uno de estos valores tiene un objeto extra asociado. A los
primeros se los llama “claves” o “keys”, ya que son los que permiten acceder a los segundos.*/

class UtilesEscolares {
    utiles = []

    //Agregando elementos al arreglo
    agregarUtiles(utiles) {
        this.utiles.push(utiles)
    }

    /**
     * utiles[
        key : 1
        elemento: lapicero

        key: 2
        elemento: borrador

        key: 3
        elemento: zapatos
        ]
    */

    //Retornando la informacion agregada al arreglo
    listaUtiles() {
        //Por medio de la variable utilesEscolares esta asignando la estructura del MAP y luego retornar los valores
        let utilesEscolares = this.utiles.map(function(elemento, indice) {
            return "Posicion: " + indice + "Producto: " + elemento
        })

        return utilesEscolares
    }
}

//Intancia de la clase utiles escolares para utilizar sis functions
objeto = new UtilesEscolares();
objeto.agregarUtiles("Portaminas");
objeto.agregarUtiles("Estuche de geometria");
objeto.agregarUtiles("Cuadernos");
objeto.agregarUtiles("Calculadora");
objeto.agregarUtiles("Lapicero");
console.log("-------------------Lista de Utiles Escolares----------------");
console.log(objeto.listaUtiles());
console.log("------------------------------------------------------------");

/** 
 * Tarea:
 * Con regalos navideños
 */