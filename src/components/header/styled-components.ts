import styled from "@emotion/styled";

export const StyledHeader = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.Colors.black};
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
`;

export const StyledH1 = styled.h1`
  color: ${({ theme }) => theme.Colors.yellow};
  font-size: 20px;
  font-weight: 900;
`;

export const StyledHButton = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.Colors.lightRed};
  border-radius: 20px;
  display: flex;
  font-size: 16px;
  font-weight: 900;
  justify-content: center;
  padding: 10px 0px;
  width: 130px;

  :hover {
    background-color: ${({ theme }) => theme.Colors.darkRed};
    color: ${({ theme }) => theme.Colors.white};;
  }
`;
