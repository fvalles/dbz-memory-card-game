import styled from "@emotion/styled";
import { TypographyProps } from "./types";

/**
 * Paragraph Component
 */

export const Paragraph = styled.p<TypographyProps>`
  color: ${({ color = "black", theme }) => theme.Colors[color]};
  font-size: 14px;
  font-weight: 400;
  text-align: ${({ textAlign = "left" }) => textAlign};
`;
