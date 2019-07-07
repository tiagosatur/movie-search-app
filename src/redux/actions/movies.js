import jsonPlaceholder from '../../api/jsonPlaceholder'
import { 
    SEARCH_MOVIE_PENDING,
    SEARCH_MOVIE_SUCCESS,
    SEARCH_MOVIE_ERROR,
} from '../../utils/actionTypes';

//Action creator
/*
export const fetchPosts = async () => {

        Bad approach! You're breaking the rule of an action creator
        Its not returning a plain object, because of async/await syntax
        The first time the action creator is called, it returns this request
        react-redux doesnt wanna that.
        because it would dispatch(jsonPlaceholder.get('/posts'))
   
        const response = await jsonPlaceholder.get('/posts');
   
    return {
        type: 'FETCH_POSTS',
        payload: response
    }
}

What if we remove the async-away syntax? We would be making a promise.
A promise because we'd be making a request to the API. This would take some
amount of time. What gets returned and assigned to the variable is a promise object.
Instead of having some data back (like the async-await), we get a promise object,
that is goining to give us access to our data when eventually get some data in the future.
In this approach, the error message goes away. But it now work as you expect.
The process of calling a action, dispatching and calling the reducer is much faster
than the API response.

export const fetchPosts = () => {
        const promise = jsonPlaceholder.get('/posts');
   
    return {
        type: 'FETCH_POSTS',
        payload: promise
    }
}

So, this are the two reasons why these two kings of action creators dot not work as intended:
    1) action creators must return plain objects with a type property.
    2) By the time our action gets to a reducer, we won't have fetch our data.


redux-thunk makes possible to return an object or a function. If its an action,
it will just return it. If it is a function, it makes possible to access all store 
data via getState, and dispatch manually an action via dispatch. Because that, 
we can use async/await syntax.


 */


 export const fetchPosts = () =>  async (dispatch) => {
         const response = await jsonPlaceholder.get('/posts');
         console.log('POSTS', response);
         dispatch({ type: 'FETCH_POSTS', payload: response })
     }


function searchMoviePending() {
    return {
        type: SEARCH_MOVIE_PENDING
    }
}

export function searchMovieSuccess(movie) {    
    return {
        type: SEARCH_MOVIE_SUCCESS,
        movie
    }
}

function searchMovieError(error) {
    return {
        type: SEARCH_MOVIE_ERROR,
        error: error
    }
}

export const searchMovie = (query) => (dispatch) => {
    dispatch(searchMoviePending());
    
    fetch(`http://www.omdbapi.com/?apikey=1244f9a6&s=${query}&page=1`)
    // fetch('http://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then(res => {
        if(res.Response == 'False') {
            throw(res.Error)
        }
        //console.log('result', JSON.stringify(res));
        //dispatch(searchMovieSuccess(res.Search))
        dispatch(searchMovieSuccess(res))

    })
    .catch(error => {
        dispatch(searchMovieError(error));
    })
}