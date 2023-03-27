import { createContext, useState } from "react";
import "./App.css";
import Counter from "./counter/Counter";
import CounterNew from "./counter/CounterNew";
import LongForm from "./counter/LongForm";
import Parent from "./counter/Parent";
import ShortForm from "./counter/ShortForm";

export const COUNTER_CONTEXT = createContext();

function App() {
  const [count, setCount] = useState(0);

  const value = {
    count,
    setCount,
  };

  return (
    <COUNTER_CONTEXT.Provider value={value}>
      <div className="">
        <div className="bg-blue-500 text-white text-3xl p-6 text-center">
          Counter App is Here!
        </div>

        {/* <Child className="flex justify-center items-center"></Child> */}
        {/* <Parent></Parent> */}
      </div>
      {/* <ShortForm></ShortForm> */}
      {/* <CounterNew></CounterNew> */}
      <Counter></Counter>
      <LongForm></LongForm>
    </COUNTER_CONTEXT.Provider>
  );
}

export default App;
