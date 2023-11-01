const quizData = [
  {
    question: "What is your name A?",
    a: "A",
    b: "B",
    c: "C",
    d: "D",
    correct: "a",
  },
  {
    question: "What is your name B?",
    a: "A",
    b: "B",
    c: "C",
    d: "D",
    correct: "b",
  },
  {
    question: "What is your name C?",
    a: "A",
    b: "B",
    c: "C",
    d: "D",
    correct: "c",
  },
  {
    question: "What is your name D?",
    a: "A",
    b: "B",
    c: "C",
    d: "D",
    correct: "d",
  },
];

const questionEl = document.querySelector(".quiz-question");
const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");
const option4 = document.querySelector(".option4");
const submitBtn = document.querySelector(".submit-btn");
const quiz = document.querySelector(".quiz");

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deSelectAnswers();
  const currentQuizData = quizData[currentQuestion];
  questionEl.innerText = currentQuizData.question;
  option1.innerText = currentQuizData.a;
  option2.innerText = currentQuizData.b;
  option3.innerText = currentQuizData.c;
  option4.innerText = currentQuizData.d;
}

function getSelected() {
  const answers = document.querySelectorAll(".answers");
  let selectedAnswer;

  answers.forEach((answer) => {
    if (answer.checked) {
      selectedAnswer = answer.id;
    }
  });
  return selectedAnswer;
}

function deSelectAnswers() {
  const answers = document.querySelectorAll(".answers");
  answers.forEach((answer) => {
    answer.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer == quizData[currentQuestion].correct) {
      score++;
    }
    currentQuestion++;
  }

  if (currentQuestion < quizData.length) {
    loadQuiz();
  } else {
    quiz.innerHTML = `
    <h2>You completed the quiz. Your score ${score} </h2>
    <button onClick="location.reload()">Restart</button>
    `;
  }
});
