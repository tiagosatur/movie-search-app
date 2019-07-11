import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Input from './Input';
import { stub } from 'sinon';

const register = stub();

describe('Input tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Input 
        name='username' 
        id='input-username'
        register={
          register({ required: true })
        }
        errors={{ username: { message: 'x', pattern: 'x' }}} />
    ).dive();
  });
  
  it('should render the Input element', () => {
    expect(wrapper.find('.input').exists()).toBe(true);
  });

  it('should call Input snapshot correctly', () => {
    const tree = renderer
        .create(wrapper)
        .toJSON();
    expect(tree).toMatchSnapshot();
    });
})