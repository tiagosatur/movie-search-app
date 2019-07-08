import { css } from 'styled-components';
import { colorPallete, rem } from '../../style';

export const InputBaseStyled = css`
    align-items: center;
    border: ${rem(1)} solid ${colorPallete.light['80']};
    border-radius: ${rem(2)};
    box-shadow: none;
    display: inline-flex;
    font-size: ${rem(16)};
    height: ${rem(32)};
    justify-content: flex-start;
    line-height: $control-line-height;
    padding: ${rem(8)};
    transition: all .4s;
    width: 100%;
`;
