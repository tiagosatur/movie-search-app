import React from 'react';
import styled from 'styled-components';
import { colorPallete, rem } from '../../style';
import { InputBaseStyled } from './InputBaseStyled'

const DefaultInput = props => {
  const {
    classes,
    placeholder,
    id,
    name,
    value,
    disabled,
    type,
    handleKeyUp,
    handleChange,
    submit,
  } = props;

  return (
    <StyledDefaultInput
      type={type}
      id={id}
      name={name}
      value={value}
      className={`input ${classes ? classes : ''}`}
      placeholder={placeholder}
      disabled={disabled}
      onKeyUp={handleKeyUp}
      onChange={handleChange}
      onSubmit={submit}
    />

  );
};

const StyledDefaultInput = styled.input`
    ${ InputBaseStyled }

    border-left-color: ${({ errors, name }) => {
    return errors && errors[name]
      ? 'red'
      : colorPallete.light['80'];
  }};
  border-left-width: ${({ errors, name }) =>
    errors && errors[name] ? rem(5) : rem(1)};

  &:hover,
  &:focus {
    border-color: ${({ errors, name }) => {
      return errors && errors[name]
        ? 'red'
        : colorPallete.light['87'];
    }};
    border-left-width: ${({ errors, name }) =>
      errors && errors[name] ? rem(5) : rem(1)};
  }
`;

export default DefaultInput;
