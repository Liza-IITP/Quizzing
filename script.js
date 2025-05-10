const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const nextButton = document.getElementById('next-btn')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex 
let score = 0; // Initialize score

startButton.addEventListener('click',startGame)
nextButton.addEventListener('click',()=>{
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
    console.log("Started 🚩")
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(()=> Math.random()-.5)
    currentQuestionIndex = 0
    score = 0; // Reset score when the game starts
    updateScore(); // Update the score display
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer=>{
        const button = document.createElement('button')
        button.innerText = answer.text 
        button.classList.add('btn')
            if(answer.correct){
                button.dataset.correct = answer.correct
            }
            button.addEventListener('click',selectAnswer)
            answerButtonsElement.appendChild(button)
        
    })
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });

    if (correct) {
        score++; // Increment score for correct answer
    } else {
        score--; // Decrement score for incorrect answer
    }
    updateScore(); // Update the score display

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide'); // Ensure the restart button is shown
        questionContainerElement.classList.add('hide'); // Hide the question container
    }
}

function setStatusClass(element,correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    } else{
        element.classList.add('wrong')
    }
}
function clearStatusClass(element){
element.classList.remove('correct')
element.classList.remove('wrong')
}

function updateScore() {
    const scoreElement = document.getElementById('score');
    if (scoreElement) {
        scoreElement.innerText = `Score: ${score}`;
    }
}

// Add a score display to the UI
window.onload = function () {
    const scoreContainer = document.createElement('div');
    scoreContainer.id = 'score';
    scoreContainer.style.fontSize = '20px';
    scoreContainer.style.margin = '10px';
    scoreContainer.innerText = `Score: ${score}`;
    document.body.insertBefore(scoreContainer, document.body.firstChild);

    // Load the first question
    startButton.addEventListener('click', startGame);
};

const questions = [
    {
        question : "What is 2+2 ?",
        answers : [
            { text : '4', correct : true },
            { text : '22', correct : false }
        ]
    },
    {
        question : "Which planet is known as the Red Planet?",
        answers : [
            { text : 'Mars', correct : true },
            { text : 'Venus', correct : false }
        ]
    },
    {
        question : "Who wrote 'Hamlet'?",
        answers : [
            { text : 'William Shakespeare', correct : true },
            { text : 'Mark Twain', correct : false }
        ]
    },
    {
        question : "What is the capital of France?",
        answers : [
            { text : 'Paris', correct : true },
            { text : 'Rome', correct : false }
        ]
    },
    {
        question : "Which gas do plants absorb from the atmosphere?",
        answers : [
            { text : 'Carbon Dioxide', correct : true },
            { text : 'Oxygen', correct : false }
        ]
    },
    {
        question : "What is the largest ocean on Earth?",
        answers : [
            { text : 'Pacific Ocean', correct : true },
            { text : 'Atlantic Ocean', correct : false }
        ]
    },
    {
        question : "Which language is used for web development?",
        answers : [
            { text : 'HTML', correct : true },
            { text : 'Python', correct : false }
        ]
    },
    {
        question : "What is the boiling point of water in Celsius?",
        answers : [
            { text : '100°C', correct : true },
            { text : '212°C', correct : false }
        ]
    },
    {
        question : "What is the chemical symbol for gold?",
        answers : [
            { text : 'Au', correct : true },
            { text : 'Ag', correct : false }
        ]
    },
    {
        question: "What color is a Smurf?",
        answers: [
            { text: 'Blue', correct: true },
            { text: 'Green', correct: false }
        ]
    },
    {
        question: "Which animal says 'moo'?",
        answers: [
            { text: 'Cow', correct: true },
            { text: 'Duck', correct: false }
        ]
    },
    {
        question: "Which fruit keeps the doctor away if eaten daily?",
        answers: [
            { text: 'Apple', correct: true },
            { text: 'Banana', correct: false }
        ]
    },
    {
        question: "What do you call a baby cat?",
        answers: [
            { text: 'Kitten', correct: true },
            { text: 'Puppy', correct: false }
        ]
    },
    {
        question: "What's the opposite of hot?",
        answers: [
            { text: 'Cold', correct: true },
            { text: 'Spicy', correct : false }
        ]
    },
    {
        question: "If you mix red and yellow, what color do you get?",
        answers: [
            { text: 'Orange', correct: true },
            { text: 'Purple', correct: false }
        ]
    },
    {
        question: "How many legs does a spider have?",
        answers: [
            { text: '8', correct: true },
            { text: '6', correct: false }
        ]
    },
    {
        question: "What day comes after Friday?",
        answers: [
            { text: 'Saturday', correct: true },
            { text: 'Monday', correct: false }
        ]
    }
];
