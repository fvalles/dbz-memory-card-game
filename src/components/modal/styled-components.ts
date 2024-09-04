import styled from "@emotion/styled";

export const ModalTitleContainer = styled.div`
  border-bottom: 1px solid ${({theme}) => theme.Colors.darkBlue};
  margin-bottom: 20px;
  padding-bottom: 10px;
  width: 90%;
`;

export const ModalContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

export const ParagraphContainer = styled.div`
  margin-top: 20px;
`;

export const BestScoreContainer = styled.div`
  margin-top: 10px;
`;
