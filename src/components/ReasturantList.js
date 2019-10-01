import React, { useContext } from 'react';
import { ReasturantsContext } from '../context/ReasturantsContext';

const ReasturantList = () => {
  const { reasturants, setFindMe } = useContext(ReasturantsContext);

  // const sortByRating = () => {
  //   let sortedResults = reasturants;
  //   if (isSorted) {
  //     sortedResults = resList.sort((a, b) => {
  //       return a.rating - b.rating;
  //     });
  //   } else {
  //     sortedResults = resList.sort((a, b) => {
  //       return b.rating - a.rating;
  //     });
  //   }
  //   setResList(sortedResults);
  //   setIsSorted(!isSorted);
  // };

  const sortData = () => {
    console.log('sorted');
  };

  const back = () => {
    setFindMe(true);
  };

  const updateUI = () => {
    const reasturantList = reasturants.map(result => {
      return (
        <div key={result.id}>
          <img src={result.image_url} width='200px' alt='logo' />
        </div>
      );
    });
    return <div>{reasturantList}</div>;
  };

  return (
    <>
      <button onClick={sortData}>Find The Worst</button>
      <button onClick={back}>Back</button>
      <div>{reasturants.length ? updateUI() : null}</div>
    </>
  );
};

export default ReasturantList;
