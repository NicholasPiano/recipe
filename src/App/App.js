
import React from 'react';
import { Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';

import { fetch } from '../data/actions';

const App = () => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(fetch({ id: 1, query: 'Lasagna' }));

  return (
    <Button onClick={handleClick}>
      Hello
    </Button>
  );
};

export default App;
