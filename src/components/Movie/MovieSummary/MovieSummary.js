import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImage } from '@fortawesome/free-regular-svg-icons'
import styled, { css } from 'styled-components';
import colorPallete from '../../../style/variables/colorPallete'

const MovieSummary = props => {
    const {
        data: {
            Title,
            Plot,
            Poster
        },
    } = props;

    return (
        <StyledMovieSummary>
            <div>
                {Poster !== 'N/A' 
                    ? <StyledSmallImage src={Poster} alt={Title} /> 
                    : <div>
                        <FontAwesomeIcon icon={faFileImage} style={{fontSize: '100px'}} />
                    </div>
                }
            </div>
            <div>
                <StyledMovieTytle>{ Title }</StyledMovieTytle>
                <p>{ Plot }</p>
            </div>
        </StyledMovieSummary>
    );
}

const StyledMovieSummary = styled.div`
    color: ${colorPallete.light[20]};
    display: flex;
    text-decoration: none;

    svg {
        color: ${colorPallete.light[80]};
    }
`;

const StyledSmallImage = styled.img`
    height: auto;
    width: 100px;

`;

const StyledMovieTytle = styled.h2`
    margin-top: 0;
`;

const textBase = css`
  font-size: 14px;
  text-decoration: none;
`;

export default MovieSummary;