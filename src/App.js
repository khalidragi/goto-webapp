import React, { useContext } from 'react';
import { ReasturantsContext } from './context/ReasturantsContext';

import ReasturantList from './components/ReasturantList';
import Location from './components/Location';
import './App.css';

const App = () => {
  const { findMe } = useContext(ReasturantsContext);
  return (
    <div className='App'>
      <header className='App-header'>Hi</header>
      {findMe ? <Location /> : <ReasturantList />}
    </div>
  );
};

export default App;
