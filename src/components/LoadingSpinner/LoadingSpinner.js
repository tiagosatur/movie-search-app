import React from 'react';
import styled from 'styled-components';
import dualRing from '../../style/animations/dualRinrg';
import { colorPallete, rem } from '../../style';

const LoadingSpinner = props => (
    <LoadingWrapper>
      <StyledLoadingSpinner { ...props } />
    </LoadingWrapper>
);

const spinnerSizes = {
  small: 24,
  medium: 32,
  big: 46,
}

const StyledLoadingSpinner = styled.div`
  display: inline-block;
  width: ${rem(64)};
  height: ${rem(64)};

    &:after {
    content: " ";
    display: block;
    width: ${({ small, medium, big }) => 
      small ? rem(spinnerSizes.small) : 
      medium ? rem(spinnerSizes.medium) : 
      big ? rem(spinnerSizes.big) : 
      rem(46)
    };
    height: ${({ small, medium, big }) => 
      small ? rem(spinnerSizes.small) : 
      medium ? rem(spinnerSizes.medium) : 
      big ? rem(spinnerSizes.big) : 
      rem(46)
    };
    margin: ${rem(1)};
    border-radius: 50%;
    border: ${rem(5)} solid ${colorPallete.primary};
    border-color: ${colorPallete.primary} transparent ${colorPallete.primary} transparent;
    animation: ${ dualRing } 1.2s linear infinite;
    }
`;

const LoadingWrapper = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export default LoadingSpinner;