`use strict`; // MODO ESCRITO/RESCRITO

/* Funções são blocos de código que podem ser executados e reaproveitados em praticamente qualquer parte da sua aplicação.

Usar funções também é uma forma de separar a lógica e organizar melhor sua programação */


// sintaxe tradicional
function  linha(){
    console.log("-------------------------------------------");
}

`use strict`;

let curso = "Programador Web"
let escola= "Senac"
let ano = 2022

console.log(`Curso: ${curso}`);
linha();
console.log(`Escola: ${escola}`);
linha();
console.log(`Ano: ${ano}`);


                //parâmetros/argumentos
function soma( valor1, valor2 ){
    let total = valor1 + valor2;
    return total;
}

console.log( soma(10, 5) );
// console.log (total); //erro, pois é variável local

let resultado = soma(100, 50)
console.log(resultado);

if(resultado < 1000){
    console.log("Abaixo da meta");
}