import { Modal as ResponsiveModal } from "react-responsive-modal";
import { ModalProps } from "./types";
import {
  BestScoreContainer,
  ModalContainer,
  ModalTitleContainer,
  ParagraphContainer,
} from "./styled-components";
import { H2, Paragraph } from "../typography";
import { default as gokuDance } from "../../../src/assets/goku-dance.gif";
import { Colors } from "../../theme";

/**
 * Modal Component
 */

export const Modal = ({
  bestScore,
  moves,
  openModal,
  onCloseModal,
}: ModalProps) => (
  <ResponsiveModal
    open={openModal}
    onClose={onCloseModal}
    center
    styles={{
      modal: { border: `2px solid ${Colors.lightOrange}`, borderRadius: 10 },
    }}
  >
    <ModalContainer>
      <ModalTitleContainer>
        <H2 color="darkBlue" textAlign="center">
          LEVEL COMPLETE
        </H2>
      </ModalTitleContainer>
      <img src={gokuDance} alt="goku dancing" />
      <ParagraphContainer>
        <Paragraph color="darkOrange" textAlign="center">
          {`You completed the game in ${moves} moves.`}
        </Paragraph>
        <BestScoreContainer>
          {bestScore === moves ? (
            <Paragraph color="darkOrange" textAlign="center">
              {`Congrats! Your new best score is ${bestScore} moves. Keep rocking!`}
            </Paragraph>
          ) : (
            <Paragraph color="darkOrange" textAlign="center">
              {`Your best score is ${bestScore} moves.`}
            </Paragraph>
          )}
        </BestScoreContainer>
      </ParagraphContainer>
    </ModalContainer>
  </ResponsiveModal>
);
