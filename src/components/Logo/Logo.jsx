import cn from "classnames";
import styles from "./logo.module.scss";

const Logo = () => {
    return (
      <a href="/" className="logo">
        <span className="logo__text">
          <span className="logo__text-mark"> List</span>Recipes
        </span>
      </a>
    );
}
export default Logo;