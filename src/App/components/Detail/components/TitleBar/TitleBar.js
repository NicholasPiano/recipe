
import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

import StyledTitleBar from './TitleBar.style';
import { Thumbnail } from './components';

const TitleBar = ({ title, thumbnail, href }) => (
  <StyledTitleBar>
    <Thumbnail thumbnail={thumbnail} />
    <Header as="h3">
      {title}{' '}
      {href && <a href={href} target="_blank"><Icon name="linkify" /></a>}
    </Header>
  </StyledTitleBar>
);

export default TitleBar;
