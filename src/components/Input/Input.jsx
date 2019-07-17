import React from 'react';
import styled from 'styled-components';
import { colorPallete } from '../../style';
import rem from '../../style/mixins/rem';
import { InputBaseStyled } from './InputBaseStyled'

const Input = props => {
  const {
    classes,
    placeholder,
    id,
    name,
    disabled,
    type,
    register,
    errors,
    handleKeyUp,
  } = props;
  

  return (
    <Field>
      <StyledInput
        type={type ? type : 'text'}
        id={id && id}
        name={name}
        ref={register}
        errors={errors}
        className={`input ${classes ? classes : ''}`}
        placeholder={placeholder}
        disabled={disabled}
        onKeyUp={handleKeyUp}
      />
      {errors[name] ? (
        <StyledSpan errors={errors} name={name} className='field-error'>
          {errors[name] && errors[name].message}
        </StyledSpan>
      ) : null}
    </Field>
  );
};

const Field = styled.div`
    margin-bottom: ${rem(16)};
`;

const StyledInput = styled.input`
  ${ InputBaseStyled }

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
  display: ${({ errors, name }) => {
    return errors[name] && errors[name].message ? 'flex' : 'none';
  }};
  font-size: ${rem(14)};
  padding: ${rem(4)} ${rem(8)} 0 ${rem(8)};
  transition: all 0.5s;
`;

export default Input;
