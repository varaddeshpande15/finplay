const ScenarioDialog = ({ explanation, onNext }) => {
  return (
    <div className="p-6 bg-blue-500 rounded-xl text-black font-modern text-lg w-full max-w-xl shadow-lg text-center">
      <p className="mb-4">{explanation}</p>
      <button
        onClick={onNext}
        className="px-6 py-3 bg-[#FFCF40] hover:bg-[#FEBC33] text-black font-game text-lg rounded-lg shadow-md"
      >
        Next
      </button>
    </div>
  );
};

export default ScenarioDialog;
