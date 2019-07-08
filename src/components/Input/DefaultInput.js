import React from 'react';
import styled, { css } from 'styled-components';
import { colorPallete, rem } from '../../style';

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

const inputBaseStyle = css`
    align-items: center;
    border: ${rem(1)} solid ${colorPallete.light['80']};
    border-radius: ${rem(2)};
    box-shadow: none;
    display: inline-flex;
    font-size: ${rem(16)};
    height: ${rem(32)};
    justify-content: flex-start;
    line-height: $control-line-height;
    padding: ${rem(8)};
`;

const StyledDefaultInput = styled.input`
    ${inputBaseStyle}

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
