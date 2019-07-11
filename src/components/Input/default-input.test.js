import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import DefaultInput from './DefaultInput';

describe('DefaultInput tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <DefaultInput />
    ).dive();
  });
  
  it('should render the DefaultInput element', () => {
    expect(wrapper.find('.input').exists()).toBe(true);
  });

  it('should call DefaultInput snapshot correctly', () => {
    const tree = renderer
        .create(wrapper)
        .toJSON();
    expect(tree).toMatchSnapshot();
    });
})