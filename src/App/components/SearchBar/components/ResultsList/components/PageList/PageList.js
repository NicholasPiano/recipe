
import React from 'react';

import hooks from '../../../../../../../data/hooks';
import StyledPageList from './PageList.style';
import { PageListItem } from './components';

const PageList = ({ query, ingredients, page, setDetail }) => {
  const { loading, results } = hooks.useQuery({ query, ingredients, page }) || {};

  if (loading) {
    return 'Loading...';
  }

  return (
    <StyledPageList celled>
      {results && results.map(({ href, ...rest }) => (
        <PageListItem key={href} setDetail={setDetail} href={href} {...rest} />
      ))}
    </StyledPageList>
  );
};

export default PageList;
