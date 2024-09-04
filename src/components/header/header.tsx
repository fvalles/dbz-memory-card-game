import { useWindowWidth } from "@react-hook/window-size";
import logoImage from "../../assets/dragon-ball-logo.png";
import { ButtonText, H1 } from "../typography";
import { HeaderButton, StyledHeader } from "./styled-components";
import { HeaderProps } from "./types";

/**
 * Constants
 */

const LOGO_IMAGE_WIDTH = 130;

/**
 * Header Component
 */

export const Header = ({ onRestart }: HeaderProps) => {
  const width = useWindowWidth();

  return (
    <StyledHeader>
      <img src={logoImage} width={LOGO_IMAGE_WIDTH} />
      {width > 700 && <H1 color="yellow">DBZ Memory Card Game</H1>}
      <HeaderButton onClick={onRestart} width={width}>
        <ButtonText>Reset</ButtonText>
      </HeaderButton>
    </StyledHeader>
  );
};
