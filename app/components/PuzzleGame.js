"use client";
import React, { useState, useEffect } from "react";
import puzzleData from "../data/puzzleData";
import TopBarpuzzle from "./TopBarpuzzle";
import PuzzleGrid from "./PuzzleGrid";

const PuzzleGame = () => {
  const [currentPuzzleIndex, setCurrentPuzzleIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [grid, setGrid] = useState([]);
  const [feedback, setFeedback] = useState(null);
  const [timeLeft, setTimeLeft] = useState(60);
  const [showHint, setShowHint] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [score, setScore] = useState(0); // Add score state

  useEffect(() => {
    if (puzzleData.length > 0 && currentPuzzleIndex < puzzleData.length) {
      setGrid(puzzleData[currentPuzzleIndex].grid || []);
    } else {
      console.error(`Puzzle data not found at index ${currentPuzzleIndex}`);
    }
  }, [currentPuzzleIndex]);

  useEffect(() => {
    if (timeLeft > 0 && !isCorrectAnswer) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !isCorrectAnswer) {
      setFeedback("Time's up! The correct answer is revealed.");
      setGrid([puzzleData[currentPuzzleIndex].correctAnswer.split("")]);
      setIsTimeUp(true);
    }
  }, [timeLeft, isCorrectAnswer]);

  const handleInputChange = (value) => {
    setUserAnswer(value.toUpperCase());
  };

  const checkAnswer = () => {
    const correctAnswer = puzzleData[currentPuzzleIndex].correctAnswer;

    if (userAnswer.trim() === correctAnswer.trim()) {
      const updatedGrid = [...grid];
      for (let i = 0; i < correctAnswer.length; i++) {
        updatedGrid[0][i] = correctAnswer[i];
      }
      setGrid(updatedGrid);
      setFeedback("Correct! Puzzle solved.");
      setIsCorrectAnswer(true);
      setScore(score + 10); // Increment score on correct answer
    } else {
      setFeedback("Incorrect! Please try again.");
    }
  };

  const nextPuzzle = () => {
    if (currentPuzzleIndex < puzzleData.length - 1) {
      setCurrentPuzzleIndex(currentPuzzleIndex + 1);
      setFeedback(null);
      setUserAnswer("");
      setTimeLeft(60); // Reset timer
      setIsCorrectAnswer(false); // Reset correct answer state
      setIsTimeUp(false); // Reset time-up state
    } else {
      setFeedback("Congratulations! All puzzles solved.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && timeLeft > 0 && !isCorrectAnswer) {
      checkAnswer();
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative text-white"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      {/* Pass the score to TopBar */}
      <TopBarpuzzle score={score} />

      {/* Main Content */}
      <div className="pt-28 flex flex-col items-center gap-8">
        <div className="text-center text-5xl">
          <p className="pb-8 font-bold text-white font-inter stroke-red-500 [text-shadow:4px_4px_black] [--webkit-text-stroke:10px_black]">
            Guess the word from the clue:
          </p>
          <p className="text-3xl font-dm font-semibold [text-shadow:4px_4px_black] [--webkit-text-stroke:10px_black]">
            {puzzleData[currentPuzzleIndex].clue}
          </p>
        </div>
        {grid.length > 0 && <PuzzleGrid grid={grid} />}
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => handleInputChange(e.target.value)}
          onKeyDown={handleKeyPress}
          maxLength={puzzleData[currentPuzzleIndex].correctAnswer.length}
          className="p-5 border-2 text-xl font-modern border-black rounded-xl text-black w-1/3"
          placeholder="Enter your answer"
          disabled={isCorrectAnswer || isTimeUp} // Disable input if time is up or answer is correct
        />
        <div className="flex gap-4">
          <button
            onClick={checkAnswer}
            className="mt-2 font-game p-5 bg-[#FFCF40] hover:bg-[#FEBC33] text-black rounded-xl text-2xl font-semibold"
            disabled={isCorrectAnswer || isTimeUp} // Disable "Check Answer" if time is up or answer is correct
          >
            Check Answer
          </button>
          {(isCorrectAnswer || isTimeUp) && (
            <button
              onClick={nextPuzzle}
              className="mt-2 font-game px-6 py-2 bg-green-400 rounded-xl font-bold text-2xl hover:bg-green-600 text-black"
            >
              Next Puzzle
            </button>
          )}
        </div>
        {feedback && <div className="border-2 border-black p-5 bg-blue-500 text-black hover:bg-blue-400 text-xl rounded-2xl font-modern [text-shadow:1px_1px_white] [--webkit-text-stroke:1px_white]">{feedback}</div>}
      </div>

      {/* Timer and Hint */}
      <div className="absolute top-1/2 right-40 transform -translate-y-1/2 text-center">
        <p className="text-sm bg-[#FFCF40] hover:bg-[#FEBC33] p-3 rounded-xl text-black font-bold font-game mb-2 ">Time Left: {timeLeft}s</p>
        <button
          className="p-3 text-5xl rounded hover:bg-blue-400 bg-blue-500 rounded-2xl [text-shadow:4px_4px_black] [--webkit-text-stroke:4px_black]"
          onClick={() => setShowHint(true)}
        >
         💡
        </button>
      </div>

      {/* Hint Modal */}
      {showHint && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg text-black w-1/2">
            <h2 className="text-2xl font-bold mb-4">Hint</h2>
            <p>{puzzleData[currentPuzzleIndex].hint}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 text-white"
              onClick={() => setShowHint(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PuzzleGame;
