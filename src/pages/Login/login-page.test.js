import React from 'react';
import {  Provider } from 'react-redux'
import { initialState } from '../../redux/reducers/user';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ConnectedLogin, { Login } from './Login';
import { MemoryRouter } from "react-router";
import { createStore } from 'redux';
import rootReducer from '../../redux/reducers'
import { spy } from 'sinon';
import { act } from 'react-dom/test-utils';

describe('Login Page tests', () => {
    let store = createStore(rootReducer, initialState);
    const callback = spy();

    const x = shallow(
        <Provider store={store}>
            <MemoryRouter initialEntries={[ '/login' ]}>
                <Login />
            </MemoryRouter>
        </Provider>
    ).dive();
    
    const wrapper = mount(
        <Provider store={store}>
            <MemoryRouter initialEntries={[ '/login' ]}>
                <ConnectedLogin />
            </MemoryRouter>
        </Provider>
    );

    it('should render the Search Form', () => {
        expect(wrapper.find('.login-page').exists()).toBe(true);
    });
    
    it('should call Login Page snapshot correctly', () => {
        const tree = renderer
            .create(wrapper)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should call onSubmit function when form is submitted', () => {
        const form = wrapper.find('form').at(0);
        const children = form.render().children().children();
        form.simulate('submit', { target: { children } });
    });

    it('should have two input fields', () => {
        expect(wrapper.find('input').length).toBe(2);
    });

    it('should have one submit button', () => {
        expect(wrapper.find('button').length).toBe(1);
    });
      
})
