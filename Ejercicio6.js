function print() {
    var numero = parseInt(prompt("Introducí un número entero"));
    console.log(verificarParImpar(numero));
}


function verificarParImpar(numero) {
    if (numero % 2 === 0) {
        return "El número " + numero + " es par";
    } else {
        return "El número " + numero + " es impar";
    }
}
