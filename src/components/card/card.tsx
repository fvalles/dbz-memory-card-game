import { CardContainer, StyledImg } from "./styled-components";
import { CardProps } from "./types";

/**
 * Card Component
 */

export const Card = ({ image, name }: CardProps) => {
  return (
    <CardContainer>
      <StyledImg src={image} alt={name} />
    </CardContainer>
  );
};
