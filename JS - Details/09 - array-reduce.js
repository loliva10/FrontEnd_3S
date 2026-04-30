const estoque = [
    {
        descricao: "Camisa Polo",
        cor: "Preta",
        preco: 16.90,
        perfil: "M",
        quantidade: 10,
        promocao : true
    },
    {
        descricao: "Camisa Polo",
        cor: "Branca",
        preco: 49.90,
        perfil: "M",
        quantidade: 116,
        promocao: false
    },
    {
        descricao: "Camisa Polo",
        cor: "Azul",
        preco: 19.90,
        perfil: "F",
        quantidade: 8,
        promocao: true
    },
    {
        descricao: "Camisa Polo",
        cor: "Marrom",
        preco: 45.90,
        perfil: "F",
        quantidade: 79,
        promocao: false
    }
];

// Reduz o array a um único elemento. No caso um somatório, por exemplo:
//totalEstoque = estoque.reduce("callbackFn", "ValorCorrente/Inicial");
let totalPreco = 0;
totalEstoque = estoque.reduce((total, produto) => {
    totalPreco += produto.preco * produto.quantidade;
    return total + produto.quantidade;
}, 0);

console.clear();
console.log(`Você tem um total de ${totalEstoque} produtos no estoque`);
console.log(`O valor total do seu estoque é R$${totalPreco.toFixed(2)}`);


console.clear();
let nome = "Luis";
let sobrenome = "Oliva";
let idadeDele = 18;

let lf = {
    nome,
    sobrenome,
    idade : idadeDele
};