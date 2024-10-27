import React, {createContext, useContext} from 'react';

const ApiContext = createContext();

export const ApiProvider = ({children}) => {
  const apiUrl = 'https://jonny.by/api-clothing-store';

  return (
    <ApiContext.Provider value={apiUrl}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => useContext(ApiContext);