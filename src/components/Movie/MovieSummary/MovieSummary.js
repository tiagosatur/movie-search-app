import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImage } from '@fortawesome/free-regular-svg-icons'
import styled, { css } from 'styled-components';
import { colorPallete, rem } from '../../../style'

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
            <StyledPosterWrapper>
                {Poster !== 'N/A' 
                    ? <StyledSmallImage src={Poster} alt={Title} /> 
                    : <div>
                        <FontAwesomeIcon icon={faFileImage} style={{fontSize: '100px'}} />
                    </div>
                }
            </StyledPosterWrapper>
            <div>
                <StyledTitle>{ Title }</StyledTitle>
                <p>{ Plot }</p>
            </div>
        </StyledMovieSummary>
    );
}

const StyledMovieSummary = styled.div`
    color: ${colorPallete.light[20]};
    border: ${rem(1)} solid ${colorPallete.light[96]};
    display: flex;
    flex-direction: column;
    text-decoration: none;
    transition: all .5s;

    &:hover {
        background: ${colorPallete.light[98]};
        box-shadow: 0 ${rem(10)} ${rem(15)} ${rem(-3)} rgba(0, 0, 0, 0.1), 0 ${rem(4)} ${rem(6)} ${rem(-2)} rgba(0, 0, 0, 0.05);
    }

    }
    svg {
        color: ${colorPallete.light[80]};
    }
`;
const StyledPosterWrapper = styled.div`
    max-height: ${rem(370)};
    overflow: hidden;
`;

const StyledSmallImage = styled.img`
    height: auto;
    width: 100%;
    transition: opacity .5s;

    &:hover {
        opacity: .8;
    }

`;

const StyledTitle = styled.h2`
    font-size: ${rem(16)};
    font-weight: 600;
    padding: ${rem(16)} ${rem(8)};
`;

const textBase = css`
  font-size: 14px;
  text-decoration: none;
`;

export default MovieSummary;