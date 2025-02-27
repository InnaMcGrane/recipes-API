import cn from "classnames";
import styles from "./shortText.module.scss";

const ShortText = ({children, count}) => {
return <span>{children.slice(0, count)}...</span>
}

export default ShortText;