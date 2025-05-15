import { type ICard, Card } from "./Card";

interface IDeck {
  success: boolean;
  deck_id: string;
  cards: ICard[];
  remaining: number;
}

export function Deck(props: { deck: IDeck }) {
  return (
    <>
      {props.deck.success &&
        props.deck.cards.map((card) => {
          <Card key={card.code} card={card} />;
        })}
    </>
  );
}
