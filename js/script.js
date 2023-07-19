// Select elements
const data = [
  [["乘", "成"], "龍", "快", "婿"],
  ["望", "子", ["成", "陳"], "龍"],
  ["言", "多", "必", ["失", "濕"]],
];

const buttonNext = document.querySelector(".button-next");
const buttonReload = document.querySelector(".button-reload");
const testOthers = document.querySelectorAll(".flex-container-test-other");
const problem = data[Math.floor(Math.random() * data.length)];
const correctAnswer = problem[0][0];
const scoreText = document.querySelector(".score");
var isNewGame = localStorage.getItem("isNewGame");
const countDownSec = 5 * data.length + 1;

/*
I try not to call a function inside a function. 
But generateQuestion() is an exception. 
This function itself is too long and complicated, it's better to wrap as an independent function
*/
function generateQuestion(problem) {
  for (i = 0; i < problem.length; i++) {
    if (problem[i].length === 2) {
      console.log(`problem words: ${problem[i]}`);
      // create a new div element
      const newDiv = document.createElement("div");

      // add class
      newDiv.className = "letters flex-container-test";

      // add data attribute
      newDiv.dataset.letter = "65";

      // add the newly created element and its content into the DOM
      var currentDiv = document.getElementById("problem-set");
      currentDiv.appendChild(newDiv);

      // add words to be chosen in the div element
      for (j = 0; j < problem[i].length; j++) {
        const newDivChild = document.createElement("div");
        newDivChild.className = "letter flex-container-test-input";
        newDivChild.dataset.letter = "65";
        newDivChild.dataset.answer = "";

        // set other attribute
        tabIndex = j + 1;
        newDivChild.setAttribute("tabindex", tabIndex);
        newDivChild.setAttribute("onclick", "checked(event)");

        // add textContent
        newDivChild.textContent = problem[i][j];

        var currentDiv = document.querySelector(".flex-container-test");
        currentDiv.appendChild(newDivChild);
      }
    } else {
      // create a new div element
      const newDiv = document.createElement("div");

      // add class
      newDiv.className = "letter flex-container-test-other";

      // add data attribute
      newDiv.dataset.letter = "65";

      // add text
      newDiv.textContent = problem[i];

      // add the newly created element and its content into the DOM
      let currentDiv = document.getElementById("problem-set");
      currentDiv.appendChild(newDiv);
      console.log(newDiv.textContent);
    }
  }
}

let score, result;
const init = function initiate() {
  score = 0;
  result = 0;

  generateQuestion(problem);
  console.log(`At the initiation: ${isNewGame}`);
};

const play = function playGame() {
  console.log(`Game continues, score: ${score}, result: ${result}.`);
  score = Number(localStorage.getItem("score"));
  result = Number(localStorage.getItem("result"));
  scoreText.textContent = localStorage.getItem("score");

  generateQuestion(problem);
  console.log(`During the play: ${isNewGame}`);
};

if (!isNewGame) {
  init();
} else {
  play();
}

// play the game and check the answer
/*
The function 'checked'  compares the user's choice with the correct answer and return the result.
The function 'revealAnswer' changes the input color according to the result.
The function 'updateScore' changes the input color according to the result as well as updating the score.
*/

function checked(e) {
  /* 
  testInputs is now dynamically generated.
  So it needs to ba declared after it is generated
  */

  e = e;
  const testInputs = document.querySelectorAll(".flex-container-test-input");
  var target = e.target;

  // this loop changes the bg color of both inputs to white when clicked.
  for (var i = 0; i < testInputs.length; i++) {
    var item = testInputs[i];
    item.style.backgroundColor = "white";
  }
  target.style.backgroundColor = "#0eb2ff";
  if (target.textContent.trim() === correctAnswer) {
    target.dataset.answer = 1;
    return (result = 1);
  } else {
    target.dataset.answer = -1;
    return (result = -1);
  }
}

function updateScore(e) {
  const testInputs = document.querySelectorAll(".flex-container-test-input");
  testInputs.forEach((item) => {
    if (item.dataset.answer === "1") {
      console.log("right answer");
      item.style.backgroundColor = "green";
    } else if (item.dataset.answer === "-1") {
      console.log("wrong answer");
      item.style.backgroundColor = "red";
    } else {
      return;
    }
  });
  score += result;
  scoreText.textContent = score.toString();
  isNewGame = false;
  localStorage.setItem("score", score);
  localStorage.setItem("result", result);
  localStorage.setItem("isNewGame", isNewGame);
  setTimeout(() => {
    location.reload();
    console.log("reloaded!");
  }, 3000);
}

buttonNext.addEventListener("click", updateScore);

// this function reload the game and clean all the local storages
function reload() {
  localStorage.clear();
  location.reload();
  console.log("reloaded and clean all the local storage!!");
}
buttonReload.addEventListener("click", reload);

// functions for timer
function drawCircle() {
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.arc(95, 50, 40, 0, 2 * Math.PI);
  ctx.stroke();
}

function drawText(text) {
  var ctx = c.getContext("2d");
  ctx.font = c.height / 4 + "px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "rgb(0, 0, 0)";

  ctx.fillText(text, 95, 50);
}

function cleanText() {
  var ctx = c.getContext("2d");
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.clearRect(0, 0, c.width, c.height);
}

function getTotalSecond() {
  const Time = new Date();
  const TimeTotalSec =
    Time.getHours() * 3600 + Time.getMinutes() * 60 + Time.getSeconds();
  return TimeTotalSec;
}

function updateText(startTimeSec) {
  cleanText();
  drawCircle();

  const currentTimeSec = getTotalSecond();

  const timeLapsed = currentTimeSec - startTimeSec;
  const timeUpdated = countDownSec - timeLapsed;
  if (timeUpdated === 0) {
    clearInterval(timer);
    console.log("stop!");
  }

  var ctx = c.getContext("2d");
  ctx.font = c.height / 4 + "px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fillText(timeUpdated, 95, 50);
}

const c = document.getElementById("canvas");
let isCount = false;

drawCircle();
c.addEventListener("mousedown", (e) => {
  if (isCount) return; // stop count down if it is already started
  drawText(countDownSec);
  isCount = true;

  const startTimeSec = getTotalSecond();
  cleanText();
  drawCircle();

  timer = setInterval(updateText, 1000, startTimeSec);
  isCount = false;
});
