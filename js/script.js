// Select elements

// Problem set
// Please check problemset/readme.md for more details about how I generate this problem set
const data = [
  [["病", "并", 0], "入", "膏", "肓"],
  ["閉", "門", ["造", "燥", 0], "車"],
  ["風", ["陞", "聲", 1], "鶴", "唳"],
  ["不", "恥", ["下", "諕", 0], "問"],
  ["對", "牛", ["鉭", "彈", 1], "琴"],
  [["籥", "越", 1], "俎", "代", "庖"],
  ["莫", "逆", ["衹", "之", 1], "交"],
  ["天", "經", ["棣", "地", 1], "義"],
  ["如", "魚", ["德", "得", 1], "水"],
  ["河", "東", "獅", ["吼", "犼", 0]],
  ["吳", "牛", ["喘", "踳", 0], "月"],
  ["群", ["策", "惻", 0], "群", "力"],
  [["一", "黟", 0], "丘", "之", "貉"],
  ["風", "聲", ["黑", "鶴", 1], "唳"],
  [["餾", "流", 1], "芳", "百", "世"],
  ["乘", ["風", "鋒", 0], "破", "浪"],
  ["一", "毛", "不", ["拔", "胈", 0]],
  ["空", "中", ["髏", "樓", 1], "閣"],
  ["故", "步", "自", ["蜂", "封", 1]],
  ["閉", "門", ["造", "氉", 0], "車"],
  ["言", "不", ["遊", "由", 1], "衷"],
  [["龠", "樂", 1], "不", "思", "蜀"],
  ["胸", "有", ["塍", "成", 1], "竹"],
  ["得", "心", ["英", "應", 1], "手"],
  [["揹", "杯", 1], "弓", "蛇", "影"],
  ["胸", "有", ["脭", "成", 1], "竹"],
  ["口", "若", "懸", ["蓋", "河", 1]],
  ["狼", "狽", ["為", "唯", 0], "奸"],
  ["無", ["踶", "地", 1], "自", "容"],
  ["不", "學", ["無", "吾", 0], "術"],
  ["吹", "毛", "求", ["雌", "疵", 1]],
  [["雪", "鱈", 0], "中", "送", "炭"],
  [["馱", "咄", 1], "咄", "逼", "人"],
  ["滄", "海", ["桑", "喪", 0], "田"],
  [["得", "德", 0], "心", "應", "手"],
  ["流", "芳", ["捭", "百", 1], "世"],
  ["螳", ["臂", "畢", 0], "當", "車"],
  ["濫", ["竽", "轝", 0], "充", "數"],
  ["紙", "上", ["談", "痰", 0], "兵"],
  ["朝", "三", "暮", ["笥", "四", 1]],
  ["一", ["諡", "視", 1], "同", "仁"],
  ["攀", ["龍", "瓏", 0], "附", "鳳"],
  [["箙", "扶", 1], "搖", "直", "上"],
  ["一", "敗", ["塗", "嵞", 0], "地"],
  ["指", ["簏", "鹿", 1], "為", "馬"],
  ["一", "敗", ["腯", "塗", 1], "地"],
  [["一", "黳", 0], "敗", "塗", "地"],
  ["指", "鹿", "為", ["馬", "傌", 0]],
  [["氟", "扶", 1], "搖", "直", "上"],
  ["敝", "帚", ["自", "髊", 0], "珍"],
  ["吹", "毛", ["俅", "求", 1], "疵"],
  ["一", "鼓", ["作", "做", 0], "氣"],
  ["打", "草", ["荊", "驚", 1], "蛇"],
  ["孤", "陋", ["寡", "剮", 0], "聞"],
  ["竭", ["襗", "澤", 1], "而", "漁"],
  ["老", ["馬", "瑪", 0], "識", "途"],
  ["明", ["目", "牧", 0], "張", "膽"],
  ["青", "出", "於", ["鑭", "藍", 1]],
  ["炙", ["掱", "手", 1], "可", "熱"],
  ["不", "學", "無", ["術", "翛", 0]],
  ["飲", "鴆", ["止", "指", 0], "渴"],
  ["江", "郎", ["財", "才", 1], "盡"],
  ["負", "荊", "請", ["撮", "罪", 1]],
  ["先", "發", ["制", "遲", 0], "人"],
  ["作", "法", ["眥", "自", 1], "斃"],
  ["攀", ["龍", "櫳", 0], "附", "鳳"],
  [["同", "痛", 1], "心", "疾", "首"],
  ["畏", "首", ["餵", "畏", 1], "尾"],
  [["寎", "病", 1], "入", "膏", "肓"],
  ["死", "灰", ["復", "偩", 0], "燃"],
  ["開", "門", ["建", "見", 1], "山"],
  ["因", "噎", "廢", ["提", "食", 1]],
  ["孤", ["注", "芧", 0], "一", "擲"],
  ["推", "心", ["庢", "置", 1], "腹"],
  ["按", ["凸", "圖", 1], "索", "驥"],
  ["一", ["茆", "毛", 1], "不", "拔"],
  ["易", "如", "反", ["漲", "掌", 1]],
  ["目", ["布", "不", 1], "識", "丁"],
  [["齣", "出", 1], "奇", "制", "勝"],
  ["先", ["發", "瞂", 0], "制", "人"],
  ["不", ["敬", "脛", 1], "而", "走"],
  [["一", "毉", 0], "鼓", "作", "氣"],
  [["請", "青", 1], "出", "於", "藍"],
  ["愛", ["圬", "屋", 1], "及", "烏"],
  ["四", "面", ["處", "楚", 1], "歌"],
  ["水", "滴", ["拾", "石", 1], "穿"],
  [["兩", "裲", 0], "袖", "清", "風"],
  ["莫", "逆", "之", ["澆", "交", 1]],
  [["緉", "兩", 1], "袖", "清", "風"],
  ["痛", "心", ["疾", "丮", 0], "首"],
  ["曲", "突", ["徙", "憙", 0], "薪"],
  ["老", ["螞", "馬", 1], "識", "途"],
  ["扶", ["搖", "軺", 0], "直", "上"],
  ["一", "暴", "十", ["寒", "虷", 0]],
  ["飲", "鴆", "止", ["渴", "坷", 0]],
  ["偃", ["歧", "旗", 1], "息", "鼓"],
  ["濫", "竽", "充", ["疏", "數", 1]],
  ["投", ["薯", "鼠", 1], "忌", "器"],
  ["刻", ["舟", "喌", 0], "求", "劍"],
  ["南", "柯", ["一", "瑿", 0], "夢"],
  ["門", "可", "羅", ["闋", "雀", 1]],
  ["水", "落", ["石", "拾", 0], "出"],
  ["一", "籌", ["寞", "莫", 1], "展"],
  ["投", "筆", ["從", "叢", 0], "戎"],
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
  if (answeredQuestionNum === 10) {
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
