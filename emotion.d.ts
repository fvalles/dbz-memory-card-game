import "@emotion/react";
import { ColorsType } from "./src/theme/colors";

declare module "@emotion/react" {
  export interface Theme {
    Colors: ColorsType;
  }
}
