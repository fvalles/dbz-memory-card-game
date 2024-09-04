import logoImage from "../../assets/dragon-ball-logo.png";
import { ButtonText, H1 } from "../typography";
import {
  HeaderButton,
  StyledHeader,
} from "./styled-components";
import { HeaderProps } from "./types";

/**
 * Constants
 */

const LOGO_IMAGE_WIDTH = 130;

/**
 * Header Component
 */

export const Header = ({ onRestart }: HeaderProps) => (
  <StyledHeader>
    <img src={logoImage} width={LOGO_IMAGE_WIDTH} />
    <H1 color="yellow">DBZ Memory Card Game</H1>
    <HeaderButton onClick={onRestart}>
      <ButtonText>Reset</ButtonText>
    </HeaderButton>
  </StyledHeader>
);
