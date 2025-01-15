import React, { useState } from 'react';

const QuestionBox = ({
  question,
  options,
  correctAnswer,
  feedback,
  description,
  onAnswer,
  onNext,
  isTimeUp,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    if (!isTimeUp && selectedOption === null) {
      setSelectedOption(option);
      onAnswer(option === correctAnswer);
    }
  };

  return (
    <div className="p-6 bg-blue-500 rounded-xl text-black font-modern text-lg w-full max-w-xl shadow-lg text-center">
      <div className="mb-6">
        <h2 className="font-dm text-2xl">{question}</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {options.map((option, index) => {
          // Determine button background color
          const isCorrect = option === correctAnswer;
          const isSelected = option === selectedOption;

          let buttonClass = 'px-4 py-2 font-bold font-modern text-lg rounded-lg shadow-md ';
          if (isSelected) {
            buttonClass += isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white';
          } else {
            buttonClass += 'bg-[#FFCF40] hover:bg-[#FEBC33] text-black';
          }

          return (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className={buttonClass}
              disabled={isTimeUp || selectedOption !== null}
            >
              {option}
            </button>
          );
        })}
      </div>
      {feedback && (
        <div className="mt-4 p-4 bg-gray-800 text-white rounded-xl">
          {feedback}
          <p className="mt-2 text-sm">{description}</p>
        </div>
      )}
      {isTimeUp && (
        <button
          onClick={onNext}
          className="mt-6 px-6 py-3 bg-green-400 hover:bg-green-600 text-black font-game text-lg rounded-lg shadow-md"
        >
          Next Scenario
        </button>
      )}
    </div>
  );
};

export default QuestionBox;
