import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Dashboard from './Dashboard';

describe('Dashboard tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
     <Dashboard />
    ).dive();
  });
  
  it('should render the Dashboard element', () => {
    expect(wrapper.find('.dashboard').exists()).toBe(true);
  });

  it('should call Dashboard snapshot correctly', () => {
    const tree = renderer
        .create(wrapper)
        .toJSON();
    expect(tree).toMatchSnapshot();
    });
})