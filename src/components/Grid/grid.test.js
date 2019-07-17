import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Grid from './Grid';

describe('Grid tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Grid> 
          <div>Some Grid content</div>
      </Grid>
    ).dive();
  });
  
  it('should render the Grid element', () => {
    expect(wrapper.find('.grid').exists()).toBe(true);
  });

  it('should call Grid snapshot correctly', () => {
    const tree = renderer
        .create(wrapper)
        .toJSON();
    expect(tree).toMatchSnapshot();
    });
})