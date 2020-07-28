
import React from 'react';
import { List, Image, Icon } from 'semantic-ui-react';

import StyledPageListItem from './PageListItem.style';

const PageListItem = ({ href, title, ingredients, thumbnail, setDetail }) => {
  const renderThumbnail = () => {
    if (thumbnail) {
      return <Image avatar src={thumbnail} />;
    }

    return <Icon name="food" />;
  }
  const handleClick = () => setDetail({ href, title, ingredients, thumbnail });

  return (
    <StyledPageListItem onClick={handleClick}>
      {renderThumbnail()}
      <List.Content>
        <List.Header>{title}</List.Header>
        <List.Description>
          {ingredients}
        </List.Description>
      </List.Content>
    </StyledPageListItem>
  );
};

export default PageListItem;
