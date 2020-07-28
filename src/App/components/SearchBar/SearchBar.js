
import React, { useState } from 'react';

import StyledSearchBar from './SearchBar.style';
import { QueryInput, IngredientsInput, ResultsList } from './components';

const SearchBar = ({ setDetail }) => {
  const [query, setQuery] = useState(null);
  const [ingredients, setIngredients] = useState([]);

  return (
    <StyledSearchBar>
      <QueryInput setQuery={setQuery} />
      <IngredientsInput setIngredients={setIngredients} />
      <ResultsList query={query} ingredients={ingredients} setDetail={setDetail} />
    </StyledSearchBar>
  );
};

export default SearchBar;
