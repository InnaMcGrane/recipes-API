import { createContext, useContext } from "react";
import { useState } from "react";

const ToggleContext = createContext()

const Toggle = () => {
    const [isActive, setIsActive] = useState(false)
		
    return (
      <div className="toggle">
        <ToggleContext.Provider value={{ isActive, setIsActive }}>
          <button onClick={() => setIsActive(!isActive)}>click</button>
          <ToggleOn />
          <ToggleOff />
        </ToggleContext.Provider>
      </div>
    );
}

const ToggleOn = () => {
    const {isActive} = useContext(ToggleContext)
    // return isActive && <span>On</span>;
    return isActive && <span>On</span>
}

const ToggleOff = () => {
    const {isActive} = useContext(ToggleContext)
    return !isActive && <span>Off</span>;
}

export default Toggle;