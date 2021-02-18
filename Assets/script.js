var questions = [
    {
        question: "A very useful tool used during development and debugging for printing content to the debbugger is:",
        answers: {
            a: "JavaScript", 
            b: "terminal/bash", 
            c: "for loops", 
            d: "console.log"
            },
        correctAnswer: "d"
    },
    {
        question: "Commonly used data types DO NOT include",
        answers: {
            a: "strings", 
            b: "booleans", 
            c: "alerts", 
            d: "numers"
            },
        correctAnswer: "c"
    },
    {
        question: "The condition in an if / else statement is enclosed within ______.",
        answers: {
            a: "quotes", 
            b: "curly brackets", 
            c: "parenthesis", 
            d: "square brackets"
            },
        correctAnswer: "c"
    },
    {
        question: "Arrays in JavaScript can be used to store",
        answers: {
            a: "numbers and strings", 
            b: "other arrays", 
            c: "booleans", 
            d: "all of the above"
            },
        correctAnswer: "d"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answers: {
            a: "quotes", 
            b: "curly brackets", 
            c: "commas", 
            d: "parenthesis"
            },
        correctAnswer: "a"
    },
    {
        question: "Each piece of data contained in an array is called a(n)",
        answers: {
            a: "index", 
            b: "element", 
            c: "range", 
            d: "column"
            },
        correctAnswer: "b"
    },
];




function checkAnswer (event) {
    var element = event.target.id;
    if (element == questions[questionCount].correctAnswer) {
        questionCount++;
        quizContainer.innerHTML = questions[questionCount].question; 
        resultsContainer.textContent = "";
        buttonA.textContent = questions[questionCount].answers.a;
        buttonB.textContent = questions[questionCount].answers.b;
        buttonC.textContent = questions[questionCount].answers.c;
        buttonD.textContent = questions[questionCount].answers.d;
    }
    else {
        resultsContainer.textContent = "Wrong!";
    }
};

var questionCount = 0;


var buttonA = document.querySelector("#a");
var buttonB = document.querySelector("#b");
var buttonC = document.querySelector("#c");
var buttonD = document.querySelector("#d");
var quizContainer = document.querySelector('#quiz');
var resultsContainer = document.querySelector('#results');
var buttonsContainer = document.querySelector('.buttons');

// Default on first question.
quizContainer.innerHTML = questions[0].question;
buttonA.textContent = questions[0].answers.a;
buttonB.textContent = questions[0].answers.b;
buttonC.textContent = questions[0].answers.c;
buttonD.textContent = questions[0].answers.d;

buttonA.addEventListener("click", checkAnswer);
buttonB.addEventListener("click", checkAnswer);
buttonC.addEventListener("click", checkAnswer);
buttonD.addEventListener("click", checkAnswer);


