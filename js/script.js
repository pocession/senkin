// Select elements

// Problem set
// Please check problemset/readme.md for more details about how I generate this problem set
const data = [
  [["扉", "飛", 1], "揚", "跋", "扈"],
  ["洞", ["天", "酟", 0], "福", "地"],
  ["嗟", ["來", "郲", 0], "之", "食"],
  ["成", ["逐", "竹", 1], "在", "胸"],
  [["露", "漏", 1], "網", "之", "魚"],
  ["臨", "陣", "磨", ["搶", "槍", 1]],
  ["棋", "逢", "敵", ["掱", "手", 1]],
  ["情", "不", ["自", "字", 0], "禁"],
  ["大", "公", ["毋", "無", 1], "私"],
  [["莠", "有", 1], "始", "有", "終"],
  [["鬼", "氿", 0], "哭", "神", "號"],
  ["一", ["舠", "刀", 1], "兩", "斷"],
  ["先", "發", "制", ["人", "儿", 0]],
  ["轟", "轟", ["鬣", "烈", 1], "烈"],
  [["鮑", "抱", 1], "薪", "救", "火"],
  ["標", "新", "立", ["泆", "異", 1]],
  ["無", "所", ["事", "簭", 0], "事"],
  ["張", "牙", ["舞", "伍", 0], "爪"],
  ["比", "比", "皆", ["徥", "是", 1]],
  ["時", "來", "運", ["轉", "竱", 0]],
  [["硎", "行", 1], "將", "就", "木"],
  ["一", ["字", "髊", 0], "千", "金"],
  ["不", ["盒", "合", 1], "時", "宜"],
  ["禮", "尚", ["枉", "往", 1], "來"],
  ["談", ["虎", "滸", 0], "色", "變"],
  ["瞠", ["穆", "目", 1], "結", "舌"],
  [["劈", "披", 1], "星", "戴", "月"],
  ["順", ["守", "手", 1], "牽", "羊"],
  ["仗", "義", ["執", "稙", 0], "言"],
  ["嘔", "心", ["痢", "瀝", 1], "血"],
  ["同", "仇", "敵", ["愾", "__", 0]],
  [["血", "蟹", 0], "海", "深", "仇"],
  ["夫", "唱", ["付", "婦", 1], "隨"],
  [["川", "氚", 0], "流", "不", "息"],
  ["倒", ["持", "尺", 0], "泰", "阿"],
  [["勇", "俑", 0], "往", "直", "前"],
  ["夜", "長", "夢", ["哆", "多", 1]],
  ["電", ["侊", "光", 1], "石", "火"],
  ["全", "無", ["歆", "心", 1], "肝"],
  ["處", ["之", "卮", 0], "泰", "然"],
  ["大", "腹", ["辡", "便", 1], "便"],
  ["錦", ["上", "蠰", 0], "添", "花"],
  ["廣", "開", "言", ["穋", "路", 1]],
  ["和", ["衷", "鍾", 0], "共", "濟"],
  ["三", "心", "二", ["佾", "意", 1]],
  [["一", "黟", 0], "無", "所", "有"],
  ["順", ["手", "艏", 0], "牽", "羊"],
  [["堅", "閒", 0], "壁", "清", "野"],
  ["篳", "路", "藍", ["縷", "梠", 0]],
  ["相", ["稊", "提", 1], "並", "論"],
  ["良", ["辰", "塵", 0], "美", "景"],
  [["無", "蕪", 0], "所", "事", "事"],
  [["螂", "狼", 1], "吞", "虎", "嚥"],
  ["人", "去", "樓", ["空", "倥", 0]],
  [["飿", "咄", 1], "咄", "逼", "人"],
  ["隱", "惡", "揚", ["善", "剡", 0]],
  ["歷", "歷", "在", ["鉬", "目", 1]],
  ["管", "窺", ["哩", "蠡", 1], "測"],
  [["千", "嵌", 0], "方", "百", "計"],
  ["一", "步", ["登", "簦", 0], "天"],
  [["駷", "聳", 1], "人", "聽", "聞"],
  ["耳", "鬢", ["廝", "釃", 0], "磨"],
  [["浬", "禮", 1], "尚", "往", "來"],
  [["狹", "狎", 0], "路", "相", "逢"],
  ["舉", ["一", "銥", 0], "反", "三"],
  ["難", "能", "可", ["瞶", "貴", 1]],
  ["半", "途", "而", ["廢", "菲", 0]],
  ["罄", "竹", ["難", "楠", 0], "書"],
  [["聲", "勝", 0], "東", "擊", "西"],
  ["言", "過", ["蠐", "其", 1], "實"],
  ["柳", "暗", "花", ["瞑", "明", 1]],
  ["德", ["高", "膏", 0], "望", "重"],
  ["舟", ["中", "蔠", 0], "敵", "國"],
  ["饔", "飧", ["蔀", "不", 1], "繼"],
  ["川", "流", "不", ["襲", "息", 1]],
  ["飲", ["震", "鴆", 1], "止", "渴"],
  ["離", "心", ["離", "蘺", 0], "德"],
  [["枯", "哭", 0], "木", "逢", "春"],
  ["情", "不", ["漬", "自", 1], "禁"],
  ["河", "清", ["醢", "海", 1], "晏"],
  [["平", "洴", 0], "心", "靜", "氣"],
  ["深", "居", "簡", ["初", "出", 1]],
  ["事", "倍", "功", ["半", "魬", 0]],
  ["姍", ["姍", "笘", 0], "來", "遲"],
  [["奄", "__", 0], "奄", "一", "息"],
  ["首", "當", ["臍", "其", 1], "衝"],
  [["岩", "言", 1], "過", "其", "實"],
  ["出", ["綦", "其", 1], "不", "意"],
  ["瞬", "息", "萬", ["辡", "變", 1]],
  ["望", ["敶", "塵", 1], "莫", "及"],
  ["包", ["玀", "羅", 1], "萬", "象"],
  ["輕", "舉", ["妄", "忘", 0], "動"],
  ["血", "流", "漂", ["杵", "楚", 0]],
  ["搖", "搖", ["薁", "欲", 1], "墜"],
  [["駓", "披", 1], "沙", "揀", "金"],
  [["一", "猗", 0], "面", "之", "交"],
  ["四", ["痌", "通", 1], "八", "達"],
  ["拍", "案", "叫", ["絕", "崛", 0]],
  [["鳧", "浮", 1], "生", "若", "夢"],
  [["暴", "菢", 0], "殄", "天", "物"],
  ["民", ["院", "怨", 1], "沸", "騰"],
  ["鶉", ["衣", "禕", 0], "百", "結"],
  [["班", "斑", 0], "荊", "道", "故"],
  ["豺", ["狼", "榔", 0], "當", "道"],
  ["叱", "吒", ["風", "諷", 0], "雲"],
  ["青", ["眉", "梅", 1], "竹", "馬"],
  ["對", "牛", "彈", ["琴", "芩", 0]],
  ["瞬", "息", ["曼", "萬", 1], "變"],
  ["白", "駒", "過", ["衋", "隙", 1]],
  ["冰", "清", "玉", ["偈", "潔", 1]],
  ["心", ["驚", "荊", 0], "肉", "跳"],
  ["碩", ["裹", "果", 1], "僅", "存"],
  [["繣", "化", 1], "險", "為", "夷"],
  ["好", "逸", "惡", ["僗", "勞", 1]],
  ["草", "木", ["癤", "皆", 1], "兵"],
  ["包", "羅", ["翫", "萬", 1], "象"],
  ["貌", "合", "神", ["離", "貍", 0]],
  ["不", ["成", "澂", 0], "體", "統"],
  ["貌", "合", ["什", "神", 1], "離"],
  ["不", "可", ["思", "澌", 0], "議"],
  ["步", "人", ["后", "後", 1], "塵"],
  ["借", ["蝨", "屍", 1], "還", "魂"],
  ["立", "錐", ["榰", "之", 1], "地"],
  ["癡", "人", "說", ["夢", "盟", 0]],
  ["作", "壁", "上", ["倌", "觀", 1]],
  ["甕", ["中", "妐", 0], "捉", "鱉"],
  ["隨", ["機", "雞", 0], "應", "變"],
  [["嶒", "層", 1], "巒", "疊", "嶂"],
  ["桀", "驁", ["不", "布", 0], "馴"],
  ["文", "君", ["新", "忻", 0], "寡"],
  ["白", ["雲", "熅", 0], "蒼", "狗"],
  [["前", "柑", 0], "倨", "後", "恭"],
  ["惻", "隱", ["疧", "之", 1], "心"],
  ["朝", "發", "夕", ["跱", "至", 1]],
  ["水", ["辱", "乳", 1], "交", "融"],
  ["躍", "然", "紙", ["尚", "上", 1]],
  ["負", "荊", ["請", "頃", 0], "罪"],
  [["輔", "釜", 1], "底", "抽", "薪"],
  [["潼", "同", 1], "歸", "於", "盡"],
  [["突", "怢", 0], "如", "其", "來"],
  ["恰", "到", "好", ["處", "黜", 0]],
  ["有", "始", ["無", "郚", 0], "終"],
  ["嘖", "有", ["煩", "鐇", 0], "言"],
  ["中", "庸", "之", ["導", "道", 1]],
  ["藏", ["頭", "亠", 0], "露", "尾"],
  ["花", "街", ["罶", "柳", 1], "巷"],
  ["滿", "載", ["而", "洏", 0], "歸"],
  ["藍", ["闐", "田", 1], "生", "玉"],
  ["木", "已", "成", ["舟", "譸", 0]],
  ["彈", "冠", ["廂", "相", 1], "慶"],
  ["應", "對", "如", ["流", "鏐", 0]],
  ["百", "發", ["百", "擺", 0], "中"],
  ["膠", "柱", ["鼓", "谷", 0], "瑟"],
  [["響", "想", 1], "入", "非", "非"],
  ["親", ["衕", "痛", 1], "仇", "快"],
  ["壽", "比", "南", ["羶", "山", 1]],
  ["提", ["罡", "綱", 1], "挈", "領"],
  ["門", "庭", ["鄀", "若", 1], "市"],
  ["躍", "躍", "欲", ["徥", "試", 1]],
  [["鉤", "袧", 0], "心", "鬥", "角"],
  ["揚", ["眉", "楣", 0], "吐", "氣"],
  [["五", "甒", 0], "體", "投", "地"],
  ["勢", "如", "破", ["竹", "窋", 0]],
  [["銪", "有", 1], "腳", "陽", "春"],
  ["撥", "雲", ["劍", "見", 1], "日"],
  ["寅", ["吃", "痴", 0], "卯", "糧"],
  ["牝", "牡", "驪", ["鰉", "黃", 1]],
  ["賓", ["至", "痔", 0], "如", "歸"],
  ["以", ["瀆", "毒", 1], "攻", "毒"],
  ["豁", ["然", "呥", 0], "貫", "通"],
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
