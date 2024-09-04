import styled from "@emotion/styled";

export const ModalTitle = styled.h2`
  color: ${({ theme }) => theme.Colors.darkBlue};
  font-size: 18px;
  font-weight: 900;
  margin: 20px 0px;
  text-align: center;
`;

export const ModalContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

export const ModalDescription = styled.p`
  color: ${({ theme }) => theme.Colors.darkOrange};
  font-size: 14px;
  font-weight: 600;
  text-align: center;
`;
