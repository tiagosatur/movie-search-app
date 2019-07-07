import React from 'react';
import styled from 'styled-components';
import { colorPallete } from '../../style';
import rem from '../../style/mixins/rem';

const DefaultInput = props => {
  const {
    classes,
    placeholder,
    id,
    name,
    value,
    disabled,
    type,
    register,
    errors,
    handleKeyUp,
    handleChange,
    submit,
  } = props;

  console.log('props', props);

  return (
    <div className="control">
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
    </div>
  );
};

const StyledDefaultInput = styled.input`
  border-left-color: ${({ errors, name }) => {
    return errors && errors[name]
      ? 'red'
      : colorPallete.light['87'];
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

const StyledSpan = styled.span`
  color: red;
  }};
  display: ${({ errors, name }) => {
    return errors[name] && errors[name].message ? 'flex' : 'none';
  }};
  font-size: ${rem(14)};
  padding: ${rem(4)} ${rem(8)} 0 ${rem(8)};
  transition: all 0.5s;
`;

export default DefaultInput;
