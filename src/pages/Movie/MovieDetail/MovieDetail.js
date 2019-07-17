import React, { useEffect } from 'react';
import { withRouter } from "react-router";
import styled from 'styled-components';
import { useSelector, connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImage } from '@fortawesome/free-regular-svg-icons'
import uniqid from 'uniqid';

import useActions from '../../../utils/hooks/useActions';
import { movieDetails } from '../../../redux/actions'
import { LoadingSpinner } from '../../../components'
import { colorPallete, rem } from '../../../style'

export const MovieDetail = props => {
    const {
        match,
        match: { params: { imdbID }},
        movieDetailsAction,
        movieDetails,
        pending,
        error,
    } = props;

   /*  
    const { movieDetailsAction } = useActions();
    const {
        details: {
          details: movieDetails,
          pending,
          error,
        },
    } = useSelector(state => state); 
    */

    useEffect(() => {
        movieDetailsAction(imdbID);
    }, [imdbID])

    if(pending) return <LoadingSpinner />
    
    if(error) return <div>
            <p>Oops...</p>
            <h3>{error}</h3>
        </div>

    if(Object.keys(movieDetails).length !== 0) {
        const {
            Actors,
            Awards,
            Country,
            Director,
            Genre,
            Language,
            Plot,
            Poster,
            Production,
            Rated,
            Ratings,
            Released,
            Runtime,
            Title,
            Website,
            Writer,
            Year,
            imdbID,
            imdbRating,
        } = movieDetails

        return( 
            <StyledMovieDetailsWrapper key={uniqid()} className='movie-details'>
                <StyledPosterWrapper>
                    {Poster !== 'N/A' 
                        ? <StyledImg src={Poster} alt={Title} /> 
                        : <SVGWrapper>
                            <FontAwesomeIcon icon={faFileImage} style={{fontSize: '100px'}} />
                            <span>Image unnavailable :(</span> 
                        </SVGWrapper>
                    }
                </StyledPosterWrapper>
                <StyledContent>
                    <MovieTitle>{Title}</MovieTitle>

                    <table>
                        <tbody>
                            <tr><th>IMDB ID</th><td>{imdbID}</td></tr>
                            <tr><th>Actors</th><td>{Actors}</td></tr>
                            <tr><th>Awards</th><td>{Awards}</td></tr>
                            <tr><th>Country</th><td>{Country}</td></tr>
                            <tr><th>Director</th><td>{Director}</td></tr>
                            <tr><th>Genre</th><td>{Genre}</td></tr>
                            <tr><th>Language</th><td>{Language}</td></tr>
                            <tr><th>Plot</th><td>{Plot}</td></tr>
                            <tr><th>Production</th><td>{Production}</td></tr>
                            <tr><th>Rated</th><td>{Rated}</td></tr>
                            <tr><th>Ratings</th><td>{Ratings && Ratings.map(Rating => {return <div key={uniqid()}>{Rating.Source} - {Rating.Value}</div>})}</td></tr>
                            <tr><th>Released</th><td>{Released}</td></tr>
                            <tr><th>Runtime</th><td>{Runtime}</td></tr>
                            <tr><th>Writer</th><td>{Writer}</td></tr>
                            <tr><th>Year</th><td>{Year}</td></tr>
                            <tr><th>Website</th><td><a href={Website}>{Website}</a></td></tr>
                            <tr><th>imdbRating</th><td>{imdbRating}</td></tr>
                        </tbody>
                    </table>
                    
                </StyledContent>
            </StyledMovieDetailsWrapper>
        )
    } else {
        return <h2>Nothing encountered</h2>
    }
}

const StyledMovieDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media(min-width: 768px) {
        flex-direction: row;
    }
`;

const StyledPosterWrapper = styled.div`
    margin-right: 16px;

    @media(min-width: 768px) {
        width: 30%;
    }
`;
const StyledImg = styled.img`
    width: 100%;
    height: auto;
`;

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;

    @media(min-width: 768px) {
        width: 60%;
    }
`;

const MovieTitle = styled.h2`
  
    background: ${colorPallete.primaryGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: 0;
`;

const SVGWrapper = styled.div`
    align-items: center;
    color: ${colorPallete.light[67]};
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: ${rem(16)};

    svg {
        color: ${colorPallete.light[87]};
        margin-bottom: ${rem(24)};
    }
`;

const mapStateToProps = state => {
    return {
        movieDetails: state.details.details,
        pending: state.details.pending,
        error: state.details.error,
    }
};
  
const mapDispatchToProps = dispatch => ({
    movieDetailsAction: imdbID => dispatch(movieDetails(imdbID))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(MovieDetail));