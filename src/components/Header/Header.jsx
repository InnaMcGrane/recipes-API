import cn from "classnames";
import styles from "./header.module.scss";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";

const Header = () => {
    return (
      <header className={cn(styles["header"])}>
        <Logo/>
        <Search/>
      </header>
    );
}

export default Header;
