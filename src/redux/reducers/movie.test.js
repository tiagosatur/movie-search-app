import { movie, initialState } from './movie'
import * as types from '../../utils/actionTypes'
import searchMovieApiMock from '../../mocks/searchMovieApiMock';

describe('MOVIE SEARCH reducer', () => {
    it('returns initial state', () => {
      expect(movie(undefined, initialState)).toEqual(initialState);
    });

    it('should return the next state and be successfull', () => {
      const action = {
        type: types.SEARCH_MOVIE_SUCCESS,
        list: searchMovieApiMock
      }

      const expectedState = {
        ...initialState,
        pending: false,
        list: searchMovieApiMock.Search,
        totalResults: searchMovieApiMock.totalResults,
        
      }

      expect(movie(initialState, action)).toEqual(expectedState)
    });

    it('should return the next state and have an error', () => {
      const error = 'Nothing was returned'
      const action = {
        type: types.SEARCH_MOVIE_ERROR,
        error: error
      }

      const expectedState = {
          ...initialState,
          list: [],
          pending: false,
          totalResults: 0,
          error: error
      };

      expect(movie(initialState, action)).toEqual(expectedState)
    });
})

