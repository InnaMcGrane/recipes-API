import cn from "classnames";
import styles from "./button.module.scss";

const Button = ({children, type, handler, disabled }) => {
    return <button className={cn(styles["btn" ], styles[`btn_${type}`])} onClick={handler} disabled={disabled}>{children}</button>
}

export default Button;