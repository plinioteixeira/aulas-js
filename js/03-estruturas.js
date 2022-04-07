/* Estruturas de dados no JavaScript

ARRAY (VETOR)
lista de dados indexados*/

let alunos = ["Tiago", "João", "Maríllia", "Vagner"]

// acessando o aluno armazenado no índice 1
console.log(alunos[1]) // João
console.log(alunos[3]) //Vagner

// de forma abaixo, conseguimos ver os índices (números)
console.log(alunos)

/* Exercício Array:
1) crie um array contendo os seguintes dados de uma pessoa:

-nome e sobrenome
-Idade
-cidade
-Estado*/

let dados = ["Anderson Ribeiro", 31, "São Paulo", "SP"]



/*2) mostre uma frase no console conforme o exemplo abaixo:
fulano da silva é da cidade de São Paulo e tem 20 anos*/

console.log(`${dados[0]} é da cidade de ${dados[2]} e tem ${dados[1]} anos`)

console.log('---------------------------------------------------------------------')

/* OBJETO
Lista de dados não-indexados */

let filme = {
    // propriedade: valor
    titulo: "Homem Aranha",
    ano: 2021,
    genero: "ação/Ficção",
    elenco: "Tom Holland",
    classificacao: 16
};

console.log(filme.titulo)
console.log(filme.genero)
console.log(filme.ano)
console.log(filme.elenco)
console.log(
    `${filme.titulo} foi lançado no ano de ${filme.ano} interpretado por ${filme.elenco} com classificação indicativa para maiores de +${filme.classificacao}`
)
console.log(`------------------------------------------------------------------------`)

/* Exercício de objeto
1) crie um novo objeto contendo dados (fictícios) de um pedido de uma loja virtual. exemplo
-data do pedido
-produto comprado
-preço do pedido
-prazo de entrega */

let loja = {
    data: "07/04/2022",
    prazo: "14/04.2022",
    preco: 549.99,
    produto: "XYZ"
}

/* 2) Mostre uma frase contendo as seguintes informações:
O produto XYZ foi comprado em 07/04/2022 com entrega em 7 dias úteis */
console.log(`O produto ${loja.produto} foi comprado por R$${loja.preco} em ${loja.data} com entrega em até ${loja.prazo} `)