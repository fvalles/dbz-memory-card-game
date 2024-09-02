import { default as goku } from "../src/assets/characters/goku.png";
import { default as vegeta } from "../src/assets/characters/vegeta.png";
import { default as bulma } from "../src/assets/characters/bulma.png";
import { default as krilin } from "../src/assets/characters/krilin.png";
import { default as piccolo } from "../src/assets/characters/piccolo.png";
import { default as masterRoshi } from "../src/assets/characters/master-roshi.png";
import { Character } from "./types";

export const CHARACTERS_ARRAY: Character[] = [
  {
    type: "goku",
    image: goku,
  },
  {
    type: "vegeta",
    image: vegeta,
  },
  {
    type: "piccolo",
    image: piccolo,
  },
  {
    type: "bulma",
    image: bulma,
  },
  {
    type: "krilin",
    image: krilin,
  },
  {
    type: "master-roshi",
    image: masterRoshi,
  },
];
