import styled from "@emotion/styled";
import { TypographyProps } from "./types";

/**
 * ButtonText Component
 */

export const ButtonText = styled.p<TypographyProps>`
  color: ${({ color = "black", theme }) => theme.Colors[color]};
  font-size: 16px;
  font-weight: 900;
  text-align: ${({ textAlign = "left" }) => textAlign};
`;
