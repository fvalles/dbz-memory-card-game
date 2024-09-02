import styled from "@emotion/styled";

export const CardsContainer = styled.div`
  align-items: center;
  justify-items: center;
  display: grid;
  padding-top: 20px;
  grid-template-columns: repeat(4, 3fr);
  grid-template-rows: repeat(3, 1fr);
  column-gap: 20px;
`;

export const StyledMain = styled.main`
  display: flex;
  justify-content: center;
`;
