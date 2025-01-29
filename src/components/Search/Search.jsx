import { FaSearchengin } from "react-icons/fa";
import { IconContext } from "react-icons";
import cn from "classnames";
import styles from "./search.module.scss";

const Search = ({setSearchText}) => {
  const handlerInput = (event) => {
    setSearchText(event.target.value)
  }
  
  return (
    <div className={cn(styles["search"])}>
      <IconContext.Provider value={{ className: cn(styles["search__icon"]) }}>
        <FaSearchengin />
      </IconContext.Provider>
      <input className={cn(styles["search__input"])} type="text" placeholder="search..." onInput={handlerInput} />
    </div>
  );
};

export default Search;
