import logoImage from "../../assets/dragon-ball-logo.png";
import { StyledH1, StyledHButton, StyledHeader } from "./styled-components";

/**
 * Constants
 */

const LOGO_IMAGE_WIDTH = 130;

/**
 * Header Component
 */

export const Header = () => {
  return (
    <StyledHeader>
      <img src={logoImage} width={LOGO_IMAGE_WIDTH} />
      <StyledH1>DBZ Memory Card Game</StyledH1>
      <StyledHButton>Reset</StyledHButton>
    </StyledHeader>
  );
};
