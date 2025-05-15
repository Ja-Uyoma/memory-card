import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Deck } from "./components/Deck";
import { Header } from "./components/Header";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Header />
      <QueryClientProvider client={queryClient}>
        <main className="grid grid-cols-5 gap-2">
          <Deck />
        </main>
      </QueryClientProvider>
    </>
  );
}

export default App;
