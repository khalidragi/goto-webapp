import React from 'react';
import Avatar from '@material-ui/core/Avatar';

const NavBar = () => {
  return (
    <header style={{ width: '100%' }}>
      <Avatar alt='goto logo' src={require('../assets/gotoLogo.png')} />
    </header>
  );
};

export default NavBar;
