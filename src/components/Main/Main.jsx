import React, { useState } from 'react';
import { useContext } from 'react';

export const CounterContext = React.createContext(0);

const Main = ({ children }) => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div onClick={() => setCounter(counter + 1)}>click</div>
      <div>
        <CounterContext.Provider value={{ counter, active: false, prop: 12432543 }}>{children}</CounterContext.Provider>
      </div>
    </div>
  );
};
b
export default Main;
