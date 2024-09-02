/**
 * Fisher Yates Shuffle Algorithm
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 */

import { Character } from "../types";

export const shuffleCards = (cardsArray: Character[]): Character[] => {
  const length = cardsArray.length;

  for (let i = length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i - 1;
    const temp = cardsArray[currentIndex];
    cardsArray[currentIndex] = cardsArray[randomIndex];
    cardsArray[randomIndex] = temp;
  }

  return cardsArray;
};
