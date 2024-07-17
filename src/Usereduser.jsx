import React, { useReducer, useState } from "react";

// useReducer is same as useState, the difference is manage multiple states on a big project we use useReducer hook.
// reducer are pure function to accept state and actions.

const Usereduser = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="btnstyle">
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>{count}</p>
      <button onClick={() =>  setCount(count - 1)}>Decrement</button>

    </div>
  );
};

export default Usereduser;
