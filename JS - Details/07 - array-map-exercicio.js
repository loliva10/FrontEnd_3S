const numeros = [
    50,
    200,
    250,
    800,
    992.87,
    800,
    500,
    9876,
    99,
    134
];

// Rodar o map gerando um novo array com o dobro dos números original 
// Após, exiba os valores doa array dobro no console utilizando o foreach
const novosNumeros = numeros.map((num) => {
    return num * 2;
});

console.log(`Array Modificado:`);
console.log(); // Pula uma linha 

let textoResultado = "";
novosNumeros.forEach((num) => {
    textoResultado += `${num} | `; // Acumula texto em uma string(sem pular linha)
});

// Remover o último pipe 
// str.substring(0, str.length - 1);
textoResultado = textoResultado.substring(0, textoResultado.length -3);
console.log(textoResultado); // Mostra o texto completo
