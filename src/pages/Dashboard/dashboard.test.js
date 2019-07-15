import React from 'react';
import {  Provider } from 'react-redux'
import { initialState } from '../../redux/reducers/movie';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ConnectedDashboard, { Dashboard } from './Dashboard';
import { StaticRouter } from "react-router";

import { createStore } from 'redux';
import rootReducer from '../../redux/reducers'

describe('Dashboard Page tests', () => {
    let store = createStore(rootReducer, initialState);
    
    const wrapper =  mount(
        <Provider store={store}>
            <StaticRouter>
                <ConnectedDashboard />
            </StaticRouter>
        </Provider>
    )

    it('should call Dashboard snapshot correctly', () => {
        const tree = renderer
            .create(wrapper)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})
