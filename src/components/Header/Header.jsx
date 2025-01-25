import cn from "classnames";
import styles from "./header.module.scss";
import Logo from "../Logo/Logo";

const Header = () => {
    return (
      <header className={cn(styles["header"])}>
        <Logo/>
      </header>
    );
}

export default Header;
