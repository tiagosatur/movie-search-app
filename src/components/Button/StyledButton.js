import styled, { css } from 'styled-components';
import { colorPallete, rem } from '../../style';

const buttonBase = css`
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  border-radius: ${rem(3)};
  border-style: solid;
  border-width: ${rem(1)};
  color: ${colorPallete.black};
  cursor: pointer;
  font-size: ${rem(14)};
  font-weight: bold;
  display: inline-flex;
  justify-content: center;
  padding: ${rem(8)} ${rem(16)};
  position: relative;
  transition: all .5s;
`;

export const StyledButton = styled.button`
  ${buttonBase}
  
  color: ${({ solid, outlined, text, anchor }) =>
    solid
      ? colorPallete.white
      : text
      ? colorPallete.black
      : outlined || anchor
      ? colorPallete.primaryGradient
      : colorPallete.black};

  background: ${({ solid, text, anchor, outlined }) =>
    solid
      ? colorPallete.primaryGradient
      : outlined || anchor || text
      ? colorPallete.transparent
      : colorPallete.transparent};
  
  
  border-radius: ${({ rounded }) => (rounded ? '50%' : rem(4))};

  border-bottom-right-radius: ${({ rounded, left }) =>
    rounded && left ? '0' : rem(4)};
  
  border-top-right-radius: ${(rounded, left) =>
    rounded && left ? '0' : rem(4)};

  border-top-left-radius: ${({ rounded, right }) =>
    rounded && right ? '0' : rem(4)};

  border-bottom-left-radius: ${({ rounded, right }) =>
    rounded && right ? '0' : rem(4)};
  
  height: ${({ rounded, sm, md, lg }) =>
    rounded && sm
      ? rem(30)
      : rounded && md
      ? rem(40)
      : rounded && lg
      ? rem(50)
      : `auto`};

  padding: ${({ rounded }) => (rounded ? rem(8) : rem(8) + ' ' + rem(16))};

  a {
    color: ${({ text, anchor }) =>
      text
        ? colorPallete.black
        : anchor
        ? colorPallete.primary
        : colorPallete.black};
  }
`;
