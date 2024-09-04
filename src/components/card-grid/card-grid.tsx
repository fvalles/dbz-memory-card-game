import { useCallback, useEffect, useRef } from "react";
import { Card } from "../card";
import { CardsContainer, StyledCardGrid } from "./styled-components";
import { CardGridProps } from "./types";
import { CHARACTERS_ARRAY } from "../../constants";
import { LOCAL_STORAGE_BEST_SCORE_KEY } from "../../App";

/**
 * CardGrid Component
 */

export const CardGrid = ({
  bestScore,
  cards,
  clearedCards,
  disableAllCards,
  moves,
  onOpenModal,
  openedCards,
  setBestScore,
  setClearedCards,
  setDisableAllCards,
  setMoves,
  setOpenedCards,
}: CardGridProps) => {
  const flipCardsTimeout = useRef(0);

  const disableCards = useCallback(() => {
    setDisableAllCards(true);
  }, []);

  const enableCards = useCallback(() => {
    setDisableAllCards(false);
  }, []);

  const isGameCompleted = useCallback(() => {
    if (clearedCards.length === CHARACTERS_ARRAY.length) {
      onOpenModal();

      if (moves < bestScore) {
        setBestScore(moves);
        localStorage.setItem(LOCAL_STORAGE_BEST_SCORE_KEY, moves.toString());
      }
    }
  }, [bestScore, clearedCards, moves]);

  const checkCardsMatch = useCallback(() => {
    const [firstCard, secondCard] = openedCards;
    enableCards();

    if (cards[firstCard].name === cards[secondCard].name) {
      setClearedCards((prev) => [...prev, cards[firstCard].name]);
    }

    /** Flip opened cards back after 500ms duration */
    flipCardsTimeout.current = setTimeout(() => {
      setOpenedCards([]);
    }, 500);
  }, [cards, openedCards]);

  const handleCardClick = useCallback(
    (index: number) => {
      if (openedCards.length === 1) {
        setOpenedCards((prev) => [...prev, index]);
        setMoves((moves) => moves + 1);
        disableCards();
      } else {
        clearTimeout(flipCardsTimeout.current);
        setOpenedCards([index]);
      }
    },
    [openedCards]
  );

  const checkIsFlipped = useCallback(
    (index: number) => {
      return openedCards.includes(index);
    },
    [openedCards]
  );

  const checkIsInactive = useCallback(
    (name: string) => {
      return clearedCards.includes(name);
    },
    [clearedCards]
  );

  useEffect(() => {
    if (openedCards.length === 2) {
      checkCardsMatch();
    }
  }, [openedCards]);

  useEffect(() => {
    isGameCompleted();
  }, [clearedCards]);

  return (
    <StyledCardGrid>
      <CardsContainer>
        {cards.map(({ image, name }, index) => {
          return (
            <Card
              key={index}
              image={image}
              index={index}
              name={name}
              isDisabled={disableAllCards}
              isInactive={checkIsInactive(name)}
              isFlipped={checkIsFlipped(index)}
              onClick={handleCardClick}
            />
          );
        })}
      </CardsContainer>
    </StyledCardGrid>
  );
};
