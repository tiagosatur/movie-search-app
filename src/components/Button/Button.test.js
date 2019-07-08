import React from 'react';
import styled from 'styled-components';
import { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
// import { Button } from './';
import { colorPallete } from '../../style'

const Button = styled.button`
  color: red;
  border: 0.05em solid ${props => props.transparent ? 'transparent' : 'black'};
  cursor: ${props => !props.disabled && 'pointer'};
  opacity: ${props => props.disabled && '.65'};
`

describe('Button component', () => {
  it('should render snapshot correctly', () => {
    const tree = renderer.create(Button).toJSON();
    expect(tree).toMatchInlineSnapshot(`null`);
  });

  it('should render a solid primary button', () => {
    const component = shallow(<Button solid />);
    expect(component).toHaveStyleRule('background-color', '#000000');
  });
});
