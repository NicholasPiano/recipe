
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import StyledIngredientsInput from './IngredientsInput.style';

const IngredientsInput = ({ setIngredients }) => {
  const [options, setOptions] = useState([]);
  const [current, setCurrent] = useState([]);
  const handleAddItem = (event, { value }) => setOptions([...options, { value, text: value }]);
  const handleChange = (event, { value }) => {
    setIngredients(value);
    setCurrent(value);
  };

  return (
    <StyledIngredientsInput
      options={options}
      search
      selection
      multiple
      allowAdditions
      value={current}
      onAddItem={handleAddItem}
      onChange={handleChange}
      placeholder="Add ingredients..."
    />
  );
};

IngredientsInput.propTypes = {
  setIngredients: PropTypes.func.isRequired,
};

export default IngredientsInput;
