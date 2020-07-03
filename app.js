const playBtn = document.querySelector("#play");
const home = document.querySelector("#home");
const content = document.querySelector("#content");
const counter = document.querySelector("#counter");
const question = document.querySelector("#question");
const inp = document.querySelector("#inp");
const next = document.querySelector("#next");
const showAns = document.querySelector("#showAns");
const over = document.querySelector("#over");
const replay = document.querySelector("#replay");
const points = document.querySelector("#points");

function play() {
  reset();
  showQuestion();
  home.style.display = "none";
  content.style.display = "flex";
  over.style.display = "none";
}

playBtn.addEventListener("click", function () {
  play();
});

replay.addEventListener("click", function () {
  play();
});

function reset() {
  questionNumber = 0;
  correct = 0;
  incorrect = 3;
}

const questions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answer: "<script>",
  },
  {
    question: 'How do you write "Hello World" in an alert box?',
    answer: 'alert("Hello World")',
  },
  {
    question: 'How do you call a function named "myFunction"?',
    answer: "myFunction()",
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    answer: "onclick",
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    answer: "=",
  },
];

let questionNumber = 0;
let correct = 0;
let incorrect = 3;

inp.addEventListener("keyup", function (e) {
  if (e.keyCode === 13 && incorrect > 0) {
    if (currentAnswer == inp.value) {
      //validate(e); //checks whether the pressed key is "Enter"
      correct++;
      console.log("correct" + correct);
      nextQuestion();
    } else {
      incorrect--;
      counter.innerText = incorrect;
      console.log("incorrect" + incorrect);
      if (incorrect == 0) {
        counter.innerText = incorrect;
        console.log("incorrect - reset" + incorrect);
        showAns.innerText = currentAnswer;
        next.style.display = "";
      }
    }
    inp.value = "";
  }
});

next.addEventListener("click", function () {
  nextQuestion();
});

function showQuestion() {
  currentQuestion = `Q${questionNumber + 1}) ${
    questions[questionNumber].question
  }`;
  question.innerText = currentQuestion;
  currentAnswer = questions[questionNumber].answer;
  next.style.display = "none";
  incorrect = 3;
  showAns.innerText = "";
  counter.innerText = incorrect;
}

function nextQuestion() {
  if (questionNumber + 1 < questions.length) {
    questionNumber++;
    incorrect = 3;
    inp.value = "";
    showAns.innerText = "";
    showQuestion();
    counter.innerText = incorrect;
  } else {
    console.log(questionNumber, "ok");
    content.style.display = "none";
    over.style.display = "flex";
    points.innerText = correct;
  }
  console.log(questionNumber);
}
let currentAnswer;
let currentQuestion;

showQuestion();
