import React, { useContext } from "react";
import { COUNTER_CONTEXT } from "../App";
import Child from "./Child";

const Parent = () => {
  const { count, setCount } = useContext(COUNTER_CONTEXT);

  return (
    <div className="text-center bg-blue-300">
      <Child className="flex justify-center items-center"></Child>
      <div>{count}</div>
    </div>
  );
};

export default Parent;
