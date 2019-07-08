import { combineReducers } from 'redux'
import {movie} from './movie'
import {details} from './details'
import {user} from './user'

export default combineReducers ({
    movie,
    details,
    user,
})