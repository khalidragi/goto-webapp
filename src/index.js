import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReasturantsContextProvider from './context/ReasturantsContext';

ReactDOM.render(
  <ReasturantsContextProvider>
    <App />
  </ReasturantsContextProvider>,
  document.getElementById('root')
);
