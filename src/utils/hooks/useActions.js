

import { useCallback } from 'react';

import { useDispatch } from 'react-redux';
import {
  searchMovie,
  movieDetails,
  loginUser,
  searchMovieClear,
} from '../../redux/actions';

const useActions = () => {
  const dispatch = useDispatch();

  const searchMovieAction = useCallback(
    data => dispatch(searchMovie(data)),
    [dispatch],
  );

  const searchMovieClearAction = useCallback(
    () => dispatch(searchMovieClear()), [dispatch],
  );

  const movieDetailsAction = useCallback(
    data => dispatch(movieDetails(data)), [dispatch],
  );

  const loginUserAction = useCallback(
    data => dispatch(loginUser(data)), [dispatch],
  );

  return {
    searchMovieAction,
    searchMovieClearAction,
    movieDetailsAction,
    loginUserAction,
  };
};

export default useActions;
