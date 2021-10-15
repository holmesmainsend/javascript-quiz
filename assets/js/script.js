// DOM values
const beginEl = document.querySelector(".begin");
const leaderboardEl = document.querySelector(".leaderboard");
const retireEl = document.querySelector(".retire");
var timerDisplayEl = document.querySelector(".timerDisplay");
var timerValue = 10;

// Event listeners
beginEl.addEventListener("click", countdown, {});


leaderboardEl.addEventListener("click", function() {
    console.log("leaderboard");
});

retireEl.addEventListener("click", function () {
    close();
});

// Functions
function countdown() {
    setInterval(tickTock, 1000);
};

function tickTock() {
    if (timerValue > 0) {
    timerValue--;
    timerDisplayEl.innerHTML = timerValue;
    } else (timerValue.innerText = "Game Over");
};