import movie, { initiaState } from './index'
import * as types from '../../utils/actionTypes'
import { initialState } from './movie';
import searchMovieApiMock from '../mocks/searchMovieApiMock';

describe('reducers', () => {
    it('should return the next state and be successfull', () => {
      
      const action = {
        type: types.SEARCH_MOVIE_SUCCESS,
        movie: searchMovieApiMock
      }

      const expectedState = {
        movie: {
            ...initialState,
            pending: false,
            movie: searchMovieApiMock.Search,
            totalResults: searchMovieApiMock.totalResults,
        },
        details: {
          pending: false,
          details: {},
          error: null
        },
        user: {
            pending: false,
            isLogged: false,
            user: {},
            error: null
        }
      }

      expect(movie(initiaState, action)).toEqual(expectedState)
    });


    it('should return the next state and have an error', () => {
      
      const error = 'Nothing was returned'

      const action = {
        type: types.SEARCH_MOVIE_ERROR,
        error: error
      }

      const expectedState = {
        movie: {
            ...initialState,
            movie: [],
            pending: false,
            totalResults: 0,
            error: error
        },
        details: {
          pending: false,
          details: {},
          error: null
        },
        user: {
            pending: false,
            isLogged: false,
            user: {},
            error: null
        }
      }

      expect(movie(initiaState, action)).toEqual(expectedState)
    });
})

