import React from 'react';
import {  Provider } from 'react-redux'
import { initialState } from '../../redux/reducers/movie';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ConnectedLogin, {Login} from './Login';
import {  StaticRouter, MemoryRouter } from "react-router";
import { createStore } from 'redux';
import rootReducer from '../../redux/reducers'

describe('Login Page tests', () => {
    let store = createStore(rootReducer, initialState);
    
    const wrapper =  mount(
        <Provider store={store}>
            <StaticRouter initialEntries={[ '/login' ]}>
                <ConnectedLogin />
            </StaticRouter>
        </Provider>
    )

    it('should call Login snapshot correctly', () => {
        const tree = renderer
            .create(wrapper)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})
