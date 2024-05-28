
import { useState } from 'react';

const UseFormInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
};

export default UseFormInput;
