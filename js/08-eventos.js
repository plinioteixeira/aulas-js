/* Exemplo 01 */
const subExemplo01 = document.querySelector("#subtitulo-exemplo01");
const msg = document.querySelector("#mensagem");

// Monitor/Ouvinte de evento
subExemplo01.addEventListener("click", function(){
    msg.textContent = "olááááááááá";
    msg.getElementsByClassName.fontSize = "25px";
    subExemplo01.style.backgroundColor = "yellow";
});

subExemplo01.addEventListener("dblclick", function(){
    msg.textContent = ""
})

/*  Exemplo 02:  */
const botao = document.querySelector("#noturno");
const pagina = document.querySelector("body");

botao.addEventListener("click", function(){
    pagina.classList.toggle("modo-noturno");

    /* se o texto do botão for ativar... */
    if (botao.textContent == `Ativar`) { // um sinal de = é "Atribuição" se for dois == é "comparação"
        // Então mudamos para desativar
        botao.textContent = "Desativar"
    } else {
        // senão, mudamos para ativar
        botao.textContent = "Ativar"
    }
})

/* Exemplo 03: simulação de cadastro*/
const formulario = document.querySelector("form");
const campoNome = document.querySelector("#nome");
const campoNota1 = document.querySelector("#nota1");
const campoNota2 = document.querySelector("#nota2");
const divResultados = document.querySelector("#resultados");

// Detectar o acionamento do formulário 
// obs: a função dentro do listener, é chamado de Callback
formulario.addEventListener("submit", function(event) {
    /* Anulando o comportamento padrão do navegador (redirecionar o formulário) */
    event.preventDefault()

    // 1) Capturar os dados digitados nis campos
    let nome = campoNome.value;
    let nota1 = parseFloat(campoNota1.value);
    let nota2 = parseFloat(campoNota2.value);

    // 2) calcular a média das notas 
    let media = (nota1 + nota2) / 2 
    let situacao
    if (media >= 7) {
        situacao = "Aprovado"
    } else {
        situacao = "Reprovado"
    };

    // 3) criando elemento dinamicamente via JS

    // 3.1) criar o elemento/tag
    let paragrafo = document.createElement("p");

    // 3.2) montar o conteúdo da tag
    paragrafo.innerHTML = `<b>${nome}</b> - <i>${media}</i> - ${situacao}`;

    // 3.3) adicionar tag/conteúdo à div de resultados
    divResultados.appendChild(paragrafo)

    /* Exercício
    1) programe o necessário para determinar se o aluno está aprovado, caso contrário reprovado. Critérios: média maior/igual a 7 aprovado, caso contrário reprovado
    
    2) mostre a situação do aluno junto com o nome e a média
    
    3) desafio: faça com que os campos do formulário sejam resetados ao enviar */

    formulario.reset(); // ou this.reset()

    // Devolvendo o foco (cursor) para o campo nome
    campoNome.focus();
});