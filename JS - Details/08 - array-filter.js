// Utilizando para filtrar um elemento dentro de um array. Retorna apenas o encontrado, veja:
const numeros = [5, 10, 14, 50, 10, 900, 100, 10];

const numeroEncontrado = numeros.filter((n) => {
    return n == 10;
});

const nomes = [
    "Luis",
    "Beatriz",
    "Felix",
    "Amy",
    "Marcos",
    "Eloysa",
    "Eduardo",
    "Pietra",
    "Livia",
    "Paulo",
    "Maria",
    "Nathan",
    "Gabriel"
]

// Nomes com até 3 letrar ou até 6 letras
// pessoasEndividadas = nome.filter((nome) =>{
//     return nome.length <= 6 || nome.length == 6;
// });
// console.log(pessoasEndividadas);

// Nomes com a letra N ou L
pessoasLetraN = nomes.filter((nome) => {
    // Começa no caracter zero e trás somente 1 caracter
    const primeiraLetra = nome.substring(0,1);
    return primeiraLetra == "N" || primeiraLetra == "L";
});
console.log(pessoasLetraN);
