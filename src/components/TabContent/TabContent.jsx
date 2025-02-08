import cn from "classnames";
import styles from "./tabContent.module.scss";

const TabContent = ({active, text}) => {
return <div className={cn(styles["tab-content"], active === true ? styles["tab-content--active"] : "")}>{text}</div>;
}

export default TabContent;