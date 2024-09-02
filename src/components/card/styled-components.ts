import styled from "@emotion/styled";

export const CardContainer = styled.div`
  align-items: center;
  background-image: url("card-background.png");
  background-position: center center;
  background-size: cover;
  border-radius: 5px;
  box-shadow: 2px 2px 4px 4px ${({theme}) => theme.Colors.gray};
  display: flex;
  justify-content: center;
  height: 240px;
  margin: 0px 0px 20px 0px;
  width: 250px;
`;

export const StyledImg = styled.img`
  object-fit: contain;
  height: 200px;
  width: 190px;
`;
