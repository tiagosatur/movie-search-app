import React from 'react';
import {  Provider } from 'react-redux'
import { initialState } from '../../redux/reducers/movie';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ConnectedMovie, { Movie } from './Movie';

import {  MemoryRouter, StaticRouter } from "react-router";

import { createStore } from 'redux';
import rootReducer from '../../redux/reducers'

describe('Movie Page tests', () => {
    let store = createStore(rootReducer, initialState);
    let props;

    beforeEach(() => {
        props = {
            movie: {
                pending: false,
                list: [],
                totalResults: 0,
                error: null
            }
        };
    });
    
    const wrapper =  mount(
        <Provider store={store}>
            <MemoryRouter initialEntries={[ '/movies' ]}>
                <ConnectedMovie />
            </MemoryRouter>
        </Provider>
    )

    it('should render the Search Form', () => {
        expect(wrapper.find('.search-form').exists()).toBe(true);
      });

    it('should call Movie snapshot correctly', () => {
        const tree = renderer
            .create(wrapper)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should return search results when form is subbmited', () => {
        const query = 'mary';
        const searchAction = store.dispatch(actions.searchMovie(mary))
        console.log('ACTIONS', searchAction());
        /* wrapper.find('button.button').simulate('click');
        expect(searchMovies).toHaveBeenCalledTimes(1); */
      });
})

