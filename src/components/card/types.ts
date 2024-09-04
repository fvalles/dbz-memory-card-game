import { Character } from "../../types";

export interface CardProps extends Character {
  index: number;
  isDisabled: boolean;
  isFlipped: boolean;
  isInactive: boolean;
  onClick: (index: number) => void;
}
