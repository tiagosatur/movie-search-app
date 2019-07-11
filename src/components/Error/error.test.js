import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Error from './Error';

describe('Error tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Error message='Error message' />
    );
  });
  
  it('should render the Error component', () => {
    expect(wrapper.find('.error').exists()).toBe(true);
  });

  it('should call Error snapshot correctly', () => {
    const tree = renderer
        .create(wrapper)
        .toJSON();
    expect(tree).toMatchSnapshot();
    });
})