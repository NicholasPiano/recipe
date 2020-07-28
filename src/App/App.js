
import React from 'react';
import { Button } from 'semantic-ui-react';

import hooks from '../data/hooks';

const App = () => {
  const result = hooks.useQuery({ query: 'Lasagna', ingredients: ['chocolate'] });
  const handleClick = () => null;

  return (
    <Button onClick={handleClick}>
      Hello
    </Button>
  );
};

export default App;
