import { Modal as ResponsiveModal } from "react-responsive-modal";
import { ModalProps } from "./types";
import {
  ModalContainer,
  ModalDescription,
  ModalTitle,
} from "./styled-components";

/**
 * Modal Component
 */

export const Modal = ({
  bestScore,
  moves,
  openModal,
  onCloseModal,
}: ModalProps) => (
  <ResponsiveModal open={openModal} onClose={onCloseModal} center>
    <ModalContainer>
      <ModalTitle>Congrats! You completed the game!</ModalTitle>
      <ModalDescription>
        {`You completed the game in ${moves} moves. Your best score is ${bestScore} moves.`}
      </ModalDescription>
    </ModalContainer>
  </ResponsiveModal>
);
