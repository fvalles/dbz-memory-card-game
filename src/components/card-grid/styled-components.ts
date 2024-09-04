import styled from "@emotion/styled";
import { BREAKPOINT } from "../../constants";

export const CardsContainer = styled.div<{ width: number }>`
  align-items: center;
  justify-items: center;
  display: grid;
  padding-top: 20px;
  grid-template-columns: ${({ width }) =>
    width > BREAKPOINT.L
      ? "repeat(4, 3fr)"
      : width > BREAKPOINT.XS
      ? "repeat(3, 3fr)"
      : "repeat(2, 3fr)"};
  grid-template-rows: ${({ width }) =>
    width > BREAKPOINT.L
      ? "repeat(3, 1fr)"
      : width > BREAKPOINT.XS
      ? "repeat(4, 1fr)"
      : "repeat(6, 1fr)"};
  column-gap: 20px;
`;

export const StyledCardGrid = styled.main`
  display: flex;
  justify-content: center;
`;
