import React from 'react';
import styled from 'styled-components';
import dualRing from '../../style/animations/dualRinrg';
import colorPallete from '../../style/variables/colorPallete';

const LoadingSpinner = () => (
    <StyledLoadingSpinner />
);

const StyledLoadingSpinner = styled.div`
  display: inline-block;
  width: 64px;
  height: 64px;

    &:after {
    content: " ";
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid ${colorPallete.black};
    border-color: ${colorPallete.black} transparent ${colorPallete.black} transparent;
    animation: ${ dualRing } 1.2s linear infinite;
    }


`;

export default LoadingSpinner;