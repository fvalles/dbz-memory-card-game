import { BREAKPOINT } from "../constants";

const BIG_FACTOR = 2;
const MEDIUM_FACTOR = 1.8;
const SMALL_FACTOR = 1.5;
const EXTRA_SMALL_FACTOR = 1.2;

const CARD_WIDTH = 250;
const CARD_HEIGHT = 240;
const IMAGE_WIDTH = 190;
const IMAGE_HEIGHT = 200;

export const getCardDimensions = (windowWidth: number) => {
  if (windowWidth > BREAKPOINT.XS && windowWidth <= BREAKPOINT.S) {
    return {
      cardWidth: CARD_WIDTH / MEDIUM_FACTOR,
      cardHeight: CARD_HEIGHT / MEDIUM_FACTOR,
      imageWidth: IMAGE_WIDTH / MEDIUM_FACTOR,
      imageHeight: IMAGE_HEIGHT / MEDIUM_FACTOR,
    };
  }

  if (windowWidth > BREAKPOINT.S && windowWidth <= BREAKPOINT.M) {
    return {
      cardWidth: CARD_WIDTH / SMALL_FACTOR,
      cardHeight: CARD_HEIGHT / SMALL_FACTOR,
      imageWidth: IMAGE_WIDTH / SMALL_FACTOR,
      imageHeight: IMAGE_HEIGHT / SMALL_FACTOR,
    };
  }

  if (windowWidth > BREAKPOINT.M && windowWidth <= BREAKPOINT.XL) {
    return {
      cardWidth: CARD_WIDTH / EXTRA_SMALL_FACTOR,
      cardHeight: CARD_HEIGHT / EXTRA_SMALL_FACTOR,
      imageWidth: IMAGE_WIDTH / EXTRA_SMALL_FACTOR,
      imageHeight: IMAGE_HEIGHT / EXTRA_SMALL_FACTOR,
    };
  }

  if (windowWidth > BREAKPOINT.XL) {
    return {
      cardWidth: CARD_WIDTH,
      cardHeight: CARD_HEIGHT,
      imageWidth: IMAGE_WIDTH,
      imageHeight: IMAGE_HEIGHT,
    };
  }

  return {
    cardWidth: CARD_WIDTH / BIG_FACTOR,
    cardHeight: CARD_HEIGHT / BIG_FACTOR,
    imageWidth: IMAGE_WIDTH / BIG_FACTOR,
    imageHeight: IMAGE_HEIGHT / BIG_FACTOR,
  };
};
