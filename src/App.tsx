import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Deck } from "./components/Deck";
import { Header } from "./components/Header";
import { useState } from "react";
import { ScoreContext } from "./ScoreContext";

const queryClient = new QueryClient();

function App() {
  const [score, setScore] = useState(0);

  let bestScore = 0;

  const updateScore = () => {
    let currentScore = score;
    setScore((currentScore += 1));
  };

  if (score > bestScore) {
    bestScore = score;
  }

  return (
    <ScoreContext.Provider value={{ score, bestScore, updateScore }}>
      <Header />
      <QueryClientProvider client={queryClient}>
        <main className="grid grid-cols-5 gap-2">
          <Deck />
        </main>
      </QueryClientProvider>
    </ScoreContext.Provider>
  );
}

export default App;
