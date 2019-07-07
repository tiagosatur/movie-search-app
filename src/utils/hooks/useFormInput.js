import { useState } from 'react';

const useFormInput = initialVlaues => {

  const [values, setValues] = useState(initialVlaues ? initialVlaues : {});

  const handleInputChange = event => {
    const { name, value } = event.target;
    event.persist();

    setValues(inputs => ({
      ...inputs,
      [name]: value,
    }));
  };

  return {
    values,
    setValues,
    handleInputChange,
  };

};


export default useFormInput;
