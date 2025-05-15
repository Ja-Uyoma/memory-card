import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Deck } from "./components/Deck";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <header>
        <div>
          <h1>Memory Card</h1>
          <p>
            Get points by clicking an image, but be sure to not click more than
            once!
          </p>
        </div>
        <div>
          <p>Score</p>
          <p>Best Score</p>
        </div>
      </header>
      <main>
        <Deck />
      </main>
    </QueryClientProvider>
  );
}

export default App;
