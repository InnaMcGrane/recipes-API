import cn from "classnames";
import styles from "./listGroupItem.module.scss";

const ListGroupItem = ({children}) => {
    return <li className={cn(styles["list-group-item"])}>{children}</li>
}
export default ListGroupItem;


