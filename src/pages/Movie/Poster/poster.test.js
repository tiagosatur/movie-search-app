import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Poster from './Poster';

describe('Poster component test', () => {
    const wrapper =  shallow(
        <Poster />
    );

    it('should call App snapshot correctly', () => {
        const tree = renderer
            .create(wrapper)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})


