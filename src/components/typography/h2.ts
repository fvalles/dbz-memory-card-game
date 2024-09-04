import styled from "@emotion/styled";
import { TypographyProps } from "./types";

/**
 * H2 Component
 */

export const H2 = styled.h1<TypographyProps>`
  color: ${({ color = "black", theme }) => theme.Colors[color]};
  font-size: 18px;
  font-weight: 900;
  text-align: ${({ textAlign = "left" }) => textAlign};
`;
