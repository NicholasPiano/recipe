
import React, { Fragment } from 'react';
import { Header, List, Icon } from 'semantic-ui-react';

const IngredientsList = ({ ingredients }) => {
  if (!ingredients) {
    return null;
  }

  return (
    <Fragment>
      <Header as="h4">Ingredients</Header>
      <List>
        {ingredients.split(',').map(ingredient => (
          <List.Item key={ingredient}>
            <Icon name="caret right" />
            <List.Content>{ingredient}</List.Content>
          </List.Item>
        ))}
      </List>
    </Fragment>
  );
};

export default IngredientsList;
