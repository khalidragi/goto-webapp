import axios from 'axios';

export function getCurrentPosition(options = {}) {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}

export const getReasts = async (latitude, longitude) => {
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

  return res;
};
