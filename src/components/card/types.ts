import { Character } from "../../types";

export interface CardProps extends Character {
  index: number;
  isDisabled: boolean;
  isFlipped: boolean;
  isCleared: boolean;
  onClick: (index: number) => void;
}

export interface CardContainerProps
  extends Pick<CardProps, "isFlipped" | "isCleared"> {
  width: number;
  height: number;
}
