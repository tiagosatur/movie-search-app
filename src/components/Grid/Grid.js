import React from 'react';
import styled from 'styled-components';
import { rem } from '../../style'

const Grid = ({children}) => <StyledGrid className='grid'>{children}</StyledGrid>

const StyledGrid = styled.div`
    height: 100%;
    padding: ${rem(16)};
    @media(min-width: ${rem(768)}) {
        padding: 0;
        width: 80%;
        margin: 0 auto;
    }
`;

export default Grid;