import logoImage from "../../assets/dragon-ball-logo.png";
import { HeaderTitle, HeaderHButton, StyledHeader } from "./styled-components";
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
    <HeaderTitle>DBZ Memory Card Game</HeaderTitle>
    <HeaderHButton onClick={onRestart}>Reset</HeaderHButton>
  </StyledHeader>
);
