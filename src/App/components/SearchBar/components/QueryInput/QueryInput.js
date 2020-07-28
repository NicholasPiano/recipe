
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useDebounce } from './utilities';
import StyledQueryInput from './QueryInput.style';

const QueryInput = ({ setQuery }) => {
  const [value, setValue] = useState(null);
  const handleChange = (event, { value: inputValue }) => setValue(inputValue);
  const debouncedValue = useDebounce(value, 300);

  useEffect(() => {
    setQuery(debouncedValue);
  }, [debouncedValue]);

  return (
    <StyledQueryInput
      onChange={handleChange}
      placeholder="Search for recipes..."
    />
  );
};

QueryInput.propTypes = {
  setQuery: PropTypes.func.isRequired,
};

export default QueryInput;
