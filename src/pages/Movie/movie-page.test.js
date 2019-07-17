import React from 'react';
import {  Provider } from 'react-redux'
import { initialState } from '../../redux/reducers/movie';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ConnectedMovie, { Movie, StyledMovieItem } from './Movie';
import searchMovieApiMock from '../../mocks/searchMovieApiMock';
import {  MemoryRouter, StaticRouter } from "react-router";
import { createStore } from 'redux';
import rootReducer from '../../redux/reducers'

describe('Movie Page tests', () => {
    let store, wrapper;

    beforeEach(() => {
        store = createStore(rootReducer, searchMovieApiMock);
        wrapper =  mount(
            <Provider store={store}>
                <MemoryRouter initialEntries={[ '/movies' ]}>
                    <ConnectedMovie />
                </MemoryRouter>
            </Provider>
        );
    });

    it('should render the Search Form', () => {
        expect(wrapper.find('.search-form').exists()).toBe(true);
    });

    it('should call Movie snapshot correctly', () => {
        const tree = renderer
            .create(wrapper)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})

