import cn from "classnames";
import styles from "./popUp.module.scss";
import Button from "../Button/Button";

const PopUp = ({children}) => {
  // const [isActive, setIsActive] = useState(false);
	
  return (
    <div className={cn(styles["popup"])}>
      <div className={cn(styles["popup__content-wrapper"])}>
        <div className={cn(styles["popup__content"])}>{children}</div>
        {/* <Button type="primary" handler={() => setIsActive(false)}>
          {"close"}
        </Button> */}
      </div>
    </div>
  );
};
export default PopUp;
