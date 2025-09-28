import React, { useState, useEffect } from "react";
import "./App.css";
import quizData from "./Quiz.json";

const Quiz = () => {
  const [currentquestion, setcurrentquestion] = useState(0);
  const [currentscore, setcurrentscore] = useState(0);
  const [showscore, setshowscore] = useState(false);
  const [timer, settimer] = useState(5);

  const selected = (option) => {
    if (option === quizData.quiz[currentquestion].correctOption) {
      setcurrentscore(currentscore + 1);
    }
    const nextQuestion = currentquestion + 1;
    if (nextQuestion < quizData.quiz.length) {
      setcurrentquestion(nextQuestion);
      settimer(5);
    } else {
      setshowscore(true);
    }
  };

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        settimer((t) => t - 1);
      }, 1000);
      return () => clearInterval(countdown);
    } else {
      const nextQuestion = currentquestion + 1;
      if (nextQuestion < quizData.quiz.length) {
        setcurrentquestion(nextQuestion);
        settimer(5);
      } else {
        setshowscore(true);
      }
    }
  }, [timer, currentquestion]);

  return (
    <div className="quiz-app">
      {showscore ? (
        <div className="score-section">
          <h2>Your Score: {currentscore}</h2>
          <button
            onClick={() => {
              setcurrentquestion(0);
              setcurrentscore(0);
              setshowscore(false);
              settimer(5);
            }}
          >
            Restart
          </button>
        </div>
      ) : (
        <div className="question-section">
          <h2>Question {currentquestion + 1}</h2>
          <p>{quizData.quiz[currentquestion].question}</p>
          <div className="options">
            {quizData.quiz[currentquestion].options.map((option, index) => (
              <button key={index} onClick={() => selected(option)}>
                {option}
              </button>
            ))}
          </div>
          <div className="timer">
            Time left: <span>{timer}s</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
