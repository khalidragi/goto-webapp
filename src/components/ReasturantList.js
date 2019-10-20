import React, { useContext, useEffect } from 'react';
import { ReasturantsContext } from '../context/ReasturantsContext';
import Reasturant from './Reasturant';
import { SortBtn, BackBtn } from '../utils/constants';

const ReasturantList = () => {
  const { reasturants, setFindMe, setAsc, isAsc } = useContext(
    ReasturantsContext
  );

  const back = () => {
    setFindMe(true);
  };

  const sortList = () => {
    setAsc(!isAsc);
  };

  return (
    <div className='reasturantList'>
      <div className='reasturantListBtns'>
        <SortBtn onClick={sortList}></SortBtn>
        <BackBtn onClick={back}></BackBtn>
      </div>

      <div>
        {isAsc
          ? [...reasturants].map(reasturant => {
              return <Reasturant key={reasturant.id} data={reasturant} />;
            })
          : [...reasturants].reverse().map(reasturant => {
              return <Reasturant key={reasturant.id} data={reasturant} />;
            })}
      </div>
    </div>
  );
};

export default ReasturantList;
