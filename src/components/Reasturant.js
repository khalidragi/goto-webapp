import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { PhoneIcon, LocationIcon } from '../utils/constants';


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: 10
  },
  media: {
    height: 140
  }
});

export default function MediaCard({ data }) {
  const classes = useStyles();
  console.log(data);

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={data.image_url}
          title={data.title}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h4'>
            {data.name}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
          <LocationIcon color='error' fontSize='small'/> {data.location.address1}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            <PhoneIcon color='primary' fontSize='small'/> {data.display_phone}
          </Typography>
          <Rating name="half-rating size-small" value={data.rating} precision={0.5} />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary' href={data.url}>
          More infomration on Yelp
        </Button>
      </CardActions>
    </Card>
  );
}
