import React, { useContext } from "react";
import { COUNTER_CONTEXT } from "../App";

const Child = () => {
  //   const [count, setCount] = useState(0);

  const { count, setCount } = useContext(COUNTER_CONTEXT);

  return (
    <div className="text-center font-bold">
      <h1 className="bg-blue-800 p-6 text-white">Child component is here!</h1>
      <button
        className="rounded-full bg-slate-500 p-3 m-4"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <div>{count}</div>
      <button
        className="rounded-full bg-slate-500 p-3 m-4"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
    </div>
  );
};

export default Child;
