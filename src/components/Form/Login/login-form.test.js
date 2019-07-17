import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import LoginForm  from './LoginForm';
import { spy } from 'sinon';

describe('LoginForm tests', () => {
  let wrapper;
  const callback = spy();

  beforeEach(() => {
    wrapper = mount(
      <LoginForm onSubmit={ callback }></LoginForm>
    );
  });
  
  it('should render the LoginForm', () => {
    expect(wrapper.find('.login-form').exists()).toBe(true);
  });
 
  it('should call LoginForm snapshot correctly', () => {
    const tree = renderer
        .create(wrapper)
        .toJSON();
    expect(tree).toMatchSnapshot();
  });
})