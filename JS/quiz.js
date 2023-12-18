window.onload = function() 
{
    show(0);
}

let questions =[
    {
        id: 1,
        question: "What is the full form of RAM ?",
        answer: "Random Access Memory",
        options: [
            "Random Access Memory", 
            "Randomly Access Memory",
            "Run Accept Memory",
            "None of the above"
        ]
    },
    
    {
        id: 2,
        question: "What is the full form of CPU ?",
        answer: "Central Processing Unit",
        options: [
            "Central Programming Unit", 
            "Central Processing Unit",
            "Central Preloading Unit",
            "Central performance Unit"
        ]
    },
    
    {
        id: 3,
        question: "What is the full form of E-Mail ?",
        answer: "Electronic Mail",
        options: [
            "Electricity Mailing", 
            "Emergency Mail",
            "Electric Mail",
            "Electronic Mail"
        ]
    },
    
    {
        id: 4,
        question: "Which programming language is known as the mother of all languages?",
        answer: "Assembly",
        options: [
            "C++", 
            "Java",
            "COBOL",
            "Assembly"
        ]
    },
    
    {
        id: 5,
        question: "Which of the following is a database management system?",
        answer: "MySQL",
        options: [
            "Excel", 
            "MySQL",
            "Photoshop",
            "MS Word"
        ]
    },
    
    {
        id: 6,
        question: " What does the acronym GPU stand for?",
        answer: "Graphics Processing Unit",
        options: [
            "General Processing Unit", 
            "Graphics Processing Unit",
            "General Purpose Unit",
            "Graphical Performance Unit"
        ]
    },
    
    {
        id: 7,
        question: "Which of the following is an example of an object-oriented programming language?",
        answer: "Python",
        options: [
            "C", 
            "Fortran",
            "Python",
            "Assembly"
        ]
    },
    
    {
        id: 8,
        question: "What does LAN stand for?",
        answer: "Local Area Network",
        options: [
            "Local Area Network", 
            "Long Area Network",
            "Limited Access Network",
            "Large Area Network"
        ]
    },
    
    {
        id: 9,
        question: "Which file extension is commonly used for a Python script?",
        answer: ".py",
        options: [
            ".js", 
            ".html",
            ".py",
            ".css"
        ]
    },
    
    {
        id: 10,
        question: " Which data structure follows the Last In, First Out (LIFO) principle?",
        answer: "Stack",
        options: [
            "Queue", 
            "Stack",
            "Linked List",
            "Tree"
        ]
    }
]

function submitForm(e)
{
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;
    
    // store player name
    sessionStorage.setItem("name", name);
    
    location.href = "quiz.html";
    console.log(name);
}

let question_count=0;
let point = 0;

function next()
{
    let user_answer = document.querySelector("li.option.active").innerHTML;
    if(user_answer == questions[question_count].answer)
    {
        point += 1;  
        sessionStorage.setItem("points", point);
    }

    if(question_count == questions.length-1)
    {
        sessionStorage.setItem("time", `${minutes} minutes and ${seconds} seconds`)
        clearInterval(mytime);
        location.href = "end.html";
        return;
    }
    
    // console.log(user_answer);
    
    // Check answers by the user
    
    
    question_count++;
    show(question_count);
}

function show(count)
{
    let question = document.getElementById("questions");
    // question.innerHTML = "<h2>" + questions[count].question + "</h2>";
    question.innerHTML = 
    `<h2>Q${question_count+1}. ${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${questions[count].options[0]}</li>
    <li class="option">${questions[count].options[1]}</li>
    <li class="option">${questions[count].options[2]}</li>
    <li class="option">${questions[count].options[3]}</li>
</ul>`;
toggleActive();
}

function toggleActive()
{
    let option = document.querySelectorAll("li.option");
    
    for(let i = 0; i < option.length; i++)
    {
        option[i].onclick = function() 
        {
            for(let j = 0; j < option.length; j++)
            {
                if(option[j].classList.contains("active"))
                {
                    option[j    ``].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}