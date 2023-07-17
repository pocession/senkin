// Select elements
const data = [
  [["乘", "成"], "龍", "快", "婿"],
  [["望", "忘"], "子", "成", "龍"],
  [["言", "鹽"], "多", "必", "失"],
];

const buttonNext = document.querySelector(".button-next");
const buttonReload = document.querySelector(".button-reload");
const testInputs = document.querySelectorAll(".flex-container-test-input");
const testOthers = document.querySelectorAll(".flex-container-test-other");
const problem = data[Math.floor(Math.random() * data.length)];
const correctAnswer = problem[0][0];
const scoreText = document.querySelector(".score");
var isNewGame = localStorage.getItem("isNewGame");
let score, result;
const init = function initiate() {
  score = 0;
  result = 0;

  function generateQuestion(problem) {
    for (i = 0; i < testInputs.length; i++) {
      testInputs[i].textContent = problem[0][i];
    }

    for (i = 0; i < testOthers.length; i++) {
      testOthers[i].textContent = problem[i + 1];
    }
  }

  generateQuestion(problem);
  console.log(`At the initiation: ${isNewGame}`);
};

const play = function playGame() {
  console.log(`Game continues, score: ${score}, result: ${result}.`);
  score = Number(localStorage.getItem("score"));
  result = Number(localStorage.getItem("result"));
  scoreText.textContent = localStorage.getItem("score");

  function generateQuestion(problem) {
    for (i = 0; i < testInputs.length; i++) {
      testInputs[i].textContent = problem[0][i];
    }

    for (i = 0; i < testOthers.length; i++) {
      testOthers[i].textContent = problem[i + 1];
    }
  }
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
  The funciton 'updateScore' updates the score.
  */

function checked(e) {
  e = e;
  Inputs = testInputs;
  var target = e.target;

  // this loop changes the bg color of both inputs to white when clicked.
  for (var i = 0; i < Inputs.length; i++) {
    var item = Inputs[i];
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

function revealAnswer(item) {
  if (item.dataset.answer === "1") {
    console.log("right answer");
    item.style.backgroundColor = "green";
  } else if (item.dataset.answer === "-1") {
    console.log("wrong answer");
    item.style.backgroundColor = "red";
  } else {
    return;
  }
}

function refresh() {
  location.reload();
  console.log("reloaded!");
}

function saveScore(score, result, isNewGame) {
  console.log(`Save score: ${score}, result:${result}`);
  localStorage.setItem("score", score);
  localStorage.setItem("result", result);
  localStorage.setItem("isNewGame", isNewGame);
}

function updateScore(e) {
  testInputs.forEach((item) => revealAnswer(item));
  score += result;
  scoreText.textContent = score.toString();
  isNewGame = false;
  saveScore(score, result, isNewGame);
  setTimeout(refresh, 3000);
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
  const timeUpdated = 46 - timeLapsed;
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
  drawText("45");
  isCount = true;

  const startTimeSec = getTotalSecond();
  cleanText();
  drawCircle();

  timer = setInterval(updateText, 1000, startTimeSec);
  isCount = false;
});
