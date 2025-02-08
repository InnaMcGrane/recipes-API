import cn from "classnames";
import styles from "./tab.module.scss";

const Tab = ({ text, active, handler }) => {
  return (
    <span className={cn(styles[`tab`], active === true ? styles["tab--active"] : "")} onClick={handler}>
      {text}
    </span>
  );
};

export default Tab;
