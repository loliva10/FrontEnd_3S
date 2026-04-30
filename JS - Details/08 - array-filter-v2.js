const estoque = [
    {
        descricao: "Camisa Polo",
        cor: "Preta",
        preco: 129.99,
        perfil: "M",
        quantidade: 10,
        promocao : true
    },
    {
        descricao: "Camisa Polo",
        cor: "Branca",
        preco: 99.90,
        perfil: "M",
        quantidade: 116,
        promocao: false
    },
    {
        descricao: "Camisa Polo",
        cor: "Azul",
        preco: 89.90,
        perfil: "F",
        quantidade: 8,
        promocao: true
    },
    {
        descricao: "Camisa Polo",
        cor: "Marrom",
        preco: 199.90,
        perfil: "F",
        quantidade: 79,
        promocao: false
    }
];

// Retornar todas as camisetas do perfil feminino: "F"
// const feminino = estoque.filter((camiseta) => {
//     return camiseta.perfil == "F";
// });
//console.log(feminino);

// Retornar as camisetas em promoção junto com a quantidade das que estão em promoção
let qtdPromocao = 0;
const produtosPromocao = estoque.filter((p) => {
    if (p.promocao == true) {
        qtdPromocao += p.quantidade;
    }
    return p.promocao == true;
});
console.log(`Quantidade de produtos em promoção: ${qtdPromocao}`);

console.log(produtosPromocao);