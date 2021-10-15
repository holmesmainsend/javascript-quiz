// DOM values
const beginEl = document.querySelector(".begin");
const leaderboardEl = document.querySelector(".leaderboard");
const retireEl = document.querySelector(".retire");
const mainEl = document.querySelector("main");
const titlerEl = document.querySelector(".titler");
var availableQuestions = [];
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
      }
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

    // // 1
    // titlerEl.innerText = question1.title;

    // var option1Button = document.createElement("button");
    // option1Button.textContent = question1.option1;
    // mainEl.appendChild(option1Button);

    // var option2Button = document.createElement("button");
    // option2Button.textContent = question1.option2;
    // mainEl.appendChild(option2Button);


    // var option3Button = document.createElement("button");
    // option3Button.textContent = question1.option3;
    // mainEl.appendChild(option3Button);

    // var correctButton = document.createElement("button");
    // correctButton.textContent = question1.correct;
    // mainEl.appendChild(correctButton);
    
    // // 2
    // titlerEl.innerText = question2.title;

    // var option1Button = document.createElement("button");
    // option1Button.textContent = question2.option1;
    // mainEl.appendChild(option1Button);

    // var option2Button = document.createElement("button");
    // option2Button.textContent = question2.option2;
    // mainEl.appendChild(option2Button);


    // var option3Button = document.createElement("button");
    // option3Button.textContent = question2.option3;
    // mainEl.appendChild(option3Button);

    // var correctButton = document.createElement("button");
    // correctButton.textContent = question2.correct;
    // mainEl.appendChild(correctButton);

    // // 3
    // titlerEl.innerText = question3.title;

    // var option1Button = document.createElement("button");
    // option1Button.textContent = question3.option1;
    // mainEl.appendChild(option1Button);

    // var option2Button = document.createElement("button");
    // option2Button.textContent = question3.option2;
    // mainEl.appendChild(option2Button);


    // var option3Button = document.createElement("button");
    // option3Button.textContent = question3.option3;
    // mainEl.appendChild(option3Button);

    // var correctButton = document.createElement("button");
    // correctButton.textContent = question3.correct;
    // mainEl.appendChild(correctButton);

    // // 4
    // titlerEl.innerText = question4.title;

    // var option1Button = document.createElement("button");
    // option1Button.textContent = question4.option1;
    // mainEl.appendChild(option1Button);

    // var option2Button = document.createElement("button");
    // option2Button.textContent = question4.option2;
    // mainEl.appendChild(option2Button);


    // var option3Button = document.createElement("button");
    // option3Button.textContent = question4.option3;
    // mainEl.appendChild(option3Button);

    // var correctButton = document.createElement("button");
    // correctButton.textContent = question4.correct;
    // mainEl.appendChild(correctButton);

    // // 5
    // titlerEl.innerText = question1.title;

    // var option1Button = document.createElement("button");
    // option1Button.textContent = question5.option1;
    // mainEl.appendChild(option1Button);

    // var option2Button = document.createElement("button");
    // option2Button.textContent = question5.option2;
    // mainEl.appendChild(option2Button);


    // var option3Button = document.createElement("button");
    // option3Button.textContent = question5.option3;
    // mainEl.appendChild(option3Button);

    // var correctButton = document.createElement("button");
    // correctButton.textContent = question5.correct;
    // mainEl.appendChild(correctButton);

    // // 6
    // titlerEl.innerText = question6.title;

    // var option1Button = document.createElement("button");
    // option1Button.textContent = question6.option1;
    // mainEl.appendChild(option1Button);

    // var option2Button = document.createElement("button");
    // option2Button.textContent = question6.option2;
    // mainEl.appendChild(option2Button);


    // var option3Button = document.createElement("button");
    // option3Button.textContent = question6.option3;
    // mainEl.appendChild(option3Button);

    // var correctButton = document.createElement("button");
    // correctButton.textContent = question6.correct;
    // mainEl.appendChild(correctButton);

    // // 7
    // titlerEl.innerText = question1.title;

    // var option1Button = document.createElement("button");
    // option1Button.textContent = question7.option1;
    // mainEl.appendChild(option1Button);

    // var option2Button = document.createElement("button");
    // option2Button.textContent = question7.option2;
    // mainEl.appendChild(option2Button);


    // var option3Button = document.createElement("button");
    // option3Button.textContent = question7.option3;
    // mainEl.appendChild(option3Button);

    // var correctButton = document.createElement("button");
    // correctButton.textContent = question7.correct;
    // mainEl.appendChild(correctButton);

    // // 8
    // titlerEl.innerText = question8.title;

    // var option1Button = document.createElement("button");
    // option1Button.textContent = question8.option1;
    // mainEl.appendChild(option1Button);

    // var option2Button = document.createElement("button");
    // option2Button.textContent = question8.option2;
    // mainEl.appendChild(option2Button);


    // var option3Button = document.createElement("button");
    // option3Button.textContent = question8.option3;
    // mainEl.appendChild(option3Button);

    // var correctButton = document.createElement("button");
    // correctButton.textContent = question8.correct;
    // mainEl.appendChild(correctButton);

    // // 9
    // titlerEl.innerText = question9.title;

    // var option1Button = document.createElement("button");
    // option1Button.textContent = question9.option1;
    // mainEl.appendChild(option1Button);

    // var option2Button = document.createElement("button");
    // option2Button.textContent = question9.option2;
    // mainEl.appendChild(option2Button);


    // var option3Button = document.createElement("button");
    // option3Button.textContent = question9.option3;
    // mainEl.appendChild(option3Button);

    // var correctButton = document.createElement("button");
    // correctButton.textContent = question9.correct;
    // mainEl.appendChild(correctButton);

    // // 10
    // titlerEl.innerText = question10.title;

    // var option1Button = document.createElement("button");
    // option1Button.textContent = question10.option1;
    // mainEl.appendChild(option1Button);

    // var option2Button = document.createElement("button");
    // option2Button.textContent = question10.option2;
    // mainEl.appendChild(option2Button);


    // var option3Button = document.createElement("button");
    // option3Button.textContent = question10.option3;
    // mainEl.appendChild(option3Button);

    // var correctButton = document.createElement("button");
    // correctButton.textContent = question10.correct;
    // mainEl.appendChild(correctButton);

// Event listeners
beginEl.addEventListener("click", countdown, {});
beginEl.addEventListener("click", startQuiz, {});
beginEl.addEventListener("click", beginRemover, {});

leaderboardEl.addEventListener("click", function () {
  console.log("leaderboard");
});

retireEl.addEventListener("click", function () {
  close();
});
