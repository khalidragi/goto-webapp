import React, { useContext } from 'react';
import axios from 'axios';
import { ReasturantsContext } from '../context/ReasturantsContext';
import { getCurrentPosition } from '../utils/utils';

const Location = () => {
  const { setReasturants, setFindMe, setLoading, isLoading } = useContext(
    ReasturantsContext
  );

  const getData = async () => {
    setLoading(true);
    const { coords } = await getCurrentPosition();
    const { latitude, longitude } = coords;
    let res = await axios.get(
      `${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?latitude=${latitude}&longitude=${longitude}`,
      {
        //required authorization format from API
        headers: {
          //to get the API from the .env file use process.env.{variable name}
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        },
        //option params passed to API call to retrieve only breakfast and lunch spots
        params: {
          categories: 'reasturant'
        }
      }
    );
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
