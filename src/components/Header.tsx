import { useContext } from "react";
import { ScoreContext } from "../ScoreContext";

export function Header() {
  const { score, bestScore } = useContext(ScoreContext);

  return (
    <header className="flex justify-between">
      <div>
        <h1 className="text-4xl">Memory Card</h1>
        <p className="text-lg">
          Get points by clicking an image, but be sure to not click more than
          once!
        </p>
      </div>
      <div className="text-lg">
        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
      </div>
    </header>
  );
}
