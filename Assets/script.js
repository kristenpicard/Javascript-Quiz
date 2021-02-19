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

function beginFunction() {
    quizContainer.innerHTML = questions[0].question;
    buttonA.textContent = questions[0].answers.a;
    buttonB.textContent = questions[0].answers.b;
    buttonC.textContent = questions[0].answers.c;
    buttonD.textContent = questions[0].answers.d;
    buttonA.style.visibility = 'visible';
    buttonB.style.visibility = 'visible';
    buttonC.style.visibility = 'visible';
    buttonD.style.visibility = 'visible';
    startButton.style.visibility = 'hidden';
};

var secondsLeft = 60;

function setTime() {
var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left";
    if(secondsLeft === 0) {
    clearInterval(timerInterval);
    }
 }, 1000); 
}

function checkAnswer (event) {
    // Grabbing the id of the button the user clicked and storing it in the var chosenButton.
    var chosenButton = event.target.id;
    if (chosenButton == questions[questionCount].correctAnswer) {
        questionCount++;
        quizContainer.innerHTML = questions[questionCount].question; 
        resultsContainer.textContent = "";
        buttonA.textContent = questions[questionCount].answers.a;
        buttonB.textContent = questions[questionCount].answers.b;
        buttonC.textContent = questions[questionCount].answers.c;
        buttonD.textContent = questions[questionCount].answers.d;
        buttonA.style.visibility = 'visible';
        buttonB.style.visibility = 'visible';
        buttonC.style.visibility = 'visible';
        buttonD.style.visibility = 'visible';
    }
    else {
        resultsContainer.textContent = "Incorrect!";    
        // This code below did not work to take time away if incorrect.
        timeEl.addEventListener("click", function() {
            secondsLeft -= 10;
            document.getElementById("#time").innerHTML = secondsLeft + " seconds left";
        });
    }
};

// My attempt at how to change screen to All done once looped through all questions or time is up.  Don't know where to call it?
function allDone () {
    if (questionCount > questions.length || secondsLeft == 0) {
        finishedContainer.style.visibility = 'visible';
    }
}

var questionCount = 0;

var timeEl = document.querySelector("#time");
var buttonA = document.querySelector("#a");
var buttonB = document.querySelector("#b");
var buttonC = document.querySelector("#c");
var buttonD = document.querySelector("#d");
var startButton = document.querySelector("#start");

var quizContainer = document.querySelector('#quiz');
var resultsContainer = document.querySelector('#results');
var finishedContainer = document.querySelector('#finished');

// Default on first question.
quizContainer.innerHTML = "Try to answer the following code-related questions within the time limit.  Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
startButton.textContent = "Begin";

buttonA.style.visibility = 'hidden';
buttonB.style.visibility = 'hidden';
buttonC.style.visibility = 'hidden';
buttonD.style.visibility = 'hidden';
finishedContainer.style.visibility = 'hidden';

// This made an event listener that calls 2 functions on this click.
startButton.addEventListener("click", () => {
    beginFunction();
    setTime()
});
buttonA.addEventListener("click", checkAnswer);
buttonB.addEventListener("click", checkAnswer);
buttonC.addEventListener("click", checkAnswer);
buttonD.addEventListener("click", checkAnswer);


