import * as actions from './details'
import * as types from '../../utils/actionTypes'
import movieDetailsApiMock from '../../mocks/movieDetailsApiMock'

describe('redux actions DETAILS', () => {
    it('should start the request', () => {
      const expectedAction = {
        type: types.MOVIE_DETAILS_PENDING,
      }
      expect(actions.movieDetailsPending()).toEqual(expectedAction)
    })

    it('should make the request and be successfull', () => {
      const expectedAction = {
        type: types.MOVIE_DETAILS_SUCCESS,
        details: movieDetailsApiMock
      }
      expect(actions.movieDetailsSuccess(movieDetailsApiMock)).toEqual(expectedAction)
    })    

    it('should make the request and return and error', () => {
      const error = 'Something went wrong';

      const expectedAction = {
        type: types.MOVIE_DETAILS_ERROR,
        error: error
      }
      
      expect(actions.movieDetailsError(error)).toEqual(expectedAction)
    })
})

