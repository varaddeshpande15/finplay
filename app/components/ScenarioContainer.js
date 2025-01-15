'use client';

import { useState, useEffect } from 'react';
import ScenarioDialog from './ScenarioDialog';
import QuestionBox from './QuestionBox';
import TopBarscenario from './TopBarscenario';

const ScenarioContainer = ({ scenarioData }) => {
  const [scenarioStep, setScenarioStep] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const currentScenario = scenarioData[scenarioStep];

  // Timer logic
  useEffect(() => {
    if (timeLeft > 0 && !isTimeUp) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setFeedback("Time's up! The correct answer is revealed.");
      setIsTimeUp(true);
    }
  }, [timeLeft, isTimeUp]);

  // Handle transitioning to question view
  const handleNextDialog = () => {
    setShowQuestion(true);
  };

  // Handle transitioning to the next scenario
  const handleNextScenario = () => {
    setScenarioStep((prev) => prev + 1);
    setShowQuestion(false);
    setFeedback(null);
    setTimeLeft(60);
    setIsTimeUp(false);
  };

  // Handle answering a question
  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setFeedback("Correct! Well done.");
      setScore((prev) => prev + 10);
    } else {
      setFeedback("Incorrect! Better luck next time.");
    }
    setIsTimeUp(true);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white flex flex-col"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <TopBarscenario score={score} />

      <div className="flex flex-col items-center justify-center flex-grow relative">
        {/* Dynamically adjust image size based on `showQuestion` */}
        <img
          src={currentScenario.image}
          alt="Scenario"
          className={`rounded-lg shadow-lg transition-all duration-300 ease-in-out transform ${
            showQuestion ? "w-1/5 max-w-md -translate-y-5" : "w-1/2 max-w-lg -translate-y-12"
          }`}
        />

        {/* Timer */}
        <div className="absolute mt-5 right-40 top-44 bg-[#FFCF40] p-4 font-game rounded-xl text-black font-bold text-sm">
          Time Left: {timeLeft}s
        </div>

        {/* Dialog or Question Box */}
        {!showQuestion ? (
          <ScenarioDialog
            explanation={currentScenario.explanation}
            onNext={handleNextDialog}
          />
        ) : (
          <QuestionBox
            question={currentScenario.question}
            options={currentScenario.options}
            correctAnswer={currentScenario.correctAnswer}
            feedback={feedback}
            description={currentScenario.description}
            onAnswer={handleAnswer}
            onNext={handleNextScenario}
            isTimeUp={isTimeUp}
          />
        )}
      </div>
    </div>
  );
};

export default ScenarioContainer;
