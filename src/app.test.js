import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import App from './App';
import { NotFound } from './pages';
import {  MemoryRouter } from "react-router";

describe('App Page tests', () => {
    
    const wrapper =  mount(
        <MemoryRouter initialEntries={[ '/' ]}>
            <App />
        </MemoryRouter>

    )

    it('should call App snapshot correctly', () => {
        const tree = renderer
            .create(wrapper)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('invalid path should redirect to 404/NotFound page', () => {
        const wrapper =  mount(
            <MemoryRouter initialEntries={[ '/ramdom123' ]}>
                <App />
            </MemoryRouter>
    
        )
        expect(wrapper.find(NotFound)).toHaveLength(1);
    });

})


