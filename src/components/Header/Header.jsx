import cn from "classnames";
import styles from "./header.module.scss";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";

const Header = ({setSearchText}) => {
    return (
      <header className={cn(styles["header"])}>
        <Logo/>
        <Search setSearchText={setSearchText}/>
      </header>
    );
}

export default Header;
