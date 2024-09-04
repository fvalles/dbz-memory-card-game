import { CardContainer, StyledImg } from "./styled-components";
import { CardProps } from "./types";
import { default as fourStarsBall } from "../../assets/4-stars-ball.png";

/**
 * Card Component
 */

export const Card = ({
  image,
  name,
  isDisabled,
  isFlipped,
  isCleared,
  onClick,
  index,
}: CardProps) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && !isCleared && onClick(index);
  };

  return (
    <CardContainer
      onClick={handleClick}
      isFlipped={isFlipped}
      isCleared={isCleared}
    >
      {isFlipped || isCleared ? (
        <StyledImg src={image} alt={name} />
      ) : (
        <StyledImg src={fourStarsBall} alt="four stars ball" />
      )}
    </CardContainer>
  );
};
