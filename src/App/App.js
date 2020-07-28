
import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';

import hooks from '../data/hooks';
import StyledApp from './App.style';
import { Detail, SearchBar } from './components';

const App = () => {
  const [detail, setDetail] = useState({});

  return (
    <StyledApp>
      <SearchBar setDetail={setDetail} />
      <Detail {...detail} />
    </StyledApp>
  );
};

export default App;
