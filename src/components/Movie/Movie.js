import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, Route } from 'react-router-dom';

import useActions from '../../utils/hooks/useActions';
import LoadingSpinner from '../LoadingSpinner'
import { DefaultInput } from '../Input'
import useFormInput from '../../utils/hooks/useFormInput';
import { MovieDetail } from './MovieDetail'
import { MovieSummary } from './MovieSummary'

import { textDecorationNone } from '../../style/helpers/text'

const Movie = ({ match }) => {

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

    return (
        <>
            <h3>Movie search</h3>
            <div>
              <form onSubmit={handleSubmit}>
                <DefaultInput 
                    name='searchValue' 
                    value={values.searchValue}
                    handleChange={handleInputChange} 
                  />
                <button type='submit'>Search</button>
              </form>
            </div>

            { pending && <LoadingSpinner />}

            { error && (
                  <div>
                    <p>Oops...</p>
                    <h3>{error}</h3>
                  </div>
                )
            }

            {movie && movie.length > 0 && !pending && !error && (
              <p>
                We found <strong>{ totalResults }</strong>
                {totalResults == 1 ? ' result' : ' results'}
              </p>
            )}
            
            {movie && movie.map((m) => {
                const { Title, Poster, Plot, imdbID } = m

                return(
                  <Link to={`${match.url}/${imdbID}`} key={imdbID}>
                    <MovieSummary data={{Title, Poster, Plot}} />
                  </Link>
                )
              })
            }


            <Route
                  exact
                  path={`${ match.path }/:imdbID`}
                  render={(props) => <MovieDetail data={movie} {...props} /> }
              />
    
        </>
    )
    
}

export default Movie;