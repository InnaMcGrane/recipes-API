import cn from "classnames";
import styles from "./cookTime.module.scss";
import { FaClock, FaArrowRight } from "react-icons/fa";
import { IconContext } from "react-icons";

const CookTime = ({ prepTimeMinutes, cookTimeMinutes }) => {
  return (
    <div className={cn(styles["cook-time"])}>
      <div className={cn(styles["cook-time__left"])}>
        <IconContext.Provider value={{ className: cn(styles["cook-time__icon"]) }}>
          <FaClock />
        </IconContext.Provider>
        {prepTimeMinutes} min
      </div>
      <FaArrowRight />
      <div className={cn(styles["cook-time__right"])}>
        <IconContext.Provider value={{ className: cn(styles["cook-time__icon"]) }}>
          <FaClock />
        </IconContext.Provider>
        {cookTimeMinutes} min
      </div>
    </div>
  );
};

// *20min -> *15min

export default CookTime;
