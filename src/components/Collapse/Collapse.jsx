import cn from "classnames";
import styles from "./collapse.module.scss";

const Collapse = ({isOpen, children}) => {
    // const [isOpen, setIsOpen] = useState(false);
    
    return <div className={cn(styles["collapse"], isOpen ? styles["collapse--active"] : "")}>{children}</div>
}

export default Collapse;