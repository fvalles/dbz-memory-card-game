import styled from "@emotion/styled";

export const StyledHeader = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.Colors.black};
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
  width: 100%;
`;

export const HeaderButton = styled.button<{width: number}>`
  align-items: center;
  background-color: ${({ theme }) => theme.Colors.lightRed};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  padding: 10px 0px;
  width:${({ width }) => width > 700 ? "130px" : "90px" };

  :hover {
    background-color: ${({ theme }) => theme.Colors.darkRed};
    color: ${({ theme }) => theme.Colors.white};
  }
`;
