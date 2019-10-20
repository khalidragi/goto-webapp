import React, { createContext, useState } from 'react';

export const ReasturantsContext = createContext();

const ReasturantsContextProvider = props => {
  const [reasturants, setReasturants] = useState([]);
  const [findMe, setFindMe] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [isAsc, setAsc] = useState(true);

  return (
    <ReasturantsContext.Provider
      value={{
        reasturants,
        setReasturants,
        findMe,
        isLoading,
        setLoading,
        setFindMe,
        isAsc,
        setAsc
      }}>
      {props.children}
    </ReasturantsContext.Provider>
  );
};

export default ReasturantsContextProvider;
