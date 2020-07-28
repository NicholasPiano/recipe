
import React from 'react';
import PropTypes from 'prop-types';
import { Image, Icon } from 'semantic-ui-react';
import isNull from 'lodash/isNull';

import StyledThumbnail from './Thumbnail.style';

const Thumbnail = ({ thumbnail }) => {
  if (isNull(thumbnail)) {
    return null;
  }

  const renderThumbnail = () => {
    if (thumbnail !== '') {
      return <Image src={thumbnail} />;
    }

    return <Icon size="huge" name="food" />;
  };

  return (
    <StyledThumbnail>
      {renderThumbnail()}
    </StyledThumbnail>
  );
};

Thumbnail.defaultProps = {
  thumbnail: null,
};

Thumbnail.propTypes = {
  thumbnail: PropTypes.string,
};

export default Thumbnail;
