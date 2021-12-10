// dados iniciais
let currentQuestion = 0;

showQuestion();



// funções
function showQuestion() {
    if(questions[currentQuestion]) {
        let q = questions[currentQuestion];

        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.options').style.display = 'block';

        document.querySelector('.question').innerHTML = q.question;
        document.querySelector('.options').innerHTML = '';
    } else {
        // sem questões.
    }
}