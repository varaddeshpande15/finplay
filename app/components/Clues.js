import React from 'react';
import puzzleData from '../data/puzzleData';

const Clues = ({ clue, onInputChange }) => {
  return (
    <div>
      <p>{clue}</p>
      <input
        type="text"
        placeholder= "Guess the word"
        onChange={(e) => onInputChange(e.target.value.toUpperCase())}
        maxLength={puzzleData.find(puzzle => puzzle.clue === clue)?.correctAnswer.length || 0}
        className="p-2 border rounded text-black"
      />
    </div>
  );
};

export default Clues;
