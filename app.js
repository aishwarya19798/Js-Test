const playBtn = document.querySelector("#play");
const home = document.querySelector("#home");
const content = document.querySelector("#content");
const counter = document.querySelector("#counter");
const question = document.querySelector("#question");
const inp = document.querySelector("#inp");
const next = document.querySelector("#next");
const showAns = document.querySelector("#showAns");

playBtn.addEventListener("click", function () {
  home.style.display = "none";
  content.style.display = "flex";
});

const questions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answer: "a",
  },
  // {
  //   question: 'How do you write "Hello World" in an alert box?',
  //   answer: 'alert("Hello World")',
  // },
  {
    question: 'How do you call a function named "myFunction"?',
    answer: "b",
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    answer: "c",
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    answer: "d",
  },
];

let questionNumber = 0;
let correct = 0;
let incorrect = 3;

inp.addEventListener("keyup", function (e) {
  if (e.keyCode === 13 && incorrect > 0) {
    if (currentAnswer == inp.value) {
      //validate(e); //checks whether the pressed key is "Enter"
      nextQuestion();
      correct++;
      console.log("correct" + correct);
    } else {
      incorrect--;
      counter.innerText = incorrect;
      console.log("incorrect" + incorrect);
      if (incorrect == 0) {
        counter.innerText = incorrect;
        console.log("incorrect - reset" + incorrect);
        showAns.innerText = currentAnswer;
        next.style.display = ""
      }
    }
    inp.value=''
  }
});

next.addEventListener('click',function(){
  nextQuestion()
})

function showQuestion() {
  currentQuestion = `Q${questionNumber + 1}) ${
    questions[questionNumber].question
  }`;
  question.innerText = currentQuestion;
  currentAnswer = questions[questionNumber].answer;
  next.style.display = "none";
  incorrect = 3;
}

function nextQuestion() {
  if (questionNumber+1 < questions.length) {
    questionNumber++;
    incorrect = 3;
    inp.value = "";
    showAns.innerText = ''
    showQuestion();
    counter.innerText = incorrect;
    
  }
}
let currentAnswer;
let currentQuestion;

showQuestion();
