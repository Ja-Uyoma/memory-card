import { useQuery } from "@tanstack/react-query";
import { type ICard, Card } from "./Card";

interface IDeck {
  success: boolean;
  deck_id: string;
  cards: ICard[];
  remaining: number;
}

export function Deck() {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["deck"],
    queryFn: async (): Promise<IDeck> => {
      const response = await fetch(
        "https://www.deckofcardsapi.com/api/deck/new/draw/?count=10"
      );

      return await response.json();
    },
  });

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error has occured: {error.message}</p>;
  }

  return (
    <>
      {data.success &&
        data.cards.map((card) => <Card key={card.code} card={card} />)}

      <div>{isFetching ? "Updating..." : ""}</div>
    </>
  );
}
