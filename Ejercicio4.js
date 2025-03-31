function print() {
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];


    var numeroDNI = parseInt(prompt("Introducí tu número de DNI (sin la letra)"));
    var letraDNI = prompt("Introducí la letra de tu DNI").toUpperCase();


    if (numeroDNI < 0 || numeroDNI > 99999999) {
        console.log("El número ingresado no es válido");
    } else {
        let resto = numeroDNI % 23;
        let letra = letras[resto];


        if (letraDNI !== letra) {
            console.log("La letra que has ingresado no es correcta");
        } else {
            console.log("El número y la letra del DNI son correctos");
        }
    }
}

