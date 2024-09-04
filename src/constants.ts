import { default as goku } from "../src/assets/characters/goku.png";
import { default as vegeta } from "../src/assets/characters/vegeta.png";
import { default as bulma } from "../src/assets/characters/bulma.png";
import { default as krilin } from "../src/assets/characters/krilin.png";
import { default as piccolo } from "../src/assets/characters/piccolo.png";
import { default as masterRoshi } from "../src/assets/characters/master-roshi.png";
import { Character } from "./types";

export const CHARACTERS_ARRAY: Character[] = [
  {
    name: "goku",
    image: goku,
  },
  {
    name: "vegeta",
    image: vegeta,
  },
  {
    name: "piccolo",
    image: piccolo,
  },
  {
    name: "bulma",
    image: bulma,
  },
  {
    name: "krilin",
    image: krilin,
  },
  {
    name: "master-roshi",
    image: masterRoshi,
  },
];

export const BREAKPOINT = {
  XS: 500,
  S: 700,
  M: 900,
  L: 1000,
  XL: 1200,
};
