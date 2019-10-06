import React, { useContext } from 'react';
import { ReasturantsContext } from '../context/ReasturantsContext';
import { getCurrentPosition, getReasts } from '../utils/utils';
import { FindMeBtn } from '../utils/constants';
import { Hero } from '../utils/partials';
import { CircularProgress } from '@material-ui/core';

const Location = () => {
  const { setReasturants, setFindMe, setLoading, isLoading } = useContext(
    ReasturantsContext
  );

  const getData = async () => {
    setLoading(true);
    const { coords } = await getCurrentPosition();
    const { latitude, longitude } = coords;
    let res = await getReasts(latitude, longitude);
    let list = await res.data.businesses;
    setReasturants(list);
    console.log(list);
    setLoading(false);
    setFindMe(false);
  };

  //get location and fetch data from Yelp API

  return (
    <div className='locationFinder'>
      <Hero />
      {isLoading ? (
        <CircularProgress style={{ color: '#f7cc00' }} />
      ) : (
        <FindMeBtn onClick={getData} />
      )}
    </div>
  );
};

export default Location;
