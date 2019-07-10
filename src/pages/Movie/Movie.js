import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';

import useActions from '../../utils/hooks/useActions';
import { 
  Button, DefaultInput, Modal, Error, LoadingSpinner 
} from '../../components'
import useFormInput from '../../utils/hooks/useFormInput';
import { MovieDetail } from './MovieDetail'
import { MovieSummary } from './MovieSummary'
import { rem } from '../../style';
import uniqueId from '../../utils/uniqueId'

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

            { error && <Error message={error} /> }

            { movie && movie.length > 0 && !pending && !error && (
              <p>
                We found <strong>{ totalResults }</strong>
                {totalResults == 1 ? 'result!' : ' results!'}
              </p>
            )}

            <StyledMovies>
            
              {movie && movie.map((m) => {
                  const { Title, Poster, Plot, imdbID } = m

                  return(
                    <StyledMovieItem key={uniqueId()}>
                      <Link to={`${match.url}/${imdbID}`} onClick={setShowModal}>
                        <MovieSummary data={{Title, Poster, Plot}} />
                      </Link>
                      
                    </StyledMovieItem>
                  )
                })
              }
              <Modal handleClose={toggleModal} show={showModal}>
                        <Route
                          exact
                          path={`${ match.path }/:imdbID`}
                          render={(props) => <MovieDetail data={movie} {...props} /> }
                        />
                      </Modal>
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
  margin: ${rem(20)} auto 0 auto;
  width: 100%;

  @media(min-width: ${rem(768)}) {
    margin: ${rem(100)} auto 0 auto;
    width: 50%;
  }

  .input {
    flex-grow: 1;
  }
  .button {

  }
`;


export default Movie;