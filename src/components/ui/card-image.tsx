import { useMemo, useState } from "react";
import { Card } from "./card";
import { duplicateCard } from "@/lib/duplicate-card";

type CardImageProps = {
  id: number;
  imageURL: string;
  isFlipped: boolean;
  isMatched: boolean;
};

type MemoryGameProps = {
  images: string[];
};

export default function CardImage({ images }: Readonly<MemoryGameProps>) {
  const [cards, setCards] = useState<CardImageProps[]>(() =>
    duplicateCard(images)
  );

  const handleCardMatch = (
    firstCard: CardImageProps,
    secondCard: CardImageProps
  ) => {
    const isMatch = firstCard.imageURL === secondCard.imageURL;

    setTimeout(() => {
      setCards((prevCards) => {
        const newCards = [...prevCards];
        if (isMatch) {
          newCards[firstCard.id].isMatched = true;
          newCards[secondCard.id].isMatched = true;
        } else {
          newCards[firstCard.id].isFlipped = false;
          newCards[secondCard.id].isFlipped = false;
        }
        return newCards;
      });
    }, 800);
  };

  const handleCardClick = (card: CardImageProps) => {
    if (card.isFlipped || card.isMatched) return;

    setCards((prevCards) => {
      const newCards = [...prevCards];
      newCards[card.id].isFlipped = true;

      const flippedCards = newCards.filter((c) => c.isFlipped && !c.isMatched);

      if (flippedCards.length === 2) {
        handleCardMatch(flippedCards[0], flippedCards[1]);
      }

      return newCards;
    });
  };

  const isGameFinished = useMemo(() => {
    for (const card of cards) {
      if (!card.isMatched) {
        return false;
      }
    }
    return true;
  }, [cards]);

  if (isGameFinished) {
    alert("Congratulations! You've won the game!");
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {cards.map((card) => (
        <Card
          key={card.id}
          onClick={() => {
            handleCardClick(card);
            console.log(card.id);
          }}
          className={`w-40 h-40 p-1 cursor-pointer rounded-lg border-2 transition-all duration-300 ${
            card.isFlipped || card.isMatched
              ? "rotate-0"
              : "rotate-180 bg-stone-500"
          }`}>
          {(card.isFlipped || card.isMatched) && (
            <img
              src={card.imageURL}
              alt="Card"
              className="h-full w-full rounded-md object-cover"
            />
          )}
        </Card>
      ))}
    </div>
  );
}
