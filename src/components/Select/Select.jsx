import React from 'react';
import styled from 'styled-components';

const Select = React.forwardRef(({
    value,
    options,
    onChange,
    onBlur,
    id,
    classes,
    error,
    name,
  }, ref) => {

    return (
      <div className="control">
        <StyledSelect
          id={id}
          className={`rq-select ${classes ? classes : ''}`}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          ref={ref}
        >
          {options &&
            options.map((option, i) => (
              <option key={i} value={option.value}>
                {option.label}
              </option>
            ))}
        </StyledSelect>
        <span className="help-block">{error}</span>
      </div>
    )
});


const StyledSelect = styled.select`
  cursor: pointer;
  background-color: white;
  border: 0;
  border: {
    color: #ddd;
    radius: 5px;
    style: solid;
    width: ${rem(1)};
  }
  font-size: ${rem(16)};
  padding: ${rem(8)};
  margin: 0 ${rem(10)} 0 ${rem(10)};
  /* width: 100%; */
`;

function isInteger(argument) {
  if (!Number.isInteger(argument))
    throw new Error('Argument must be an INTEGER NUMBER');
  return argument;
}


function rem (pixelValue) {
  const base = 16;

  if (isInteger(pixelValue)) {
    return `${(pixelValue / base) * 1}rem`;
  }
};

Select.defaultProps = {
  value: '',
  onChange: () => {},
  onBlur: () => {},
  error: '',
};

export default Select;
