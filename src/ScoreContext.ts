import { createContext } from "react";

interface IScore {
  score: number;
  bestScore: number;
  updateScore: () => void;
}

export const ScoreContext = createContext<IScore>({
  score: 0,
  bestScore: 0,
  updateScore: () => {},
});
