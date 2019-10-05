import React, { useContext } from 'react';
import { ReasturantsContext } from './context/ReasturantsContext';
import Container from '@material-ui/core/Container';


import ReasturantList from './components/ReasturantList';
import Location from './components/Location';

const App = () => {
  const { findMe } = useContext(ReasturantsContext);
  return (
    <Container maxWidth='sm'>
      <div className='App'>
        <header className='App-header'>Hi</header>
        {findMe ? <Location /> : <ReasturantList />}
      </div>
    </Container>
  );
};

export default App;
