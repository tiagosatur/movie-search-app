import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Home from './Home';
import {  StaticRouter } from "react-router";

describe('Home Page tests', () => {
    const wrapper =  shallow(
        <StaticRouter>
            <Home />
        </StaticRouter>
    )

    it('should call Home snapshot correctly', () => {
        const tree = renderer
            .create(wrapper)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})
