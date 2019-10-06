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
          color='textPrimary'
          gutterBottom>
          Created for the Curious
        </Typography>
        <Typography variant='h5' align='center' color='textSecondary' paragraph>
          Do you ever wanted to find the best and worst reasturants around you?
          We will find you both and then you decide.
        </Typography>
      </Container>
    </div>
  );
}
