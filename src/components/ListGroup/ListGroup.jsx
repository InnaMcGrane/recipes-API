import cn from "classnames";
import styles from "./listGroup.module.scss";

const ListGroup = ({children}) => {
    return <ul className={cn(styles["list-group"])}>{children}</ul>
}

export default ListGroup