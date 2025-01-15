import React from 'react';

const PuzzleGrid = ({ grid }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-2">
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              className="p-6 text-black border-2 border-black bg-gray-100 border-2 border-gray-300 rounded-lg w-10 h-10 flex items-center justify-center text-lg font-semibold shadow"
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PuzzleGrid;
