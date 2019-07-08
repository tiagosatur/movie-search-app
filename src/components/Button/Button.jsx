
import React from 'react';
import { StyledButton } from './StyledButton';

const Button = ({
  type,
  handleClick,
  classes,
  iconName,
  children,
  disabled,
  title,
  ...styledProps
}) => {

  const defineType = (!type || type == '') ? 'submit': type;
  
  return (
    <StyledButton
      type={defineType}
      onClick={handleClick}
      className={`button ${classes ? classes : ''}`}
      disabled={disabled}
      title={title ? title : ''}
      {...styledProps}
    >
      {iconName ? <i className={iconName} /> : null}
      {children}
    </StyledButton>
  );
};

export default Button;
