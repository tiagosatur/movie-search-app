import React from 'react';
import styled from 'styled-components';
import { colorPallete } from '../../style';

const Error = props => {
  const {
    message
  } = props;

  return (
    <>
        <p>Oops...</p>
        <StyledError>{message}</StyledError>
    </>

  );
};

const StyledError = styled.h3`
    color: ${colorPallete.light[33]};
    font-size: 24px;
`;

export default Error;
