import { Dispatch, SetStateAction } from "react";
import { Character } from "../../types";

export interface CardGridProps {
  bestScore: number;
  setBestScore: Dispatch<SetStateAction<number>>;
  cards: Character[];
  clearedCards: string[];
  setClearedCards: Dispatch<SetStateAction<string[]>>;
  onOpenModal: () => void;
  openedCards: number[];
  setOpenedCards: Dispatch<SetStateAction<number[]>>;
  disableAllCards: boolean;
  setDisableAllCards: Dispatch<SetStateAction<boolean>>;
  moves: number;
  setMoves: Dispatch<SetStateAction<number>>;
}
