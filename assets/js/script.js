// DOM values
const beginEl = document.querySelector(".begin");
const leaderboardEl = document.querySelector(".leaderboard");
const retireEl = document.querySelector(".retire");

// Event listeners
beginEl.addEventListener("click", function() {
    console.log("Begin");
});

leaderboardEl.addEventListener("click", function() {
    console.log("Leaderboard");
});

retireEl.addEventListener("click", function () {
    console.log("Retire");
});
