var questions = [
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debbugger is:",
    answers: {
      a: "JavaScript",
      b: "terminal/bash",
      c: "for loops",
      d: "console.log",
    },
    correctAnswer: "d",
  },
  {
    question: "Commonly used data types DO NOT include",
    answers: {
      a: "strings",
      b: "booleans",
      c: "alerts",
      d: "numers",
    },
    correctAnswer: "c",
  },
  {
    question:
      "The condition in an if / else statement is enclosed within ______.",
    answers: {
      a: "quotes",
      b: "curly brackets",
      c: "parenthesis",
      d: "square brackets",
    },
    correctAnswer: "c",
  },
  {
    question: "Arrays in JavaScript can be used to store",
    answers: {
      a: "numbers and strings",
      b: "other arrays",
      c: "booleans",
      d: "all of the above",
    },
    correctAnswer: "d",
  },
  {
    question:
      "String values must be enclosed within _____ when being assigned to variables.",
    answers: {
      a: "quotes",
      b: "curly brackets",
      c: "commas",
      d: "parenthesis",
    },
    correctAnswer: "a",
  },
  {
    question: "Each piece of data contained in an array is called a(n)",
    answers: {
      a: "index",
      b: "element",
      c: "range",
      d: "column",
    },
    correctAnswer: "b",
  },
];

function beginFunction() {
  questionCount = 0;
  secondsLeft = 60;
  quizContainer.style.display = "inline";
  quizDiv.innerHTML = questions[0].question;
  buttonA.textContent = questions[0].answers.a;
  buttonB.textContent = questions[0].answers.b;
  buttonC.textContent = questions[0].answers.c;
  buttonD.textContent = questions[0].answers.d;
  buttonA.style.display = "inline";
  buttonB.style.display = "inline";
  buttonC.style.display = "inline";
  buttonD.style.display = "inline";
  startButton.style.display = "none";
  timeEl.textContent = "Score: " + secondsLeft + " seconds left";
  startClock();
}
let clock;
var secondsLeft = 60;

function startClock() {
  clock = setInterval(updateClock, 1000);
}

function stopClock() {
  clearInterval(clock);
}

function updateClock() {
  lock = true;
  if (secondsLeft <= 0) {
    if (lock == true) {
      lock = false;
      isClockZero();
    }
  } else {
    secondsLeft--;
    timeEl.textContent = "Score: " + secondsLeft + " seconds left";
    isClockZero();
  }
}

function isClockZero() {
  if (secondsLeft <= 0) {
    timeEl.textContent = "Score: 0 seconds left";
    goToLastPage();
  }
}

function checkAnswer(event) {
  // Grabbing the id of the button the user clicked and storing it in the var chosenButton.
  var chosenButton = event.target.id;
  if (chosenButton == questions[questionCount].correctAnswer) {
    if (!isLastQuestion()) {
      questionCount++;
      quizDiv.innerHTML = questions[questionCount].question;
      resultsContainer.textContent = "";
      buttonA.textContent = questions[questionCount].answers.a;
      buttonB.textContent = questions[questionCount].answers.b;
      buttonC.textContent = questions[questionCount].answers.c;
      buttonD.textContent = questions[questionCount].answers.d;
      buttonA.style.display = "inline";
      buttonB.style.display = "inline";
      buttonC.style.display = "inline";
      buttonD.style.display = "inline";
    } else {
      goToLastPage();
      stopClock();
    }
  } else {
    resultsContainer.textContent = "Incorrect!";
    if (secondsLeft > 10) {
      secondsLeft -= 10;
      stopClock();
    } else {
      secondsLeft -= secondsLeft;
      stopClock();
    }

    // timeEl.textContent = "Score: " + secondsLeft + " seconds left";
  }
}

function goToLastPage() {
  finishedContainer.style.display = "block";
  quizContainer.style.display = "none";
  buttonA.style.display = "none";
  buttonB.style.display = "none";
  buttonC.style.display = "none";
  buttonD.style.display = "none";

  if (secondsLeft <= 0) {
    score.textContent = "Your final score is 0";
  } else {
    let finalScore = secondsLeft;
    score.textContent = "Your final score is " + finalScore;
    stopClock();
  }
  timeEl.style.display = "none";
}

function isLastQuestion() {
  if (questionCount == questions.length - 1) {
    return true;
  } else {
    return false;
  }
}

function showHighScores() {
  finishedContainer.style.display = "none";
  highScoresTable.style.display = "inline";
  resultsHeader.style.display = "inline";
  clearHighScoresButton.style.display = "inline";
  clearHighScoresButton.textContent = "Clear High Scores";
  retakeQuiz.style.display = "inline";
  retakeQuiz.textContent = "Retake Quiz";
  for (var i = 0; i < window.localStorage.length; i++) {
    var row = highScoresTable.insertRow(i);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    console.log(window.localStorage.key(i));

    cell1.innerHTML =
      "Player: " + window.localStorage.key(i) + "&nbsp;&nbsp;&nbsp;";
    cell2.innerHTML =
      "Score: " + window.localStorage.getItem(localStorage.key(i));
  }
}

function submitScore(event) {
  event.preventDefault();
  var inits = initials.value;
  window.localStorage.setItem(inits, JSON.stringify(secondsLeft));
  showHighScores();
}

function clearLocalStorage() {
  window.localStorage.clear();
  while (highScoresTable.hasChildNodes()) {
    highScoresTable.removeChild(highScoresTable.firstChild);
  }
}

function startOver() {
  location.reload();
  return false;
}

var questionCount = 0;

var timeEl = document.querySelector("#time");
var buttonA = document.querySelector("#a");
var buttonB = document.querySelector("#b");
var buttonC = document.querySelector("#c");
var buttonD = document.querySelector("#d");
var startButton = document.querySelector("#start");
var score = document.querySelector("#score");
var form = document.querySelector("#form");
var initials = document.querySelector("#initials");
var quizDiv = document.querySelector("#quiz");
var resultsContainer = document.querySelector("#results");
var finishedContainer = document.querySelector("#finished");
var quizContainer = document.querySelector("#quiz-container");
var highScoresTable = document.querySelector("#high-scores");
var resultsHeader = document.querySelector("#results-header");
var clearHighScoresButton = document.querySelector("#clear-hs");
var retakeQuiz = document.querySelector("#retake");

quizDiv.innerHTML =
  "Try to answer the following code-related questions within the time limit.  Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
startButton.textContent = "Begin";

buttonA.style.display = "none";
buttonB.style.display = "none";
buttonC.style.display = "none";
buttonD.style.display = "none";
highScoresTable.style.display = "none";
resultsHeader.style.display = "none";
clearHighScoresButton.style.display = "none";
retakeQuiz.style.display = "none";
timeEl.textContent = "Score: " + secondsLeft + " seconds left";
finishedContainer.style.display = "none";

// This made an event listener that calls 2 functions on this click.
startButton.addEventListener("click", () => {
  beginFunction();
});

form.addEventListener("submit", submitScore);
buttonA.addEventListener("click", checkAnswer);
buttonB.addEventListener("click", checkAnswer);
buttonC.addEventListener("click", checkAnswer);
buttonD.addEventListener("click", checkAnswer);

clearHighScoresButton.addEventListener("click", clearLocalStorage);
retakeQuiz.addEventListener("click", startOver);
