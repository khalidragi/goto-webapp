import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReasturantList = () => {
  const [loading, setLoading] = useState(false);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [results, setResults] = useState([]);
  const [isSorted, setIsSorted] = useState(false);

  const setPosition = () => {
    const location = window.navigator && window.navigator.geolocation;
    if (location) {
      location.getCurrentPosition(position => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        console.log(latitude, longitude);
      });
    }
  };

  const sortByRating = () => {
    let sortedResults = results;
    if (isSorted) {
      sortedResults = results.sort((a, b) => {
        if (a.rating < b.rating) return 1;
        else if (a.rating > b.rating) return -1;
        else return 0;
      });
    } else {
      sortedResults = results.sort((a, b) => {
        if (a.rating < b.rating) return -1;
        else if (a.rating > b.rating) return 1;
        else return 0;
      });
    }
    setResults(sortedResults);
    setIsSorted(!isSorted);
  };

  const sortList = () => {
    sortByRating();
  };

  useEffect(() => {
    axios
      .get(
        `${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?latitude=${latitude}&longitude=${longitude}`,
        {
          //required authorization format from API
          headers: {
            //to get the API from the .env file use process.env.{variable name}
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
          },
          //option params passed to API call to retrieve only breakfast and lunch spots
          params: {
            categories: 'breakfast_brunch'
          }
        }
      )
      .then(res => {
        console.log(res.data.businesses);
        setResults(
          res.data.businesses.sort((a, b) => {
            if (a.rating < b.rating) return 1;
            else if (a.rating > b.rating) return -1;
            else return 0;
          })
        );
      })
      .catch(err => {
        console.log(err);
      });
  }, [latitude, longitude]);

  return (
    <>
      <div>
        <button onClick={setPosition}>Find Me</button>
        <button onClick={sortList}>Find Best</button>
      </div>
      <div>
        {results.slice(0, 10).map(result => {
          return (
            <div key={result.id}>
              <h2>{result.rating}</h2>
              <img src={result.image_url} width='200px' alt='logo' />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ReasturantList;
