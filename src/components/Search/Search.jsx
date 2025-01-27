import { FaSearchengin } from "react-icons/fa";
import { IconContext } from "react-icons";
import cn from "classnames";
import styles from "./search.module.scss";

const Search = () => {
  return (
    <div className={cn(styles["search"])}>
      <IconContext.Provider value={{ className: cn(styles["search__icon"]) }}>
        <FaSearchengin />
      </IconContext.Provider>
      <input className={cn(styles["search__input"])} type="text" placeholder="search..." />
    </div>
  );
};

export default Search;

// import { IconContext } from "react-icons";

// <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
//   <div>
//     <FaFolder />
//   </div>
// </IconContext.Provider>;
