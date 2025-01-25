import cn from "classnames";
import styles from "./header.module.scss";
import Logo from "../Logo/Logo";

const Header = () => {
    return (
      <header className="header">
        <Logo/>
      </header>
    );
}

export default Header;
