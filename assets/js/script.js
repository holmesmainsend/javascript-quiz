// DOM values
const beginEl = document.querySelector(".begin");
const leaderboardEl = document.querySelector(".leaderboard");
const retireEl = document.querySelector(".retire");
var timerDisplayEl = document.querySelector(".timerDisplay");
var timerValue = 5;


// Quiz Objects
const question1 = {
    title: "Which of the following Math methods will always round x down to the nearest integer?",
    option1: "Math.round(x)",
    option2: "Math.ceil(x)",
    option3: "Math.trunc(x)",
    correct: "Math.floor(x)",
};

const question2 = {
    title: "How many distinct values are available to the Boolean data type?",
    option1: "1",
    option2: "Depends on the context",
    option3: "0",
    correct: "2",
};

const question3 = {
    title: "In JavaScript, a triple equals sign (===) means:",
    option1: "Equal in value but not type",
    option2: "Not equal",
    option3: "And",
    correct: "Equal in both value and type",
};

const question4 = {
    title: "What approximate percentage of websites today use JavaScript?",
    option1: "35%",
    option2: "67.4%",
    option3: "89%",
    correct: "97%",
};

const question5 = {
    title: "With what do you separate methods in an object?",
    option1: "A period (.)",
    option2: "A pair of brackets ([])",
    option3: "A dollar sign ($)",
    correct: "A comma (,)",
};

const question6 = {
    title: "Which of the following is an example of an array?",
    option1: "var client = 'Branson Automotive'",
    option2: "let x = 20.4",
    option3: "const titleEl = document.querySelector('.title')",
    correct: "const database = ['MySQL', 'Oracle Database', 'MongoDB']",
};

const question7 = {
    title: "Your long-lost brother Benson is trapped in a never-ending loop that has paralyzed him with fear. Which command will free him from his looping nightmare?",
    option1: "return;",
    option2: "switch;",
    option3: "end;",
    correct: "break;",
};

const question8 = {
    title: "You want to subtract 1 from the var 'tasksToDo'. How could you go about this as quickly as possible?",
    option1: "tasksToDo minus 1",
    option2: "tasksToDo.takeOne",
    option3: "tasksToDo spliced",
    correct: "tasksToDo--",
};

const question9 = {
    title: "Which extension do JavaScript files typically save with?",
    option1: ".jav",
    option2: ".javas",
    option3: ".jvscrt",
    correct: ".js",
};

const question10 = {
    title: "What does DOM stand for?",
    option1: "Derived Oracle Main",
    option2: "Daimer-Operand Mode",
    option3: "Doltish Oaf Mentality",
    correct: "Document Object Model",
};


// Arrays
const questionArray = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];



// Functions
function countdown() {
    if (timerValue > 0) {
      setInterval(function () {
        timerValue--;
        timerDisplayEl.innerHTML = timerValue;
      }, 1000);
      return timerValue;
    } else console.log("Game Over");
  };
  
  function quiz() {
      do {

      }
      while (i < 10 && timerValue > 0);
  }
  

// Event listeners
beginEl.addEventListener("click", countdown, {});
beginEl.addEventListener("click", quiz, {});

leaderboardEl.addEventListener("click", function () {
  console.log("leaderboard");
});

retireEl.addEventListener("click", function () {
  close();
});