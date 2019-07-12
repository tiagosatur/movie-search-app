import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Movie from './Movie';

describe('Movie Page tests', () => {
    let wrapper;
    const props = {};
    beforeEach(() => {
        wrapper = shallow(
            <Movie /> 
        ).dive();
    });

    it('should render the Movie Page', () => {
        expect(wrapper.find('.Movie').exists()).toBe(true);
    });

    it('should call Movie snapshot correctly', () => {
        const tree = renderer
            .create(wrapper)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})