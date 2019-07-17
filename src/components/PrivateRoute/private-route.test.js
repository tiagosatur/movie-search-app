import React from 'react';
import {  Provider } from 'react-redux'
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import PrivateRoute from './PrivateRoute';
import {  MemoryRouter, Route } from "react-router";
import { DashBoard } from '../../pages'
import { createStore } from 'redux';
import rootReducer from '../../redux/reducers'
import { initialState } from '../../redux/reducers/movie';

describe('<PrivateRoute /> tests', () => {
    let isLogged;
    let store = createStore(rootReducer, initialState);
    
    const wrapper = mount(
        <Provider store={store}>
            <MemoryRouter initialEntries={['/dashboard']}>
                <PrivateRoute path='/dashboard' component={DashBoard} />
            </MemoryRouter>
        </Provider>
    );

    it('renders correctly', () => {
        expect(wrapper).toBeDefined();
    });

    it('should not go to a private component', () => {
        isLogged = false;
        expect(wrapper.find('.dashboard').length).toEqual(0)
    });

})


