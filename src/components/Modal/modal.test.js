import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Modal from './Modal';

describe('Modal tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Modal handleClose={() =>{}} show={true} > 
          <div>Some modal content</div>
      </Modal>
    ).dive();
  });
  
  it('should render the Modal element', () => {
    expect(wrapper.find('.modal').exists()).toBe(true);
  });

  it('should call Modal snapshot correctly', () => {
    const tree = renderer
        .create(wrapper)
        .toJSON();
    expect(tree).toMatchSnapshot();
    });
})