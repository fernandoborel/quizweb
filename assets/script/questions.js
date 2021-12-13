let questions = [
    {
        question: 'Defina o que é HTML.',
        options: [
            'grupo de tags que formam um site',
            'é a estilização das tags de um site',
            'Uma linguagem que através de tags apresenta informações como imagens e textos interpretada pelo navegador',
            'Linguagem de programação'
        ],
        answer: 2
    },
    {
        question: 'Qual é a ferramenta responsável pela leitura e transmissão do código HTML para o usuário?',
        options: [
            'Antivirus',
            'bloco de notas',
            'navegador',
            'sistema operacional'
        ],
        answer: 2
    },
    {
        question: 'Para os motores de busca (Google, Yahoo, etc) o que as tags header, footer e nav tem de diferente?',
        options: [
            'o efeito visual no site',
            'cada tag vai especificar o conteúdo de cada parte do site, como: cabeçalho, menu e rodapé',
            'os motores de buscas vão achar seu site caso contenham essas tags',
            'todas as alternativas estão corretas'
        ],
        answer: 1
    },
    {
        question: 'Qual a propriedade usada para setar a duração de uma animação?',
        options: [
            'animation-time',
            'animation-duration',
            'animation-datatime',
            'todas as alternativas estão corretas'
        ],
        answer: 1
    },
    {
        question: 'Para que é usado o item @media no CSS?',
        options: [
            'Para alterar as propriedades dos elementos de acordo com a resolução, na qual, a página está',
            'Tag padrão para alterar imagens no CSS',
            'Usado para programar todo CSS dentro da página HTML',
            'todas as alternativas estão corretas'
        ],
        answer: 0
    },
    {
        question: 'O que o termo HTML significa?',
        options: [
            'Hyper Text Markup Language',
            'Hyperlinks and text markup language',
            'Home tool markup language',
            'todas as alternativas estão corretas'
        ],
        answer: 0
    },
    {
        question: 'Que organização cuida dos padrões web?',
        options: [
            'Mozilla',
            'Google',
            'W3C',
            'Microsoft'
        ],
        answer: 2
    },
    {
        question: 'É considerado um valor aceito na propriedade width e height:',
        options: [
            'div',
            'class',
            'auto',
            'todas as alternativas estão corretas'
        ],
        answer: 2
    },
    {
        question: 'Qual tipo de input é usado para recolher arquivos do usuário?',
        options: [
            'hidden',
            'text',
            'file',
            'todas as alternativas estão corretas'
        ],
        answer: 2
    },
    {
        question: 'Para que serve as tags legend e fieldset?',
        options: [
            'separar e organizar visualmente os inputs de um formulário por blocos',
            'deixar os dados do formulário seguro',
            'colocar legendas nos inputs',
            'todas as alternativas estão corretas'
        ],
        answer: 0
    },
    {
        question: 'Em qual elemento HTML nós colocamos o javascript?',
        options: [
            'tag js',
            'tag script',
            'tag scripting',
            'tag javascript'
        ],
        answer: 1
    },
    {
        question: 'Onde é o local certo de colocar o javascript?',
        options: [
            'Na tag body',
            'Na tag head',
            'Tanto na tag body quanto a head estão corretas'
        ],
        answer: 2
    },
    {
        question: 'Qual a sintaxe correta para adicionar um arquivo javascript externo na tag script?',
        options: [
            'name="xxx.js"',
            'src="xxx.js"',
            'href="xxx.js"'
        ],
        answer: 1
    },
    {
        question: 'Um arquivo javascript externo precisa ter a tag script',
        options: [
            'Verdade',
            'Falso'
        ],
        answer: 1
    },
    {
        question: 'Como escrever um "Olá Mundo" em um alertbox?',
        options: [
            'alertBox("Olá Mundo")',
            'msgBox("Olá Mundo")',
            'msg("Olá Mundo")',
            'alert("Olá Mundo")'
        ],
        answer: 3
    },
    {
        question: 'Como você cria uma função no Javascript?',
        options: [
            'function:minhaFuncao()',
            'function = minhaFuncao()',
            'function minhaFuncao()'
        ],
        answer: 2
    },
    {
        question: 'Como chamar uma função chamada "minhaFuncao"?',
        options: [
            'call minhaFuncao',
            'call function minhaFuncao',
            'minhaFuncao()'
        ],
        answer: 2
    },
    {
        question: 'Como escrever uma condicional IF no Javascript?',
        options: [
            'if i = 5',
            'if i == 5 then',
            'if (i == 5)',
            'if i = 5 then'
        ],
        answer: 2
    },
    {
        question: 'Como fazer um if que executa um código caso "i" for diferente de 5',
        options: [
            'if (i != 5)',
            'if (i <> 5)',
            'if i <> 5',
            'if i =! 5 then'
        ],
        answer: 0
    },
    {
        question: 'Como o loop while começa?',
        options: [
            'while (i <= 10)',
            'while (i <= 10; i++)',
            'while i = 1 to 10'
        ],
        answer: 0
    },
    {
        question: 'A sigla DOM significa:',
        options: [
            'Document Orientation Mock',
            'Document Object Model',
            'Doctype Object Model',
            'Doctype Orientation Mock'
        ],
        answer: 1
    },
    {
        question: 'O que é uma função?',
        options: [
            'Tipo de código específico do javascript que funciona apenas no console do navegador',
            'Configuração da linguagem javascript, a qual tem que ser programada no computador para rodar o código',
            'Conjunto de códigos que são utilizados para realizar diversas ações programadas por ele',
            'Todas as alternativas estão corretas'
        ],
        answer: 2
    },
    {
        question: 'Um exemplo de objeto JavaScript utilizado frequentemente nos dias e hoje é o:',
        options: [
            'XML',
            'HTML',
            'JSON',
            'CSS'
        ],
        answer: 2
    },
    {
        question: 'Para que serve um Objeto no Javascript?',
        options: [
            'Serve para fornecer nomes a funções de maneira aleatória no código',
            'Serve para deixar o código javascript funcional em uma página web',
            'Servem para receber e guardar valores que poderá ser usados em diversas parte do código ',
            'Todas as alternativas estão incorretas'
        ],
        answer: 2
    },
    {
        question: 'Qual diferença do uso do If else para o Switch?',
        options: [
            'O switch trata de maneira mais rápida a condição já o if else contém múltiplas condições para processar',
            'Serve para deixar o código javascript funcional em uma página web',
            'Servem para receber e guardar valores que poderá ser usados em diversas parte do código',
            'Todas as alternativas estão incorretas'
        ],
        answer: 2
    },
    {
        question: 'Das alternativas a seguir, qual a correta em realação ao loop for?',
        options: [
            'Bloco de código no qual só pode ser utilizado em condições false para que rode um loop',
            'Condição na qual executa um bloco de código desde que sua condição seja verdadeira',
            'Loop for é um bloco de código na qual sempre vai ser rodado apenas ele no sistema',
            'Todas as alternativas estão incorretas'
        ],
        answer: 1
    },
    {
        question: 'Qual diferença entre o loop for e o loop while?',
        options: [
            'While contém múltiplas condições, já o For contém apenas uma condição',
            'O for executa o bloco de código a partida da condição e incremento, o while a instrução até que a condição seja atendida',
            'Ambas possuem a mesma funcionalidade e funcionamento de sintaxe',
            'Todas as alternativas estão incorretas'
        ],
        answer: 1
    },
    {
        question: 'O operador ____________, no ES6, tem como objetivo ampliar objetos, strings e arrays. A sintaxe para sua utilização é similar às reticências, os três pontos (...). Estamos falando do:',
        options: [
            'spread',
            'rest',
            'lógico',
            'ternário'
        ],
        answer: 0
    },
    {
        question: 'O operador REST facilita a escrita do código com relação a quantidade indefinida de argumentos passados ao parâmetro de uma função. A mesma solução pode ser obtida com:',
        options: [
            'objeto increments',
            'objeto arguments',
            'objeto length',
            'objeto createsh'
        ],
        answer: 1
    },
    {
        question: 'Qual a finalide das funções repeat e includes?',
        options: [
            'includes() vai verificar se o parâmetro passado pra ela existe dentro de uma variável ou array. repeat() vai repetir o parâmetro passado pra ela',
            'includes() vai repetir o parâmetro passado pra ela. repeat() vai verificar se o parâmetro passado pra ela existe dentro de uma variável ou array',
            'includes() vai verificar um arquivo existe. repeat() vai repetir o parâmetro passado pra ela.',
            'includes() vai verificar se o parâmetro passado pra ela existe dentro de uma variável ou array. repeat() vai repetir o parâmetro passado pra ela 2 vezes'
        ],
        answer: 0
    },
    
];