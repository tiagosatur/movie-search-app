import { details, initialState } from './details'
import * as types from '../../utils/actionTypes'
import movieDetailsApiMock from '../../mocks/movieDetailsApiMock';

describe('DETAILS reducer', () => {
    it('should return the next state and be successfull', () => {
      
      const action = {
        type: types.MOVIE_DETAILS_SUCCESS,
        details: movieDetailsApiMock
      }

      const expectedState = {
        ...initialState,
        pending: false,
        details: movieDetailsApiMock,
      }

      expect(details(initialState, action)).toEqual(expectedState)
    });


    it('should return the next state and have an error', () => {
      
      const error = 'Api returned an error'

      const action = {
        type: types.MOVIE_DETAILS_ERROR,
        error: error
      }

      const expectedState = {
          ...initialState,
          details: {},
          pending: false,
          error: error
      };

      expect(details(initialState, action)).toEqual(expectedState)
    });
})

