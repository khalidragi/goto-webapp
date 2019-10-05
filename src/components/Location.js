import React, { useContext } from 'react';
import { ReasturantsContext } from '../context/ReasturantsContext';
import { getCurrentPosition, getReasts } from '../utils/utils';

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
      {isLoading ? (
        <button>Loading</button>
      ) : (
        <button onClick={getData}>find me</button>
      )}
    </div>
  );
};

export default Location;
