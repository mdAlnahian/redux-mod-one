import React, { useReducer } from "react";

const Counter = () => {
  const initialState = 0;

  const reducer = (state, action) => {
    // console.log(action);
    if (action.type === "INCREMENT") {
      return state + action.payload.count;
    } else if (action.type === "DECREMENT") {
      return state - action.payload;
    } else {
      return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="text-center font-bold bg-blue-400">
      <h1 className="bg-blue-800 p-6 text-white">Child component is here!</h1>
      <button
        className="rounded-full bg-slate-500 p-3 m-4"
        onClick={() => dispatch({ type: "INCREMENT", payload: { count: 5 } })}
      >
        Increment
      </button>
      <div className="p-6 text-3xl">{state}</div>
      <button
        className="rounded-full bg-slate-500 p-3 m-4"
        onClick={() => dispatch({ type: "DECREMENT", payload: 5 })}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
