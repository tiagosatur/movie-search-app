import * as actions from './movies'
import * as types from '../../utils/actionTypes'
import searchMovieApiMock from '../../mocks/searchMovieApiMock'

describe('redux actions SEARCH MOVIES', () => {
    it('should start the request', () => {
      const expectedAction = {
        type: types.SEARCH_MOVIE_PENDING,
      }
      expect(actions.searchMoviePending()).toEqual(expectedAction)
    })

    it('should make the request and be successfull', () => {
      const expectedAction = {
        type: types.SEARCH_MOVIE_SUCCESS,
        list: searchMovieApiMock
      }
      expect(actions.searchMovieSuccess(searchMovieApiMock)).toEqual(expectedAction)
    })

    it('should make the request and return and error', () => {
      const error = 'Something went wrong';

      const expectedAction = {
        type: types.SEARCH_MOVIE_ERROR,
        error: error
      }
      
      expect(actions.searchMovieError(error)).toEqual(expectedAction)
    })
})

