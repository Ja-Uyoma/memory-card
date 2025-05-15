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

  return (
    <figure>
      <img src={props.card.image} alt={value} />
      <figcaption>{value}</figcaption>
    </figure>
  );
}
