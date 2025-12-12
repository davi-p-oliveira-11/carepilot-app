import { createContext } from 'react';
import { doctors } from '../assets/assets';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AppContext = createContext<any>({});

const AppContextProvider = (props) => {
      
  const currencySymbol = '$';
   
  const value = {
    doctors,
    currencySymbol,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
