import React from 'react';
import {  Provider } from 'react-redux'
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../../../redux/reducers'
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { MemoryRouter } from "react-router";

//import { initialState } from '../../../redux/reducers/details';
import ConnectedMovieDetail, { MovieDetail } from './MovieDetail';
import movieDetailsApiMock from '../../../mocks/movieDetailsApiMock'

describe('MovieDetails Page tests', () => {
    const initialState = {
        pending: false,
        details: movieDetailsApiMock,
        error: null
    }
    let store = createStore(rootReducer, initialState, applyMiddleware(thunk));

    const wrapper =  mount(
        <Provider store={store}>
            <MemoryRouter>
                <ConnectedMovieDetail />
            </MemoryRouter>
        </Provider>
    );

    it('should render the Movie Details', () => {
        expect(wrapper.find('.movie-details').exists()).toBe(true);
    });

    it('should call MovieDetails snapshot correctly', () => {
        const tree = renderer
            .create(wrapper)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})
