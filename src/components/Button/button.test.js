import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Button from './Button';
import { stub } from 'sinon';

const onButtonClick = stub();

describe('Button tests', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Button solid handleClick={onButtonClick} />
    ).dive();
  });
  
  it('should render the Button element', () => {
    expect(wrapper.find('.button').exists()).toBe(true);
  });


  /* it('simulates click events', () => {
    wrapper.find('.button').prop('onClick')();
    expect(onButtonClick.callCount).to.equal(1)
    
  }); */

  it('should call Button snapshot correctly', () => {
    const tree = renderer
        .create(wrapper)
        .toJSON();
    expect(tree).toMatchSnapshot();
  });  

})