import * as actions from './movies'
import * as types from '../../utils/actionTypes'
import searchMovieApiMock from '../mocks/searchMovieApiMock'

describe('actions', () => {
    it('should make the request and be successfull', () => {
      const query = 'chan'
      const expectedAction = {
        type: types.SEARCH_MOVIE_SUCCESS,
        movie: searchMovieApiMock
      }
      expect(actions.searchMovieSuccess(searchMovieApiMock)).toEqual(expectedAction)
    })
})
