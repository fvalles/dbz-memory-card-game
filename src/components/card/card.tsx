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
  isInactive,
  onClick,
  index,
}: CardProps) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && !isInactive && onClick(index);
  };

  return (
    <CardContainer
      onClick={handleClick}
      isFlipped={isFlipped}
      isInactive={isInactive}
    >
      {isFlipped || isInactive ? (
        <StyledImg src={image} alt={name} />
      ) : (
        <StyledImg src={fourStarsBall} alt="four stars ball" />
      )}
    </CardContainer>
  );
};
