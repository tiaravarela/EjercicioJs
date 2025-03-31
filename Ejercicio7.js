function print() {
    let texto = prompt("Introducí un texto");
    analizarCadena(texto);
}


function analizarCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
        console.log("El texto solo tiene mayúsculas");
    } else if (cadena === cadena.toLowerCase()) {
        console.log("El texto solo tiene minúsculas");
    } else {
        console.log("El texto está echo con mayúsculas y minúsculas");
    }
}
