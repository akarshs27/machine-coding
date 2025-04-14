import "./App.css";
import { useState } from "react";

const questionData = [
  {
    question: "What is the largest planet in our solar system?",
    answerOptions: [
      { text: "Saturn", isCorrect: false },
      { text: "Mars", isCorrect: false },
      { text: "Earth", isCorrect: false },
      { text: "Jupiter", isCorrect: true },
    ],
  },
  {
    question: "What is the tallest mountain in the world?",
    answerOptions: [
      { text: "Mount Everest", isCorrect: true },
      { text: "K2", isCorrect: false },
      { text: "Kangchenjunga", isCorrect: false },
      { text: "Lhotse", isCorrect: false },
    ],
  },
  {
    question: "Which country is home to the Great Wall of China?",
    answerOptions: [
      { text: "China", isCorrect: true },
      { text: "Japan", isCorrect: false },
      { text: "Korea", isCorrect: false },
      { text: "India", isCorrect: false },
    ],
  },
  {
    question: "What is the capital of France?",
    answerOptions: [
      { text: "London", isCorrect: false },
      { text: "Berlin", isCorrect: false },
      { text: "Paris", isCorrect: true },
      { text: "Rome", isCorrect: false },
    ],
  },
  {
    question: "What is the chemical formula for water?",
    answerOptions: [
      { text: "H2O", isCorrect: true },
      { text: "CO2", isCorrect: false },
      { text: "NaCl", isCorrect: false },
      { text: "NH3", isCorrect: false },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answerOptions: [
      { text: "Atlantic Ocean", isCorrect: false },
      { text: "Pacific Ocean", isCorrect: true },
      { text: "Indian Ocean", isCorrect: false },
      { text: "Arctic Ocean", isCorrect: false },
    ],
  },
  {
    question: "What is the most popular social media platform?",
    answerOptions: [
      { text: "Instagram", isCorrect: true },
      { text: "Facebook", isCorrect: false },
      { text: "Twitter", isCorrect: false },
      { text: "YouTube", isCorrect: false },
    ],
  },
  {
    question: "What is the currency of Japan?",
    answerOptions: [
      { text: "Euro", isCorrect: false },
      { text: "US Dollar", isCorrect: false },
      { text: "Japanese Yen", isCorrect: true },
      { text: "Chinese Yuan", isCorrect: false },
    ],
  },
  {
    question: "What is the world's largest search engine?",
    answerOptions: [
      { text: "Google", isCorrect: true },
      { text: "Bing", isCorrect: false },
      { text: "Yahoo", isCorrect: false },
      { text: "DuckDuckGo", isCorrect: false },
    ],
  },
  {
    question: "Who painted the Mona Lisa?",
    answerOptions: [
      { text: "Michelangelo", isCorrect: false },
      { text: "Leonardo da Vinci", isCorrect: true },
      { text: "Sandro Botticelli", isCorrect: false },
      { text: "Raphael", isCorrect: false },
    ],
  },
];

const Question = ({ questions, onClick }) => {
  return (
    <div>
      <p>{questions.question}</p>
      {questions.answerOptions.map((each, index) => (
        <button key={index} onClick={() => onClick(each.isCorrect)}>
          {each.text}
        </button>
      ))}
    </div>
  );
};

const Result = ({ answersData, questions }) => {
  const correctAnswers = answersData.filter((each) => Boolean(each)).length;
  console.log("questions", questions);
  const totalQuestions = questions.length;
  return (
    <div>
      <p>
        You answered {correctAnswers} out of {totalQuestions}
      </p>
      <div>
        {questions.map((each, index) => (
          <p
            key={index}
            style={{ color: answersData[index] ? "green" : "red" }}
          >
            {each.question}
          </p>
        ))}
      </div>
    </div>
  );
};

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answersData, setAnswersData] = useState([]);

  function onOptionClick(selectedAnswer) {
    setAnswersData([...answersData, selectedAnswer]);
    setCurrentQuestion((prev) => prev + 1);
  }

  console.log("answersData", answersData);
  return (
    <div className="App">
      <p>Quiz App</p>
      {currentQuestion < questionData.length && (
        <Question
          questions={questionData[currentQuestion]}
          onClick={onOptionClick}
        />
      )}
      {currentQuestion === questionData.length && (
        <Result answersData={answersData} questions={questionData} />
      )}
    </div>
  );
}

export default App;
