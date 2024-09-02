import { Character } from "../../types";

export interface CardProps extends Character {
  index: number;
  onClick: () => void;
}
