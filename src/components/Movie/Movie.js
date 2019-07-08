import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';

import useActions from '../../utils/hooks/useActions';
import { LoadingSpinner } from '../LoadingSpinner'
import { DefaultInput } from '../Input'
import useFormInput from '../../utils/hooks/useFormInput';
import { MovieDetail } from './MovieDetail'
import { MovieSummary } from './MovieSummary'
import { Button } from '../Button';
import { Modal } from '../Modal';
import { rem } from '../../style';

const Movie = ({ match }) => {
    const [ showModal, setShowModal ] = useState(false);
    const { searchMovieAction } = useActions();
    const { values, handleInputChange } = useFormInput({
      searchValue: '',
    });
    
    const {
        movie: {
          movie,
          totalResults,
          pending,
          error,
        },
    } = useSelector(state => state);
    
    const handleSubmit = (e) => {
      e.preventDefault()
      const { searchValue } = values;

      if(searchValue) {
        searchMovieAction(searchValue);
      }
     
    }

    const toggleModal = () => {
      setShowModal(!showModal);
    }

    return (
        <>
            <div>
              <StyledForm onSubmit={handleSubmit}>
                <DefaultInput 
                    name='searchValue' 
                    value={values.searchValue}
                    placeholder='Search a movie...'
                    handleChange={handleInputChange} 
                  />
                <Button solid rounded right >Search</Button>
              </StyledForm>
            </div>

            { pending && <LoadingSpinner medium />}

            { error && (
                  <div>
                    <p>Oops...</p>
                    <h3>{error}</h3>
                  </div>
                )
            }

            { movie && movie.length > 0 && !pending && !error && (
              <p>
                We found <strong>{ totalResults }</strong>
                {totalResults == 1 ? ' result' : ' results'}
              </p>
            )}

            <StyledMovies>
            
              {movie && movie.map((m) => {
                  const { Title, Poster, Plot, imdbID } = m

                  return(
                    <StyledMovieItem>
                      <Link to={`${match.url}/${imdbID}`} key={imdbID+1} onClick={setShowModal}>
                        <MovieSummary data={{Title, Poster, Plot}} />
                      </Link>
                      <Modal handleClose={toggleModal} show={showModal}>
                        <Route
                          exact
                          path={`${ match.path }/:imdbID`}
                          render={(props) => <MovieDetail data={movie} {...props} /> }
                        />
                      </Modal>
                    </StyledMovieItem>
                  )
                })
              }
            </StyledMovies>
        </>
    )
    
}

const StyledMovies = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const StyledMovieItem = styled.div`
  margin: ${rem(16)};
  width: 20%;
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin: ${rem(100)} auto 0 auto;
  width: 50%;

  .input {
    flex-grow: 1;
  }
  .button {

  }
`;


export default Movie;