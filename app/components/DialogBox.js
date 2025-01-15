import React from 'react';

const QuestionBox = ({
  question,
  options,
  correctAnswer,
  feedback,
  
  description,
  onAnswer,
  onNext,
  timeLeft,
  isTimeUp,
}) => {
  const handleOptionClick = (option) => {
    if (!isTimeUp) {
      onAnswer(option === correctAnswer);
    }
  };

  return (
    <div className="p-4 bg-blue-500 rounded-xl text-black font-modern text-lg w-full max-w-xl shadow-lg text-center animate-fade-in">
      <div className="mb-6">
        <h2 className="font-fun text-2xl animate-fade-in">{question}</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            className="px-4 py-2 bg-[#FFCF40] hover:bg-[#FEBC33] text-black text- font-game text-lg rounded-lg shadow-md animate-bounce-in"
            disabled={isTimeUp}
          >
            {option}
          </button>
        ))}
      </div>
      {feedback && (
        <div className="mt-3 p-4 bg-gray-800 text-white rounded-xl">
          {feedback}
          <p className="mt-1 text-sm">{description}</p>
        </div>
      )}
      {isTimeUp && (
        <button
          onClick={onNext}
          className="mt-2 px-6 py-3 bg-green-400 hover:bg-green-600 text-black font-game text-lg rounded-lg shadow-md"
        >
          Next Scenario
        </button>
      )}
    </div>
  );
};

export default QuestionBox;
