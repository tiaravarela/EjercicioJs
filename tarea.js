var valores = [true, 5, false, "hola", "adios", 2];


function mayorTexto() {
    let mayor = valores[3].length > valores[4].length ? valores[3] : valores[4];
    console.log("El mayor es '" + mayor + "'");
}


function booleanos() {
    let mayor = valores[0].length > valores[2].length ? valores[0] : valores[2];
    console.log("El mayor es: " + mayor);
}


function resultadoOperaciones() {
    let primerValor = valores[1];
    let segundoValor = valores[5];


    let resultadoSuma = primerValor + segundoValor;
    let resultadoResta = primerValor - segundoValor;
    let resultadoMultiplicacion = primerValor * segundoValor;
    let resultadoDivision = primerValor / segundoValor;
    let resultadoPorcentaje = primerValor % segundoValor;


    console.log(primerValor + " + " + segundoValor + " = " + resultadoSuma);
    console.log(primerValor + " - " + segundoValor + " = " + resultadoResta);
    console.log(primerValor + " x " + segundoValor + " = " + resultadoMultiplicacion);
    console.log(primerValor + " : " + segundoValor + " = " + resultadoDivision);
    console.log(primerValor + " % " + segundoValor + " = " + resultadoPorcentaje);
}

