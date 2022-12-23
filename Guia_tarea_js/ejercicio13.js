/** 
 * Ejercicio 13:
a) Crear programa donde se introduce una temperatura en Celsius sale el resultado en Fahrenheit.
b) Añade una función que recibe como parámetro Fahrenheit y que saca per pantalla las siguientes
frases:
1) Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
2) Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
3) Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
4) Si no está entre ningún caso anterior la frase “Temperatura desconocida”
c) Añadir función que recibe ºF introducida por el usuario i sale por pantalla los ºC correspondientes.

 */

function EntraData() {
    let txt = document.getElementById("tempEntrada");
    let temp = parseInt(txt.value);
    return temp;
    }

    function EscriuData(nomZona, text) {
    document.getElementById(nomZona).innerHTML = text;
    }

    //De Celcius a Fahrenheit
    function toFahrenheit() {
    let temp = EntraData();
    temp = ((1.8) * temp + 32);
    EscriuData('Zona1', temp + " ºF"); // Mensaje con el resultado
    FraseRelativa(temp);
    }

    //De Fahrenheit a Celcius
    function toCelsius() {
    let temp = EntraData();
    let temp2 = ((temp - 32) / 1.8);
    EscriuData('Zona1', temp2 + " ºC"); // Mensaje con el resultado
    FraseRelativa(temp);
    }

    function FraseRelativa(temperatura) {
    let cadena="-";
    if ((temperatura >= 14) && (temperatura < 32)) cadena ="Temperatura baja";
    if ((temperatura >= 32) && (temperatura < 68)) cadena ="Temperatura adecuada";
    if ((temperatura >= 68) && (temperatura <= 96)) cadena ="Temperatura alta";
    if (cadena=="-") cadena = "Temperatura desconocida";
    EscriuData('Zona2', cadena);
    }