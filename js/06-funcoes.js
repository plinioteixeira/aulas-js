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


   //versão 1:             //parâmetros/argumentos
/* function soma( valor1, valor2 ){
    let total = valor1 + valor2;
    return total;
} */

// versão 2: sintaxe ARROW FUNTCION (SETA/FLECHA)
const soma = (valor1, valor2) => {
    let total = valor1 + valor2;
    return total;
};

// Arrow functcion com retorno IMPLÍCITO
const soma1 = (valor1, valor2) => valor1 + valor2;

console.log( soma1(10, 5) );
// console.log (total); //erro, pois é variável local

let resultado = soma(100, 50)
console.log(resultado);

if(resultado < 1000){
    console.log("Abaixo da meta");
}

linha();

/* function dobra(numero){
    let resultado = numero * 2;
    return resultado;
}
 */

/* function dobra(numero){
    return numero * 2
} */


//VERSÃO 2: arrow function
/* const dobra = (numero) => {
    let resultado = numero * 2;
    return resultado
};
 */

/* const dobra = (numero) => {
    return numero * 2
}
 */

// retorno IMPLÍCITO (remove {} e o return)
// obs.: como só temos um parâmetro (numero), pode tirar os ()
const dobra = numero => numero * 2;




console.log( dobra (10) );
console.log( dobra (150) );


let nota1 = 8.5;
let nota2 = 7.4;

const calculaMedia = (n1, n2) => (n1 + n2) / 2;

console.log( calculaMedia(nota1, nota2) );

//obs.: se não tem parâmetros, também precisa usar ()
const linha2 = () => console.log("******");