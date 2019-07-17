import api from './api';
import searchMovieApiMock from '../mocks/searchMovieApiMock'
import movieDetailsApiMock from '../mocks/movieDetailsApiMock';

describe('API requests', () => {
  it('should fetch a list of movies with the passed search query', async () => {
    await api.movie.search('batman')
    .then(data => {
      expect(data).toBeDefined()
      expect(data.Search).toEqual(searchMovieApiMock.list)
    })
  })

  it('should fetch movie details by a passed ID', async () => {
    await api.movie.details('tt2975590')
    .then(data => {
      expect(data).toBeDefined()
      expect(data).toEqual(movieDetailsApiMock)
    })
  })
})