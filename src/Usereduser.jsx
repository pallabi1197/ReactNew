import React, { useReducer, useState } from "react";

// useReducer is same as useState, the difference is manage multiple states on a big project.
// reducer function are pure function to accept state and actions.
//Pure function - The function always returns the same output if the same arguments passed in.
// The function does not produce any side-effects.
// Role of dispatch to trigger the action method of our reducer function


const intialState = 0;

const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  }

  if (action.type === "DECREMENT") {
    return state - 1;
  }


  return state;
};

const Usereduser = () => {

  // const [count,setCount] = useState(0);
  
  const [state, dispatch] = useReducer(reducer, intialState);

  return (
     <div className="btnstyle">
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Inc</button>
      <p>{state}</p>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Dec</button>
    </div>
  );
};

export default Usereduser;
