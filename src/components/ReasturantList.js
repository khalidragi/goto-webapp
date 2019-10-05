import React, { useContext } from 'react';
import { ReasturantsContext } from '../context/ReasturantsContext';
import Reasturant from './Reasturant';

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

  return (
    <>
      <button onClick={sortData}>Find The Worst</button>
      <button onClick={back}>Back</button>
      <div>
        {reasturants.length
          ? reasturants.map(result => {
              return <Reasturant key={result.id} data={result} />;
            })
          : null}
      </div>
    </>
  );
};

export default ReasturantList;
