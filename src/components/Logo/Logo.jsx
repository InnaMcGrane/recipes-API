import cn from "classnames";
import styles from "./logo.module.scss";

const Logo = () => {
    return (
      <a href="/" className={cn(styles["logo"])}>
        <span className={cn(styles["logo__text"])}>
          <span className={cn(styles["logo__text-mark"])}> List</span>Recipes
        </span>
      </a>
    );
}
export default Logo;