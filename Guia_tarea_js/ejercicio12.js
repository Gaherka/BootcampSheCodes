/**
 * Crear un programa “Calculadora”, con las 4 operaciones básicas, sumar restar, multiplicar y dividir.
 */

function algoritmo() {
    let operacion;
    let a, b, resultado;
    a = parseFloat (document.formulario1.a.value);
    b = parseFloat (document.formulario1.b.value);
    operacion = parseInt (document.formulario1.operacion.value);
    resultado=0;
    if(operacion==1)
        resultado=a+b;
    if(operacion==2)
        resultado=a-b;
    if(operacion==3)
        resultado=a*b;
    if(operacion==4&&b!=0)
        resultado=a/b;
    document.formulario1.resultado.value = resultado;
}