import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MovieSummary from './MovieSummary';

describe('Movie Summary component test', () => {
    const 
        Title = 'Avatar',
        Plot = 'Some plot writen ramdomly',
        Poster = 'http://www.mayimage.com/#123'
    
    
    const wrapper =  shallow(
        <MovieSummary data={{Title, Poster, Plot}} />
    );

    it('should call App snapshot correctly', () => {
        const tree = renderer
            .create(wrapper)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})


