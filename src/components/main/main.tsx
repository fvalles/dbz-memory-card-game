import { useState } from "react";
import { shuffleCards } from "../../helpers/shuffle-cards";
import { CHARACTERS_ARRAY } from "../../constants";
import { Card } from "../card";
import { Character } from "../../types";
import { CardsContainer, StyledMain } from "./styled-components";

/**
 * Main Component
 */

export const Main = () => {
  const [cards, setCards] = useState<Character[]>(() =>
    shuffleCards(CHARACTERS_ARRAY.concat(CHARACTERS_ARRAY))
  );

  return (
    <StyledMain>
      <CardsContainer>
        {cards.map(({ image, name }, index) => {
          return (
            <Card
              key={index}
              image={image}
              index={index}
              name={name}
              onClick={() => {}}
            />
          );
        })}
      </CardsContainer>
    </StyledMain>
  );
};
