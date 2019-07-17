import React from 'react';
import {  Provider } from 'react-redux'
import { initialState } from '../../../redux/reducers/details';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ConnectedMovieDetail, { MovieDetail } from './MovieDetail';
import searchMovieApiMock from '../../../mocks/searchMovieApiMock';
import {  MemoryRouter, StaticRouter } from "react-router";
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../../../redux/reducers'
import thunk from 'redux-thunk';


describe('MovieDetail Page tests', () => {
    let store, wrapper;
    const props ={
        imdbID: 'tt2975590'
    }

    beforeEach(() => {
        store = createStore(rootReducer, searchMovieApiMock, applyMiddleware(thunk));
        wrapper =  mount(
            <Provider store={store}>
                <MemoryRouter>
                    <ConnectedMovieDetail {...props} />
                </MemoryRouter>
            </Provider>
        );
    });

    it('should render the MovieDetail', () => {
        expect(wrapper.find('.movie-details').exists()).toBe(true);
      });

    it('should call MovieDetail snapshot correctly', () => {
        const tree = renderer
            .create(wrapper)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})

