import React from 'react';
import {  Provider } from 'react-redux'
import { initialState } from '../../redux/reducers/movie';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Home from './Home';
import {  MemoryRouter, StaticRouter } from "react-router";

import { createStore } from 'redux';
import rootReducer from '../../redux/reducers'

describe('Home Page tests', () => {
    let store = createStore(rootReducer, initialState);
    
    const wrapper =  mount(
        <Provider store={store}>
            <StaticRouter>
                <Home />
            </StaticRouter>
        </Provider>
    )

    it('should call Home snapshot correctly', () => {
        const tree = renderer
            .create(wrapper)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})
