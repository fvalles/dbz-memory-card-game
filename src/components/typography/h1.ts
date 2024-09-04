import styled from "@emotion/styled";
import { TypographyProps } from "./types";

/**
 * H1 Component
 */

export const H1 = styled.h1<TypographyProps>`
  color: ${({ color = "black", theme }) => theme.Colors[color]};
  font-size: 20px;
  font-weight: 900;
  text-align: ${({ textAlign = "left" }) => textAlign};
`;
