import { useContext, useState } from "react";
import { ScoreContext } from "../ScoreContext";

export interface ICard {
  code: string;
  image: string;
  images: {
    svg: string;
    png: string;
  };
  value: string;
  suit: string;
}

export function Card(props: { card: ICard; key: string }) {
  const value = props.card.value + " of " + props.card.suit;
  const { updateScore } = useContext(ScoreContext);
  const [pressed, setPressed] = useState(false);

  return (
    <figure
      className={`px-2 pt-2 pb-4 cursor-pointer transition-all duration-75 ${
        pressed ? "translate-y-0.5 scale-95 shadow-inner" : ""
      }`}
    >
      <img
        src={props.card.image}
        alt={value}
        onClick={() => {
          updateScore();
        }}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onMouseLeave={() => setPressed(false)}
      />
      <figcaption className="text-center pt-1">{value}</figcaption>
    </figure>
  );
}
