import styled from "@emotion/styled";
import { CardProps } from "./types";


export const CardContainer = styled.div<
  Pick<CardProps, "isFlipped" | "isCleared">
>`
  align-items: center;
  background-image: url("card-background.png");
  background-position: center center;
  background-size: cover;
  border-radius: 5px;
  box-shadow: 2px 2px 4px 4px ${({ theme }) => theme.Colors.gray};
  display: flex;
  justify-content: center;
  height: 240px;
  margin: 0px 0px 20px 0px;
  width: 250px;
  transform: ${({ isFlipped }) => (isFlipped ? "rotateY(180deg)" : "none")};
  opacity: ${({ isCleared }) => (isCleared ? 0.25 : 1)};
  transition: 0.3s;
  transform-style: preserve-3d;
  cursor: ${({ isCleared }) => (isCleared ? "default" : "pointer")};

  &:hover {
    box-shadow: ${({ isCleared, theme }) =>
      !isCleared
        ? `0 0 10px 5px ${theme.Colors.darkRed}`
        : `2px 2px 4px 4px ${theme.Colors.gray}`};
  }
`;

export const StyledImg = styled.img`
  object-fit: contain;
  height: 200px;
  width: 190px;
`;
