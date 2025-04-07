var frecuencias = new Array(13).fill(0);


function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1;
}


function print() {
    console.log("Lanzamientos:");
    for (let i = 0; i < 5; i++) {
        let dado1 = lanzarDado();
        let dado2 = lanzarDado();
        console.log(`Lanzamiento ${i + 1}: Dado 1 = ${dado1}, Dado 2 = ${dado2}, Suma = ${dado1 + dado2}`);
    }


    for (let i = 0; i < 36000; i++) {
        let dado1 = lanzarDado();
        let dado2 = lanzarDado();
        let suma = dado1 + dado2;
        frecuencias[suma]++;
    }


    console.log("\nFrecuencia de cada suma (36,000 lanzamientos):");
    for (let i = 2; i <= 12; i++) {
        console.log(`Suma ${i}: ${frecuencias[i]} veces (${((frecuencias[i] / 36000) * 100).toFixed(2)}%)`);
    }
}
