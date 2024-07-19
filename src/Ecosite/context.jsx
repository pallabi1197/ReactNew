import React, { useReducer } from "react";
import { useContext } from "react";
import reducer from "../reducer";

const AppContext = React.createContext();

const intialState = {
  name: "",
  image: "",
  services:[],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const updateHomepage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Creative Cloud",
        image: "./images/cat.jpg",
      },
    });
  };

  const updateAboutpage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "My Profile",
        image: "./images/about.png",
      },
    });
  };

  //to get the api

  // const getServices = async (url) => {
  //   try {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     dispatch({type:"GET_SERVICES", payload: data})
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // // to call the api

  // useEffect(() => {
  //   getServices(API);
  // }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        updateHomepage,
        updateAboutpage,
        fname: "Justin",
        age: "32",
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
