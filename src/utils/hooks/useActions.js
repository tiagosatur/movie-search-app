

import { useCallback } from 'react';

import { useDispatch } from 'react-redux';
import {
  searchMovie,
  movieDetails,
} from '../../redux/actions';

const useActions = () => {
  const dispatch = useDispatch();

  const searchMovieAction = useCallback(
    data => dispatch(searchMovie(data)),
    [dispatch],
  );

  const movieDetailsAction = useCallback(
    data => dispatch(movieDetails(data)), [dispatch],
  );

  return {
    searchMovieAction,
    movieDetailsAction,
  };
};

export default useActions;
