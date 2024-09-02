import { palette } from "./palette";

export const Colors = {
  // color names are based on https://colornamer.netlify.app/
  black: palette.black,
  white: palette.white,

  /** Oranges */
  lightOrange: palette.jaffa,
  darkOrange: palette.lustyOrange,

  /** Blues */
  lightBlue: palette.chineseBlue,
  darkBlue: palette.nuitBlanche,

  /** Yellows */
  yellow: palette.samoanSun,

  /** Grays */
  gray: palette.whiteLilac,

  /** Reds */
  lightRed: palette.flamboyant,
  darkRed: palette.ghostPepper,
};

export type ColorsType = typeof Colors;
export type KeyColors = keyof ColorsType;
