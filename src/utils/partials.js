import React from 'react';
import { Typography, Container } from '@material-ui/core';

export function Hero() {
  return (
    <div className='heroContent'>
      <Container maxWidth='sm'>
        <Typography
          component='h1'
          variant='h2'
          align='center'
          style={{ color: '#ccc', marginBottom: '40px' }}
          gutterBottom>
          Created For The Curious
        </Typography>
        <Typography
          variant='h6'
          align='center'
          style={{ color: '#667d85', textAlign: 'justify' }}
          paragraph>
          Do you ever wanted to find the best and worst reasturants around you?
          We will find you both and then you decide.
        </Typography>
      </Container>
    </div>
  );
}
