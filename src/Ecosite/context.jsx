// to avoid prop-drilling we use react hooks
// create a context (warehouse - hub of data)
// provider (to get data and store it in warehouse)
// consumer (calling data with the help of provider) / useContext hook

import React from "react";
import { useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value={{fname: "Jack", age:"34"}}>{children}</AppContext.Provider>;
};

// create custom hook

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
