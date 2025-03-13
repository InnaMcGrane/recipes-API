import { useContext } from "react";
import { CounterContext } from "../Main/Main";

const MainA = () => {
   const {counter} =  useContext(CounterContext)
    return <div>Counter:{counter}</div>
}

export default MainA;