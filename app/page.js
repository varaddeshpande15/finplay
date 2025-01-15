

import ScenarioContainer from './components/ScenarioContainer';
import scenarioData from '../app/data/ScenarioData';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <ScenarioContainer scenarioData={scenarioData} />
    </main>
  );
}


// import PuzzleGame from './components/PuzzleGame'; // Import the PuzzleGame component

// export default function Page() {
//   return (
//     <div className="min-h-screen bg-gray-900 text-white">
//       <PuzzleGame />
//     </div>
//   );
// }
