import logoImage from "../../assets/dragon-ball-logo.png";
import { HeaderTitle, HeaderHButton, StyledHeader } from "./styled-components";

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
      <HeaderTitle>DBZ Memory Card Game</HeaderTitle>
      <HeaderHButton>Reset</HeaderHButton>
    </StyledHeader>
  );
};
