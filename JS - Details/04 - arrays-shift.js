let frutasVermelhas = []
// frutasCitricas[0] = "Morango";
frutasVermelhas.push("Morango");
frutasVermelhas.push("Maça");
frutasVermelhas.push("Framboesa");
frutasVermelhas.push("Tomate");
frutasVermelhas.push("Cereja");

console.log(frutasVermelhas);
let frutaRemovida = frutasVermelhas.shift(); // Removo o primeiro item da lista/array
console.log(`${frutaRemovida} foi removida da cesta!`);
console.log(frutasVermelhas);