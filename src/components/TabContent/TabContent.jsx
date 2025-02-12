import cn from "classnames";
import styles from "./tabContent.module.scss";

const TabContent = ({active, children}) => {
return <div className={cn(styles["tab-content"], active === true ? styles["tab-content--active"] : "")}>{children}</div>;
}

export default TabContent;