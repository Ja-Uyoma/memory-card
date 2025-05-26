import { useContext } from "react";
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

  return (
    <figure className="px-2 pt-2 pb-4 cursor-pointer">
      <img
        src={props.card.image}
        alt={value}
        onClick={() => {
          updateScore();
        }}
      />
      <figcaption className="text-center pt-1">{value}</figcaption>
    </figure>
  );
}
