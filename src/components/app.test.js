import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import App from './App';

describe('App tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App />
    );
  });
  
  it('should render the App element', () => {
    expect(wrapper.find('.app').exists()).toBe(true);
  });

  it('should call App snapshot correctly', () => {
    const tree = renderer
        .create(wrapper)
        .toJSON();
    expect(tree).toMatchSnapshot();
    });
})