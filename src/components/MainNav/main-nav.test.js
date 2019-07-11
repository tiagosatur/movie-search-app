import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MainNav from './MainNav';

describe('MainNav tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <MainNav />
    );
  });
  
  it('should render the MainNav element', () => {
    expect(wrapper.find('.main-nav').exists()).toBe(true);
  });

  it('should call MainNav snapshot correctly', () => {
    const tree = renderer
        .create(wrapper)
        .toJSON();
    expect(tree).toMatchSnapshot();
    });
})