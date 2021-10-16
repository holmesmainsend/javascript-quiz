// TODO: save timer score to localStorage with user initials input (do not accept empty string)
// TODO: retrieve scores from localStorage for leaderboard page
// TODO: add polish/CSS/sound effects

// DOM values
const beginEl = document.querySelector(".begin");
// const leaderboardEl = document.querySelector(".leaderboard");
const retireEl = document.querySelector(".retire");
const mainEl = document.querySelector("main");
const titlerEl = document.querySelector(".titler");
var timerDisplayEl = document.querySelector(".timerDisplay");
var formEl = document.querySelector(".form");
var currentQuestion = 0;
var timerValue = 300;

// Arrays
const questionArray = [
  {
    title:
      "Which of the following Math methods will always round x down to the nearest integer?",
    options: [
      "Math.round(x)",
      "Math.floor(x)",
      "Math.trunc(x)",
      "Math.ceil(x)",
    ],
    answer: "Math.floor(x)",
  },

  {
    title: "How many distinct values are available to the Boolean data type?",
    options: ["1", "Depends on the context", "2", "0"],
    answer: "2",
  },

  {
    title: "In JavaScript, a triple equals sign (===) means:",
    options: [
      "Equal in both value and type",
      "Not equal",
      "And",
      "Equal in value but not type",
    ],
    answer: "Equal in both value and type",
  },

  {
    title: "What approximate percentage of websites today use JavaScript?",
    options: ["97%", "67.4%", "89%", "34%"],
    answer: "97%",
  },

  {
    title: "With what do you separate methods in an object?",
    options: [
      "A period (.)",
      "A pair of brackets ([])",
      "A dollar sign ($)",
      "A comma (,)",
    ],
    answer: "A comma (,)",
  },

  {
    title: "Which of the following is an example of an array?",
    options: [
      "var client = 'Branson Automotive'",
      "let x = 20.4",
      "const titleEl = document.querySelector('.title')",
      "const database = ['MySQL', 'Oracle Database', 'MongoDB']",
    ],
    answer: "const database = ['MySQL', 'Oracle Database', 'MongoDB']",
  },

  {
    title:
      "Your long-lost brother Benson is trapped in a never-ending loop that has paralyzed him with fear. Which command will free him from his looping nightmare?",
    options: ["return;", "break;", "end;", "switch;"],
    answer: "break;",
  },

  {
    title:
      "You want to subtract 1 from the var 'tasksToDo'. How could you go about this as quickly as possible?",
    options: [
      "tasksToDo minus 1",
      "tasksToDo.takeOne",
      "tasksToDo--",
      "tasksToDo.spliced",
    ],
    answer: "tasksToDo--",
  },

  {
    title: "Which extension do JavaScript files typically save with?",
    options: [".jav", ".javas", ".jvscrt", ".js"],
    answer: ".js",
  },

  {
    title: "What does DOM stand for?",
    options: [
      "Derived Oracle Main",
      "Document Object Model",
      "Doltish Oaf Mentality",
      "Daimer-Operand Mode",
    ],
    answer: "Document Object Model",
  },
];

// Functions
function countdown() {
  var setTimer = setInterval(function () {
    if (timerValue > 0) {
      timerValue--;
      timerDisplayEl.innerHTML = timerValue;
    } else {
      timerDisplayEl.textContent = "";
      clearInterval(setTimer);
      timesUp();
    }
  }, 1000);
}

function beginRemover() {
  beginEl.remove();
}

function startQuiz() {
  beginRemover();
  if (currentQuestion < 10) {
  var currentPrompt = questionArray[currentQuestion];
  const gameQuestionsEl = document.createElement("div");
  gameQuestionsEl.setAttribute("id", "gameQuestionDiv");
  mainEl.appendChild(gameQuestionsEl);
  currentPrompt.options.forEach(function (choice, i) {
    titlerEl.innerText = questionArray[currentQuestion].title;
    var optionButton = document.createElement("button");
    optionButton.innerText = choice;
    gameQuestionsEl.appendChild(optionButton);
    optionButton.addEventListener("click", function () {
      verifyChoice(optionButton);
    });
  });
} else {
  quizRemover();
}
}

function verifyChoice(optionButton) {
  let gameQuestionsEl = document.querySelector("#gameQuestionDiv");
  if (questionArray[currentQuestion].answer === optionButton.innerText) {
    currentQuestion++;
    gameQuestionsEl.remove();
    startQuiz();
  } else {
    currentQuestion++;
    timerValue = timerValue - 5;
    gameQuestionsEl.remove();
    startQuiz();
  }
}

function quizRemover() {
  const gameQuestionsEl = document.createElement("div");
  gameQuestionsEl.setAttribute("id", "gameQuestionDiv");
  mainEl.appendChild(gameQuestionsEl);
  var score = timerValue
  timerDisplayEl.remove();
  var scoreDisplay = document.createElement("p");
  scoreDisplay.innerText = score;
  mainEl.appendChild(scoreDisplay);
  console.log(score);
  titlerEl.innerText = "Game Over";
  formEl.innerHTML = 
  "<h3>Add Local Leaderboard Name Below</h3> <input name = 'name' class='name'> <input type='submit' value='Submit' class='submitButton'>"
  var submitButtonEl = document.querySelector(".submitButton");
  var nameEl = document.querySelector(".name");

  submitButtonEl.addEventListener("click", function() {
    localStorage.setItem(nameEl.value, score);
  })
}

function timesUp() {
  let gameQuestionsEl = document.querySelector("#gameQuestionDiv");
  gameQuestionsEl.remove();
  titlerEl.innerText = "Game Over";
  formEl.innerHTML = 
  "<h3>Since you ran out of time your score for this round is 0. Refresh the page and try again for a chance to get your name on the leaderboard.</h3>"
}

// for (var i = 0; i < questionArray.length; i++) {
//   titlerEl.innerText = questionArray[i].title;
//   var option1Button = document.createElement("button");
//   var option2Button = document.createElement("button");
//   var option3Button = document.createElement("button");
//   var option4Button = document.createElement("button");
//   option1Button.textContent = questionArray[i].option1;
//   option2Button.textContent = questionArray[i].option2;
//   option3Button.textContent = questionArray[i].option3;
//   option4Button.textContent = questionArray[i].option4;
//   mainEl.appendChild(option1Button);
//   mainEl.appendChild(option2Button);
//   mainEl.appendChild(option3Button);
//   mainEl.appendChild(option4Button);

//   option1Button.addEventListener("click", console.log("This is option1"));
//   option2Button.addEventListener("click", console.log("This is option2"));
//   option3Button.addEventListener("click", console.log("This is option3"));
//   option4Button.addEventListener("click", console.log("This is option4"));

//   // if (response == questionArray[i].answer) {
//   //   alert("Correct");
//   // } else {
//   //   alert("WRONG");
//   // }
// }

// Event listeners
beginEl.addEventListener("click", startQuiz, {});
beginEl.addEventListener("click", countdown, {});

retireEl.addEventListener("click", function () {
  close();
});
