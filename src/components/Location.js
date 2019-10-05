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
    <div>
      <button onClick={getData}>Find Me</button>
      {isLoading ? <div>Loading..</div> : null}
    </div>
  );
};

export default Location;
