

import { useCallback } from 'react';

import { useDispatch } from 'react-redux';
import {
  searchMovie,
} from '../../redux/actions/movies';

const useActions = () => {
  const dispatch = useDispatch();

  const searchMovieAction = useCallback(
    data => dispatch(searchMovie(data)),
    [dispatch],
  );
  return {
    searchMovieAction,
  };
};

export default useActions;
