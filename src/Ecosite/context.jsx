import React, { useContext, useReducer } from "react";
import reducer from "./reducer.jsx";

// create a context (warehouse) [hub of data]
// provider [to get data and transfer to consumer]
// consumer [to get data by calling api]/ useContext hook

const AppContext = React.createContext();

const intialState = {
  name: "",
  image: "",
};

const updateHomePage = () => {
  return dispatch({
    type: "HOME_UPDATE",
    Payload: {
      name: "Creative Cloud",
      image: "./images/cat.jpg",
    },
  });
};

const updateAboutPage = () => {
  return dispatch({
    type: "HOME_UPDATE",
    Payload: {
      name: "Pallabi Das",
      image: "./images/about.png",
    },
  });
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

//global custom hook

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
