// Select elements
const data = [
  [["乘", "成", 0], "龍", "快", "婿"],
  ["望", "子", ["陳", "成", 1], "龍"],
  ["言", "多", "必", ["濕", "失", 1]],
  ["萬", ["眾", "重", 0], "一", "心"],
];

const buttonNext = document.querySelector(".button-next");
const buttonReload = document.querySelector(".button-reload");
const testOthers = document.querySelectorAll(".flex-container-test-other");
const problem = data[Math.floor(Math.random() * data.length)];
const scoreText = document.querySelector(".score");
var isNewGame = localStorage.getItem("isNewGame");
const finishDiv = document.querySelector(".finish");

function generateCorrectAnswer(problem) {
  for (i = 0; i < problem.length; i++) {
    if (problem[i].length === 3) {
      const correctAnswerIndex = Number(problem[i][2]);
      const correctAnswer = problem[i][correctAnswerIndex];
      return correctAnswer;
    }
  }
}

const correctAnswer = generateCorrectAnswer(problem);

// functions for timer
function timer() {
  console.log("timer start!");

  // set count down seconds
  countdownTimeSec = 5 + 1;

  // get current time (in the format of seconds)
  var Time = new Date();
  const startTimeSec =
    Time.getHours() * 3600 + Time.getMinutes() * 60 + Time.getSeconds();

  // count down and update text
  timer = setInterval(
    function (startTimeSec) {
      var Time = new Date();
      const currentTimeSec =
        Time.getHours() * 3600 + Time.getMinutes() * 60 + Time.getSeconds();
      const lapsedTimeSec = currentTimeSec - startTimeSec;
      const updatedTimeSec = countdownTimeSec - lapsedTimeSec;

      // draw timer
      // draw circle
      const canvas = document.getElementById("canvas");
      var ctx = canvas.getContext("2d");
      ctx.beginPath();
      ctx.arc(95, 50, 40, 0, 2 * Math.PI);
      ctx.stroke();

      // clean the timer
      var ctx = canvas.getContext("2d");
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // update the secondes
      ctx.font = canvas.height / 4 + "px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fillText(updatedTimeSec, 95, 50);

      // draw the circle again
      var ctx = canvas.getContext("2d");
      ctx.beginPath();
      ctx.arc(95, 50, 40, 0, 2 * Math.PI);
      ctx.stroke();
      if (updatedTimeSec === 0 || answeredQuestionNum === data.length) {
        localStorage.clear();
        clearInterval(timer);
        finishDiv.textContent = "It's finished!";
      }
      console.log(updatedTimeSec);
      return (isNewGame = false);
    },
    1000,
    startTimeSec
  );
}

const updatedTimeSec = timer();

/*
I try not to call a function inside a function. 
But generateQuestion() is an exception. 
This function itself is too long and complicated, it's better to wrap as an independent function
*/
function generateQuestion(problem) {
  for (i = 0; i < problem.length; i++) {
    if (problem[i].length === 3) {
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
      for (j = 0; j < problem[i].length - 1; j++) {
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

let score, result, answeredQuestionNum;
const init = function initiate() {
  score = 0;
  result = 0;
  answeredQuestionNum = 0;
  finishDiv.textContent = "";

  generateQuestion(problem);
  console.log(`At the initiation: ${isNewGame}`);
};

const play = function playGame() {
  console.log(
    `Game continues, score: ${score}, result: ${result}, how many questions answered: ${answeredQuestionNum}.`
  );
  score = Number(localStorage.getItem("score"));
  result = Number(localStorage.getItem("result"));
  answeredQuestionNum = Number(localStorage.getItem("answeredQuestionNum"));
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
  answeredQuestionNum += 1;
  localStorage.setItem("score", score);
  localStorage.setItem("result", result);
  localStorage.setItem("isNewGame", isNewGame);
  localStorage.setItem("answeredQuestionNum", answeredQuestionNum);
  if (answeredQuestionNum === data.length) {
    localStorage.clear();
    finishDiv.textContent = "It's finished!!";
  } else {
    setTimeout(() => {
      location.reload();
      console.log("reloaded!");
    }, 500);
  }
}

buttonNext.addEventListener("click", updateScore);

// this function reload the game and clean all the local storages
function reload() {
  localStorage.clear();
  location.reload();
  finishDiv.textContent = "";
  console.log("reloaded and clean all the local storage!!");
}
buttonReload.addEventListener("click", reload);
