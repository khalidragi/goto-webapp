import React, { useContext } from 'react';
import { ReasturantsContext } from './context/ReasturantsContext';
import { Container, CssBaseline } from '@material-ui/core';

import ReasturantList from './components/ReasturantList';
import Location from './components/Location';
import NavBar from './components/NavBar';

const App = () => {
  const { findMe } = useContext(ReasturantsContext);
  return (
    <Container maxWidth='sm' className='container'>
      <CssBaseline />
      <div className='App'>
        <NavBar className='navbar' />
        {findMe ? <Location /> : <ReasturantList />}
      </div>
    </Container>
  );
};

export default App;
