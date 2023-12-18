const quizDB = [
    {
        question: "Q1: square root of 16?",
        a: "3",
        b: "2",
        c: "4",
        d: "5",
        ans: "ans3"
    },
    {
        question: "Q2: cube root of 8?",
        a: "3",
        b: "2",
        c: "4",
        d: "5",
        ans: "ans2"
    },
    {
        question: "Q3: 100-90+60+100-20?",
        a: "100",
        b: "200",
        c: "250",
        d: "150",
        ans: "ans4"
    },
    {
        question: "Q4: 5x+3x-2x+7x-4x?",
        a: "9x",
        b: "7x",
        c: "8x",
        d: "5x",
        ans: "ans1"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const prevButton = document.querySelector('#prev');

const answers = document.querySelectorAll('.answer');
const showscore = document.querySelector('#showscore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}


loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();

    if (checkedAnswer == quizDB[questionCount].ans) {
        score++;
    }

    questionCount++;

    deselectAll();

    if (questionCount < quizDB.length) {
        loadQuestion();
    } else {
        showScore.innerHTML = `
        <h2> You Scored ${score}/${quizDB.length} </h2>
        <button class="btn" onclick="location.reload()"> Play Again </button>
        `;

        showScore.classList.remove('scoreArea');
    }
});

// ... (Your existing code)

//const prevButton = document.querySelector('#prev');
const showPrevQuestion = document.querySelector('#showprevquestion');

prevButton.addEventListener('click', () => {
    if (questionCount > 0) {
        questionCount--;
        loadQuestion();
        showPrevQuestion.innerHTML = `<p>Showing Previous Question</p>`;
    }
});
