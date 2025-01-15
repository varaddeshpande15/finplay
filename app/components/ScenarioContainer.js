'use client';

import { useState, useEffect } from 'react';
import ScenarioDialog from './ScenarioDialog';
import QuestionBox from './QuestionBox';
import TopBar from './TopBar';

const ScenarioContainer = ({ scenarioData }) => {
  const [scenarioStep, setScenarioStep] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const currentScenario = scenarioData[scenarioStep];

  useEffect(() => {
    if (timeLeft > 0 && !isTimeUp) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setFeedback("Time's up! The correct answer is revealed.");
      setIsTimeUp(true);
    }
  }, [timeLeft, isTimeUp]);

  const handleNextDialog = () => {
    setShowQuestion(true);
  };

  const handleNextScenario = () => {
    setScenarioStep(scenarioStep + 1);
    setShowQuestion(false);
    setFeedback(null);
    setTimeLeft(60); // Reset the timer
    setIsTimeUp(false);
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setFeedback("Correct! Well done.");
      setScore(score + 10);
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
      <TopBar score={score} />

      <div className="flex flex-col items-center justify-center flex-grow pt-16">
        <img
          src={currentScenario.image}
          alt="Scenario"
          className="w-1/3 max-w-xs mb-8 rounded-lg shadow-lg"
        />
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
            timeLeft={timeLeft}
            isTimeUp={isTimeUp}
          />
        )}
      </div>
    </div>
  );
};

export default ScenarioContainer;
