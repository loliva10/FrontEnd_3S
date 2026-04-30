const hobbies = [
    "Correr",
    "Nadar",
    "Jogar Bola",
    "Viajar",
    "Lutar",
    "Conversar",
    "Ler Livro",
    "Academia",
    "Jogar Video Game",
    "Dormir",
    "Jogar FutVolei"
];

// Utilizado para literar arrays e retornar um novo array, compondo um novo resultado para cada indíce do array antigo, veja:
const novosHobbies = hobbies.map((hob) => {
    return `<p>${hob}</p>`;
});
console.log(novosHobbies);