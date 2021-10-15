// DOM values
const beginEl = document.querySelector(".begin");
const leaderboardEl = document.querySelector(".leaderboard");
const retireEl = document.querySelector(".retire");
const mainEl = document.querySelector("main");
const titlerEl = document.querySelector(".titler");
var timerDisplayEl = document.querySelector(".timerDisplay");
var timerValue = 5;


// Arrays
const questionArray = [
  {
    title:
      "Which of the following Math methods will always round x down to the nearest integer?",
    option1: "Math.round(x)",
    option2: "Math.floor(x)",
    option3: "Math.trunc(x)",
    option4: "Math.ceil(x)",
    answer: 2,
  },

  {
    title: "How many distinct values are available to the Boolean data type?",
    option1: "1",
    option2: "Depends on the context",
    option3: "2",
    option4: "0",
    answer: 3,
  },

  {
    title: "In JavaScript, a triple equals sign (===) means:",
    option1: "Equal in both value and type",
    option2: "Not equal",
    option3: "And",
    option4: "Equal in value but not type",
    answer: 1,
  },

  {
    title: "What approximate percentage of websites today use JavaScript?",
    option1: "97%",
    option2: "67.4%",
    option3: "89%",
    option4: "34%",
    answer: 1,
  },

  {
    title: "With what do you separate methods in an object?",
    option1: "A period (.)",
    option2: "A pair of brackets ([])",
    option3: "A dollar sign ($)",
    option4: "A comma (,)",
    answer: 4,
  },

  {
    title: "Which of the following is an example of an array?",
    option1: "var client = 'Branson Automotive'",
    option2: "let x = 20.4",
    option3: "const titleEl = document.querySelector('.title')",
    option4: "const database = ['MySQL', 'Oracle Database', 'MongoDB']",
    answer: 4,
  },

  {
    title:
      "Your long-lost brother Benson is trapped in a never-ending loop that has paralyzed him with fear. Which command will free him from his looping nightmare?",
    option1: "return;",
    option2: "break;",
    option3: "end;",
    option4: "switch;",
    answer: 2,
  },

  {
    title:
      "You want to subtract 1 from the var 'tasksToDo'. How could you go about this as quickly as possible?",
    option1: "tasksToDo minus 1",
    option2: "tasksToDo.takeOne",
    option3: "tasksToDo--",
    option4: "tasksToDo.spliced",
    answer: 3,
  },

  {
    title: "Which extension do JavaScript files typically save with?",
    option1: ".jav",
    option2: ".javas",
    option3: ".jvscrt",
    option4: ".js",
    answer: 4,
  },

  {
    title: "What does DOM stand for?",
    option1: "Derived Oracle Main",
    option2: "Document Object Model",
    option3: "Doltish Oaf Mentality",
    option4: "Daimer-Operand Mode",
    answer: 2,
  },
];


// Functions
function countdown() {
    if (timerValue > 0) {
      setInterval(function () {
        timerValue--;
        timerDisplayEl.innerHTML = timerValue;
      }, 1000);
    } else console.log("Game Over");
  }
  
  function beginRemover() {
    beginEl.remove();
  }

function startQuiz() {
  countdown();
  beginRemover();
  for (var i = 0; i < questionArray.length; i++) {
    titlerEl.innerText = questionArray[i].title;
    var option1Button = document.createElement("button");
    var option2Button = document.createElement("button");
    var option3Button = document.createElement("button");
    var option4Button = document.createElement("button");
    option1Button.textContent = questionArray[i].option1;
    option2Button.textContent = questionArray[i].option2;
    option3Button.textContent = questionArray[i].option3;
    option4Button.textContent = questionArray[i].option4;
    mainEl.appendChild(option1Button);
    mainEl.appendChild(option2Button);
    mainEl.appendChild(option3Button);
    mainEl.appendChild(option4Button);

    option1Button.addEventListener("click", console.log("This is option1"));
    option2Button.addEventListener("click", console.log("This is option2"));
    option3Button.addEventListener("click", console.log("This is option3"));
    option4Button.addEventListener("click", console.log("This is option4"));


    // if (response == questionArray[i].answer) {
    //   alert("Correct");
    // } else {
    //   alert("WRONG");
    // }
  }
}


// Event listeners
beginEl.addEventListener("click", startQuiz, {});

leaderboardEl.addEventListener("click", function () {
  console.log("leaderboard");
});

retireEl.addEventListener("click", function () {
  close();
});
