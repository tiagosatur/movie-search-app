import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImage } from '@fortawesome/free-regular-svg-icons'

import useActions from '../../../utils/hooks/useActions';
import { LoadingSpinner } from '../../LoadingSpinner'

const MovieDetail = props => {
    const { match: { params: { imdbID }} } = props;
    const { movieDetailsAction } = useActions();

    useEffect(() => {
        movieDetailsAction(imdbID);
    }, [imdbID])

    const {
        details: {
          details: movieDetails,
          pending,
          error,
        },
    } = useSelector(state => state);

    console.log('moviedetails', movieDetails);

    if(pending) return <LoadingSpinner />
    
    if(error) return <div>
            <p>Oops...</p>
            <h3>{error}</h3>
        </div>

    if(Object.keys(movieDetails).length !== 0) {
        const {
            Actors,
            Awards,
            BoxOffice,
            Country,
            DVD,
            Director,
            Genre,
            Language,
            Metascore,
            Plot,
            Poster,
            Production,
            Rated,
            Ratings,
            Released,
            Response,
            Runtime,
            Title,
            Type,
            Website,
            Writer,
            Year,
            imdbID,
            imdbRating,
            imdbVotes,
        } = movieDetails
        console.log('Ratings', Ratings);

        return( 
            <StyledMovieDetailsWrapper>
                <StyledPosterWrapper>
                    {Poster !== 'N/A' 
                        ? <img src={Poster} alt={Title} /> 
                        : <div>
                            <FontAwesomeIcon icon={faFileImage} style={{fontSize: '100px'}} />
                            <span>Image unnavailable :(</span> 
                        </div>
                    }
                </StyledPosterWrapper>
                <StyledContent>
                    <MovieTitle>{Title}</MovieTitle>

                    <table>
                    <tr><th>IMDB ID</th>     <td>{imdbID}</td> </tr>
                        <tr><th>Actors</th>      <td>{Actors}</td> </tr>
                        <tr><th>Awards</th>      <td>{Awards}</td> </tr>
                        <tr><th>Director</th>      <td>{Director}</td> </tr>
                        <tr><th>Language</th>    <td>{Language}</td></tr>
                        <tr><th>Plot</th>        <td>{Plot}</td></tr>
                        <tr><th>Production</th>  <td>{Production}</td></tr>
                        <tr><th>Rated</th>       <td>{Rated}</td></tr>
                        <tr><th>Ratings</th>     <td>{Ratings.map(Rating => {return <div>{Rating.Source} - {Rating.Value}</div>})}</td></tr>
                        <tr><th>Released</th>    <td>{Released}</td></tr>
                        <tr><th>Response</th>    <td>{Response}</td></tr>
                        <tr><th>Writer</th>      <td>{Writer}</td></tr>
                        <tr><th>Year</th>        <td>{Year}</td></tr>
                        <tr><th>Website</th>     <td><a href={Website}>{Website}</a></td></tr>
                        <tr><th>imdbRating</th>  <td>{imdbRating}</td></tr>
                        <tr><th>imdbVotes</th>  <td>{imdbVotes}</td></tr>
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
`;
const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
`;

const MovieTitle = styled.h2`
    margin-top: 0;
`;

export default MovieDetail;