let n = parseInt(gets());
let cedulas = [100,50,20,10,5,2,1];
let notas = [0,0,0,0,0,0,0]

let resto = n;

while (resto >= 1) {
  
  nota = cedulas.findIndex(value => value <= resto);
  notas[nota] = Math.trunc(resto / cedulas[nota]);
  resto = resto % cedulas[nota];

}

console.log(n);
console.log(notas[0] + " nota(s) de R$ 100,00");
console.log(notas[1] + " nota(s) de R$ 50,00");
console.log(notas[2] + " nota(s) de R$ 20,00");
console.log(notas[3] + " nota(s) de R$ 10,00");
console.log(notas[4] + " nota(s) de R$ 5,00");
console.log(notas[5] + " nota(s) de R$ 2,00");
console.log(notas[6] + " nota(s) de R$ 1,00");