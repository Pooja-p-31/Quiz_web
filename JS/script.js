const questions = [
    {
        question: "What is the powerhouse of the cell?", 
        answers: [
            {text: "Nucleus", correct: false},
            {text: "Mitochondria", correct: true},
            {text: "Endoplasmic Reticulum", correct: false},
            {text: "Golgi Apparatus", correct: false}
        ]
    },
    
    {
        question: "Which gas do plants absorb during photosynthesis?", 
        answers: [
            {text: "Carbon Dioxide", correct: true},
            {text: "Oxygen", correct: false},
            {text: "Nitrogen", correct: false},
            {text: "Hydrogen", correct: false}
        ]
    },
    
    {
        question: "What is the chemical symbol for water?",
        answers: [
            {text: "CO2", correct: false},
            {text: "O2", correct: false},
            {text: "N2", correct: false},
            {text: "H2O", correct: true}
        ]
    },
    
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            {text: "Earth", correct: false},
            {text: "Jupiter", correct: true},
            {text: "Mars", correct: false},
            {text: "Saturn", correct: false},
        ]
    },
    
    {
        question: "Which process is responsible for the formation of sedimentary rocks?",
        answers: [
            {text: "Erosion", correct: false},
            {text: "Weathering", correct: false},
            {text: "Deposition", correct: true},
            {text: "Metamorphism", correct: false},
        ]
    },
    
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            {text: "Ag", correct: false},
            {text: "Au", correct: true},
            {text: "Fe", correct: false},
            {text: "Cu", correct: false},
        ]
    },
    
    {
        question: "Which gas makes up the majority of Earth's atmosphere?",
        answers: [
            {text: "Oxygen", correct: false},
            {text: "Carbon Dioxide", correct: false},
            {text: "Hydrogen", correct: false},
            {text: "Nitrogen", correct: true},
        ]
    },
    
    {
        question: "What is the process by which plants make their own food?",
        answers: [
            {text: "Photosynthesis", correct: true},
            {text: "Respiration", correct: false},
            {text: "Transpiration", correct: false},
            {text: "Fermentation", correct: false},
        ]
    },
    
    {
        question: "What is the unit of electric current?",
        answers: [
            {text: "Watt", correct: false},
            {text: "Volt", correct: false},
            {text: "Ampere", correct: true},
            {text: "Ohm", correct: false},
        ]
    },
    
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            {text: "Venus", correct: false},
            {text: "Mars", correct: true},
            {text: "Jupiter", correct: false},
            {text: "Saturn", correct: false},
        ]
    }
    
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz()
{
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    
    showQuestion();
}

function showQuestion()
{
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML =answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct)
        {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState()
{
    nextButton.style.display = "none";
    while(answerButtons.firstChild)
    {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e)
{
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect)
    {
        selectedBtn.classList.add("correct");   
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect"); 
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true")
        {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
    
}

function showScore()
{
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Take Retest";
    nextButton.style.display = "block";
}

function handleNextButton()
{
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length)
    {
        showQuestion(); 
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
   if(currentQuestionIndex < questions.length) 
   {
    handleNextButton();
   }
   else{
    startQuiz();
   }
});

startQuiz();