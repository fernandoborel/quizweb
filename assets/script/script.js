// dados iniciais
let currentQuestion = 0;
let correctAnswer = 0;



showQuestion();



// funções
function showQuestion() {
    if(questions[currentQuestion]) {
        let q = questions[currentQuestion];

        // mostrar questões
        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.questionArea').style.display = 'block';

        document.querySelector('.question').innerHTML = q.question;
        
        //mostrar respostas
        let optionsHtml = '';
        for(let i in q.options) {
            optionsHtml += `<div data-op="${i}" class="option"><span>${parseInt(i)+1}</span>${q.options[i]}</div>`;
        }
        document.querySelector('.options').innerHTML = optionsHtml;

        //selecionando as respostas
        document.querySelectorAll('.options .option').forEach(item => {
            item.addEventListener('click', optionClickEvent);
        })
    } else {
        // sem questões.
    }
}

//função para selecionar as respostas
function optionClickEvent(e) {
    let clickedOption = parseInt(e.target.getAttribute('data-op'));

    if(questions[currentQuestion].answer === clickedOption) {
        correctAnswer++;
    }

    currentQuestion++;
    showQuestion();
}