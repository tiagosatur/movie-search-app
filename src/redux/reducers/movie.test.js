import movie, { initiaState } from './index'
import * as types from '../../utils/actionTypes'
import { initialState } from './movie';

const movieSearchMock = {"Search":[{"Title":"Chuck Norris vs. Communism","Year":"2015","imdbID":"tt2442080","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjEyZmRkNGYtYjEyOC00NmE5LWIxNzQtZjFjZDU1YWVjZjM5XkEyXkFqcGdeQXVyNDgxMDU4NTU@._V1_SX300.jpg"},{"Title":"Chuck Norris: Karate Kommandos","Year":"1986","imdbID":"tt0165166","Type":"series","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BZDhkZjkyNmEtNDY4MS00YjIyLWIxNWMtODMyZTBmMWEyZjQ1XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg"},{"Title":"Chuck Norris: Private Lesson","Year":"1997","imdbID":"tt0218888","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTg2MzkxNDQ1N15BMl5BanBnXkFtZTcwNDA3NzgxMQ@@._V1_SX300.jpg"},{"Title":"Hank Schrader: What Happens Next with Dean Norris","Year":"2013","imdbID":"tt3260354","Type":"movie","Poster":"N/A"},{"Title":"Spoogie Norris: Fecalologist","Year":"2005","imdbID":"tt0465077","Type":"movie","Poster":"N/A"},{"Title":"Dean Norris Spoils Everything Else","Year":"2013","imdbID":"tt3138426","Type":"movie","Poster":"N/A"},{"Title":"Mike Tyson vs. Orlin Norris","Year":"1999","imdbID":"tt3353774","Type":"movie","Poster":"N/A"},{"Title":"Chuck Norris: The Man, His Music","Year":"1987","imdbID":"tt3550028","Type":"movie","Poster":"N/A"},{"Title":"Norris & Black: The Series","Year":"2015–","imdbID":"tt4949874","Type":"series","Poster":"N/A"},{"Title":"The Late Hour Show with Clint Norris","Year":"2014–","imdbID":"tt5083840","Type":"series","Poster":"N/A"}],"totalResults":"17","Response":"True"}

describe('reducers', () => {
    it('should return the next state and be successfull', () => {
      
      const action = {
        type: types.SEARCH_MOVIE_SUCCESS,
        movie: movieSearchMock
      }

      const expectedState = {
        movie: {
            ...initialState,
            pending: false,
            movie: movieSearchMock.Search,
            totalResults: movieSearchMock.totalResults,
        }
      }

      expect(movie(initiaState, action)).toEqual(expectedState)
    })
})

