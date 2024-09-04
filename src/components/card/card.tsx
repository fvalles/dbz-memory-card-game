import { CardContainer, StyledImg } from "./styled-components";
import { CardProps } from "./types";
import { default as fourStarsBall } from "../../assets/4-stars-ball.png";
import { useWindowWidth } from "@react-hook/window-size";
import { getCardDimensions } from "../../helpers/get-card-dimensions";

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
  const width = useWindowWidth();

  const { cardWidth, cardHeight, imageWidth, imageHeight } =
    getCardDimensions(width);

  const handleClick = () => {
    !isFlipped && !isDisabled && !isCleared && onClick(index);
  };

  return (
    <CardContainer
      onClick={handleClick}
      isFlipped={isFlipped}
      isCleared={isCleared}
      width={cardWidth}
      height={cardHeight}
    >
      {isFlipped || isCleared ? (
        <StyledImg
          src={image}
          alt={name}
          width={imageWidth}
          height={imageHeight}
        />
      ) : (
        <StyledImg
          src={fourStarsBall}
          alt="four stars ball"
          width={imageWidth}
          height={imageHeight}
        />
      )}
    </CardContainer>
  );
};
