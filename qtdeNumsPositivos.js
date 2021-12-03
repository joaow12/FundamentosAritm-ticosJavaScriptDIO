valoresLista = Array(6);

valoresLista[0] = gets();
valoresLista[1] = gets();
valoresLista[2] = gets();
valoresLista[3] = gets();
valoresLista[4] = gets();
valoresLista[5] = gets();

positivo = valoresLista.filter(value => value > 0);

console.log(positivo.length + " valores positivos");