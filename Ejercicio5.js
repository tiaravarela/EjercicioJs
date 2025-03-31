function print() {
    let numero = parseInt(prompt("Introducí un número entero para calcular su factorial"));


    let factorial = 1;


    if (numero >= 0) {
        for (let i = 1; i <= numero; i++) {
            factorial *= i;
        }
        console.log("El factorial de " + numero + " es " + factorial);
    } else {
        console.log("Introducí un número entero positivo válido");
    }


}
