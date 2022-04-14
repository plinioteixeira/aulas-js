/* ALT SHIFT A
        comentários de multiplas linhas */

        // CTRL ;   comentário de linha única 

        // Comando de saída de dados

        /* Sempre que trabalhar com textos devemos colocá-lo entre aspas SIMPLES ''  DUPLAS ""  ou crase `` */
        console.log('Olá JavaScript!');

        /* Variáveis e Constantes
        Espaços identificados na memória para armazenar dados temporariamente */

        // Variável: Valor pode mudar
        // obs: antigamente, era usado "var"
        let ano = 2022;

        // Constante: Valor imutável (não muda)
        // const aluno = "Plinio"
        const aluno = prompt()
        
        console.log(ano);
        console.log(aluno);

        console.log(ano, aluno);

        /* Operações matemáticas
        + (adição)
        - (subtração)
        / (divisão)
        * (multiplicação) */
        let preco = 1500
        let desconto = 250
        let precoFinal = preco * desconto;

        console.log(preco, desconto, precoFinal)

        let produto = "TV led"
        /* A TV led custava 1500 reais. */

        // 1ª forma (tradicional)
        console.log("A "+produto+" custava "+preco+" reais.")

        // 2ª forma (moderna)  `` template/scrim
        console.log(`A ${produto} custava ${preco} reais. `)