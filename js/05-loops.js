/* Estruturas tradicionais

while         ->  enquanto
do/white      ->  faça/enquanto  
for           ->  para  
*/

// Exemplo loop white (enquanto)
console.log("while");

// Variável de controle do loop
/* obs.: normalmente é chamada de i, j ou k */
let i = 1;

while( i <= 10 ){
    console.log(` valor de contador: ${i}`);
    i++; // incremento
}

console.log("-------------------------------------------------------------");

console.log("do/while");

let j = 1; //variável de controle
do{
    console.log(`J vale ${j}`);
    j++
} while( j <= 5) // ou j < 4

console.log("--------------------------------------------------------");

console.log("FOR");

for( let i = 1; i <= 5; i++){
    console.log(`I vale ${i}`);
}

console.log("--------------------------------------------------------");

console.log("Loop e Estrutura de dados");

let alunos = ["Eduardo", "Vagner", "Thalia", "Claudio", "Jéssiaca"]

for( let i = 0; i < 5; i++ ){
    console.log( alunos[i] );
}

/* sort() -> função para ordenar arrays */
//console.log( alunos.sort());

console.log("---------------------------------------------------------");

console.log("Loops exclusivos do JS");

// for/of: ótimo para arrays
for(let aluno of alunos){
    console.log(aluno);
}

let livro = {
    título: "Senhor dos Anéis",
    ano: 1954,
    volumes: 3,
};

// ofr/in 
for( let dados in livro){
    console.log( livro[dados]);
}