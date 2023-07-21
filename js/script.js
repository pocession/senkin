// Select elements

// Problem set
// Please check problemset/readme.md for more details about how I generate this problem set
const data = [
  ["裹", ["足", "崒", 0], "不", "前"],
  ["退", "避", ["鬖", "三", 1], "舍"],
  [["冬", "東", 1], "施", "效", "顰"],
  [["故", "痼", 0], "步", "自", "封"],
  ["班", "門", "弄", ["斧", "莆", 0]],
  ["忍", ["鄏", "辱", 1], "負", "重"],
  ["手", "舞", "足", ["稻", "蹈", 1]],
  ["奇", "貨", "可", ["居", "車", 0]],
  ["負", "荊", ["廎", "請", 1], "罪"],
  [["屺", "杞", 1], "人", "憂", "天"],
  ["投", "鼠", "忌", ["蟿", "器", 1]],
  [["前", "柑", 0], "倨", "後", "恭"],
  ["水", ["娠", "深", 1], "火", "熱"],
  ["先", "發", ["制", "制", 0], "人"],
  ["揠", ["苗", "苗", 1], "助", "長"],
  ["虎", "頭", ["折", "蛇", 1], "尾"],
  ["不", "共", ["戴", "蝳", 0], "天"],
  ["芒", "刺", ["在", "饡", 0], "背"],
  ["杯", "水", ["蛼", "車", 1], "薪"],
  ["噤", ["若", "若", 0], "寒", "蟬"],
  ["目", "不", ["氏", "識", 1], "丁"],
  ["舉", "一", "反", ["三", "參", 0]],
  ["出", "類", ["跋", "拔", 1], "萃"],
  ["一", "竅", ["蔀", "不", 1], "通"],
  ["舉", "案", ["淇", "齊", 1], "眉"],
  ["水", "滴", "石", ["穿", "穿", 1]],
  [["兄", "胸", 1], "有", "成", "竹"],
  ["一", "毛", "不", ["鼥", "拔", 1]],
  ["殺", ["莘", "身", 1], "成", "仁"],
  [["艸", "草", 1], "菅", "人", "命"],
  ["不", "共", "戴", ["天", "酟", 0]],
  ["一", "鳴", "驚", ["人", "人", 1]],
  ["抱", "薪", "救", ["伙", "火", 1]],
  ["入", ["木", "幕", 0], "三", "分"],
  [["荷", "河", 1], "東", "獅", "吼"],
  ["強", "弩", "之", ["末", "沫", 0]],
  ["功", "虧", "一", ["瞶", "簣", 1]],
  ["群", ["策", "畟", 0], "群", "力"],
  ["大", "義", "滅", ["欽", "親", 1]],
  [["燃", "然", 0], "眉", "之", "急"],
  [["水", "水", 0], "落", "石", "出"],
  [["忷", "胸", 1], "有", "成", "竹"],
  ["忍", ["辱", "溽", 0], "負", "重"],
  ["莫", "逆", "之", ["鷦", "交", 1]],
  ["水", "深", "火", ["熱", "熱", 1]],
  ["一", "丘", ["之", "胝", 0], "貉"],
  ["言", "不", ["魷", "由", 1], "衷"],
  ["望", "梅", ["止", "抵", 0], "渴"],
  [["壹", "一", 1], "丘", "之", "貉"],
  [["愛", "曖", 0], "屋", "及", "烏"],
  ["買", "櫝", "還", ["誅", "珠", 1]],
  ["見", "異", "思", ["簽", "遷", 1]],
  ["投", ["筆", "佊", 0], "從", "戎"],
  ["指", "鹿", "為", ["傌", "馬", 1]],
  ["一", "暴", "十", ["寒", "韓", 0]],
  ["瓜", "田", ["李", "李", 1], "下"],
  ["不", "學", "無", ["術", "裋", 0]],
  [["水", "水", 0], "深", "火", "熱"],
  [["鋃", "狼", 1], "狽", "為", "奸"],
  ["名", "不", "虛", ["輲", "傳", 1]],
  ["孤", ["掌", "長", 0], "難", "鳴"],
  [["因", "駰", 0], "噎", "廢", "食"],
  [["狡", "矯", 1], "枉", "過", "正"],
  [["借", "誡", 0], "花", "獻", "佛"],
  ["一", "鼓", "作", ["緝", "氣", 1]],
  ["手", ["憮", "舞", 1], "足", "蹈"],
  [["黟", "一", 1], "鼓", "作", "氣"],
  ["故", "步", ["自", "孳", 0], "封"],
  ["未", ["與", "雨", 1], "綢", "繆"],
  [["功", "躬", 0], "虧", "一", "簣"],
  ["一", "網", ["打", "打", 0], "盡"],
  [["紼", "扶", 1], "搖", "直", "上"],
  [["闇", "按", 1], "圖", "索", "驥"],
  ["因", "勢", ["立", "利", 1], "導"],
  [["開", "揩", 0], "門", "見", "山"],
  ["世", "外", "桃", ["源", "轅", 0]],
  ["孤", "陋", "寡", ["聞", "閿", 0]],
  ["因", "勢", ["利", "歷", 0], "導"],
  ["洛", ["陽", "洋", 0], "紙", "貴"],
  [["不", "捕", 0], "可", "救", "藥"],
  ["緣", "木", "求", ["魚", "娛", 0]],
  ["如", "火", ["如", "襦", 0], "荼"],
  ["故", "步", ["牸", "自", 1], "封"],
  [["土", "釷", 0], "崩", "瓦", "解"],
  ["故", ["步", "步", 1], "自", "封"],
  ["前", "倨", ["逅", "後", 1], "恭"],
  [["佈", "不", 1], "共", "戴", "天"],
  [["揠", "錏", 0], "苗", "助", "長"],
  ["滿", "腹", ["經", "耕", 0], "綸"],
  ["水", ["滴", "菂", 0], "石", "穿"],
  ["名", ["簿", "不", 1], "虛", "傳"],
  ["耳", "濡", ["目", "牧", 0], "染"],
  ["名", "落", ["孫", "搎", 0], "山"],
  [["止", "趾", 1], "高", "氣", "揚"],
  ["燃", "眉", "之", ["急", "即", 0]],
  ["開", ["門", "亹", 0], "見", "山"],
  [["弄", "弄", 1], "巧", "成", "拙"],
  [["扳", "攀", 1], "龍", "附", "鳳"],
  ["膾", "炙", ["任", "人", 1], "口"],
  ["瓜", "田", "李", ["下", "下", 1]],
  ["賓", "至", ["帤", "如", 1], "歸"],
  ["夜", "郎", ["自", "髊", 0], "大"],
  ["如", "坐", "針", ["氈", "邅", 0]],
  ["曲", "突", ["洒", "徙", 1], "薪"],
  ["居", "安", "思", ["違", "危", 1]],
  ["信", ["口", "口", 1], "雌", "黃"],
  ["入", "木", ["参", "三", 1], "分"],
  [["濫", "爁", 0], "竽", "充", "數"],
  ["夜", "郎", "自", ["大", "大", 1]],
  ["越", "俎", "代", ["庖", "咆", 0]],
  ["病", "入", "膏", ["慌", "肓", 1]],
  [["百", "伯", 0], "折", "不", "撓"],
  ["曲", ["塗", "突", 1], "徙", "薪"],
  [["偃", "晻", 0], "旗", "息", "鼓"],
  ["青", "出", ["於", "睮", 0], "藍"],
  ["無", "地", ["自", "牸", 0], "容"],
  [["鈽", "不", 1], "脛", "而", "走"],
  ["開", "門", "見", ["山", "髟", 0]],
  [["囫", "搰", 0], "圇", "吞", "棗"],
  ["笑", "裡", "藏", ["刀", "氘", 0]],
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
