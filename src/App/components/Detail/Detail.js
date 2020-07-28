
import React from 'react';

import StyledDetail from './Detail.style';
import { TitleBar, IngredientsList } from './components';

const Detail = ({ href, title, ingredients, thumbnail }) => (
  <StyledDetail>
    <TitleBar title={title} thumbnail={thumbnail} href={href} />
    <IngredientsList ingredients={ingredients} />
  </StyledDetail>
);

export default Detail;
