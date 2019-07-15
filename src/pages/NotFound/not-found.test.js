import React from 'react';
import {  Provider } from 'react-redux'
import { initialState } from '../../redux/reducers/movie';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import NotFound from './NotFound';
import { StaticRouter } from "react-router";

import { createStore } from 'redux';
import rootReducer from '../../redux/reducers'

describe('NotFound Page tests', () => {
    let store = createStore(rootReducer, initialState);
    
    const wrapper =  mount(
        <Provider store={store}>
            <StaticRouter>
                <NotFound />
            </StaticRouter>
        </Provider>
    )

    it('should call NotFound snapshot correctly', () => {
        const tree = renderer
            .create(wrapper)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})
