"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const MainMenu = () => {
  const [showGameSelection, setShowGameSelection] = useState(false);
  const router = useRouter();

  const handlePlayNow = () => {
    setShowGameSelection(true);
  };

  const handleGameSelect = (game) => {
    router.push(`/${game}`);
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center text-white flex flex-col"
      style={{
        backgroundImage: "url('/first-screen.png')",
      }}
    >
      {/* Heading and Buttons */}
      <div className="flex flex-col gap-5 mt-24 w-1/3 ml-60">
        <h1 className="text-8xl ml-16 font-bold font-modern text-white font-semibold mb-4 tracking-widest [text-shadow:10px_10px_black] [--webkit-text-stroke:10px_black]">FinPlay</h1>
        <button
          onClick={handlePlayNow}
          className="px-12 py-8 bg-blue-600 border-2 border-black hover:bg-blue-700 text-4xl rounded-xl shadow-lg [text-shadow:4px_4px_black] [--webkit-text-stroke:10px_black]"
        >
          Play Now
        </button>
        <button
          onClick={() => router.push("/how-to-play")}
          className="px-12 py-8 bg-green-600 hover:bg-green-700 text-4xl rounded-xl shadow-lg border-2 border-black [text-shadow:4px_4px_black] [--webkit-text-stroke:10px_black] "
        >
          How to Play
        </button>
        <button
          onClick={() => router.push("/about-us")}
          className="px-12 py-8 bg-purple-600 hover:bg-purple-700 text-4xl rounded-xl shadow-lg border-2 border-black [text-shadow:4px_4px_black] [--webkit-text-stroke:10px_black]"
        >
          About Us
        </button>
      </div>

      {/* Right Image */}
      <img
        src="/scene1-img.png"
        alt="Character"
        className="absolute right-52 top-1/2 transform -translate-y-1/2 max-h-[70%]"
      />

      {/* Game Selection Modal */}
      {/* {showGameSelection && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-black p-8 rounded-lg text-black w-4/5 max-w-4xl">
            <h2 className="text-3xl font-bold mb-6 text-white">Choose a Game</h2>
            <div className="grid grid-cols-2 text-white gap-6">
              {[
                { name: "Puzzle Game", route: "puzzle-game", image: "/background.png" },
                { name: "Scenario Game", route: "scenario-game", image: "/background.png" },
                { name: "Drag & Drop Game", route: "drag-drop-game", image: "/background.png" },
                { name: "Quiz Game", route: "quiz-game", image: "/background.png" },
              ].map((game) => (
                <div
                  key={game.route}
                  className="flex flex-col items-center bg-gray-200 rounded-lg p-4 cursor-pointer hover:shadow-lg"
                  onClick={() => handleGameSelect(game.route)}
                >
                  <img
                    src={game.image}
                    alt={game.name}
                    className="mb-2 h-full w-full"
                  />
                  <span className="font-semibold text-black text-lg">{game.name}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowGameSelection(false)}
              className="mt-6 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )} */}
        {showGameSelection && (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
    <div className="bg-black p-6 rounded-lg text-black w-4/5 max-w-4xl">
      <h2 className="text-3xl font-bold mb-6 text-white">Choose a Game</h2>
      <div className="grid grid-cols-2 text-white gap-4">
        {[
          { name: "Puzzle Game", route: "puzzle-game", image: "/background.png" },
          { name: "Scenario Game", route: "scenario-game", image: "/background.png" },
          { name: "Drag & Drop Game", route: "drag-drop-game", image: "/background.png" },
          { name: "Quiz Game", route: "quiz-game", image: "/background.png" },
        ].map((game) => (
          <div
            key={game.route}
            className="flex flex-col items-center bg-black border-2 border-white rounded-xl m-2 p-2 cursor-pointer hover:shadow-md"
            onClick={() => handleGameSelect(game.route)}
          >
            <img
              src={game.image}
              alt={game.name}
              className="mb-2 h-full w-full object-cover"
            />
            <span className="font-semibold text-white font-inter text-lg">{game.name}</span>
          </div>
        ))}
      </div>
      <button
        onClick={() => setShowGameSelection(false)}
        className="mt-6 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded"
      >
        Close
      </button>
    </div>
  </div>
)}

      {/* Breathing Animation */}
      <style jsx>{`
        @keyframes breathing {
          0%, 100% {
            background-position: center top;
          }
          50% {
            background-position: center bottom;
          }
        }
      `}</style>
    </div>
  );
};

export default MainMenu;
