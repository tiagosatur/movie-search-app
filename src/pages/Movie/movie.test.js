import React from 'react';
import configureStore from 'redux-mock-store'
import { useStore, Provider } from 'react-redux'
import { initialState } from '../../redux/reducers/movie';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Movie from './Movie';

describe('Movie Page tests', () => {
    let wrapper;
    const mockStore = configureStore()

    const props = {};
    beforeEach(() => {
        let store = mockStore(initialState)
        wrapper = mount(
            <Provider store={mockStore}>
                <Movie /> 
            </Provider>
        );
    });

    it('should render the Movie Page', () => {
        expect(wrapper.find('.movie').exists()).toBe(true);
    });

    it('should call Movie snapshot correctly', () => {
        const tree = renderer
            .create(wrapper)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})