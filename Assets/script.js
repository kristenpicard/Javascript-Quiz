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
    quizDiv.innerHTML = questions[0].question;
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

function startClock() {
    setInterval(updateClock,1000);
}

function updateClock() {
    lock = true;
    if (secondsLeft <= 0) {
        if(lock == true){
            lock = false;
            timeEl.textContent = "0 seconds left";
        }
    } else {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left";
        isClockZero();
    }
}

function checkAnswer (event) {
    // Grabbing the id of the button the user clicked and storing it in the var chosenButton.
    var chosenButton = event.target.id;
    if (chosenButton == questions[questionCount].correctAnswer) {
        if(!isLastQuestion()) {
            console.log("hello");
            questionCount++;
            quizDiv.innerHTML = questions[questionCount].question; 
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
            goToLastPage();
        }
    }
    else {
        resultsContainer.textContent = "Incorrect!";    
        secondsLeft -= 10;
        timeEl.textContent = secondsLeft + " seconds left";
    }
};

function goToLastPage() {
    finishedContainer.style.visibility = 'visible';
    quizContainer.style.visibility = 'hidden';
    buttonA.style.visibility = 'hidden';
    buttonB.style.visibility = 'hidden';
    buttonC.style.visibility = 'hidden';
    buttonD.style.visibility = 'hidden';
    resultsContainer.style.visibility = 'hidden';
    score.textContent = "Your final score is " + secondsLeft;
}

function isLastQuestion() {
    if (questionCount == questions.length-1) {
        return true; 
    }
    else {
        return false;
    }
}

function isClockZero() {
    if (secondsLeft <= 0) {
        goToLastPage(); 
    }
}

function showHighScores() {
    finishedContainer.style.visibility = 'hidden';
    highScoresTable.style.visibility = 'visible';
    for (var i = 0; i < window.localStorage.length; i++){
        console.log('test!!!!');
        var row = highScoresTable.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        console.log(window.localStorage.key(i));

        cell1.innerHTML = window.localStorage.key(i);
        cell2.innerHTML = window.localStorage.getItem(localStorage.key(i));
    } 
}

function submitScore(event) {
    event.preventDefault()
    var inits = initials.value;
    console.log(inits);
    window.localStorage.setItem(inits, JSON.stringify(secondsLeft));
    showHighScores();
}


var questionCount = 0;

var timeEl = document.querySelector("#time");
var buttonA = document.querySelector("#a");
var buttonB = document.querySelector("#b");
var buttonC = document.querySelector("#c");
var buttonD = document.querySelector("#d");
var startButton = document.querySelector("#start");
var score = document.querySelector('#score');
var form = document.querySelector('#form');
var initials = document.querySelector('#initials');
var quizDiv = document.querySelector('#quiz');
var resultsContainer = document.querySelector('#results');
var finishedContainer = document.querySelector('#finished');
var quizContainer = document.querySelector('#quiz-container')
var highScoresTable = document.querySelector('#high-scores');

// Default on first question.
quizDiv.innerHTML = "Try to answer the following code-related questions within the time limit.  Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
startButton.textContent = "Begin";

buttonA.style.visibility = 'hidden';
buttonB.style.visibility = 'hidden';
buttonC.style.visibility = 'hidden';
buttonD.style.visibility = 'hidden';
highScoresTable.style.visibility = 'hidden';

// Kristen you commented this to work on the form
finishedContainer.style.visibility = 'hidden';


// This made an event listener that calls 2 functions on this click.
startButton.addEventListener("click", () => {
    beginFunction();
    startClock();
});


form.addEventListener("submit",submitScore);
buttonA.addEventListener("click", checkAnswer);
buttonB.addEventListener("click", checkAnswer);
buttonC.addEventListener("click", checkAnswer);
buttonD.addEventListener("click", checkAnswer);


