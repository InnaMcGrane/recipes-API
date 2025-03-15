import cn from "classnames";
import styles from "./popUp.module.scss";
import Button from "../Button/Button";

const PopUp = ({ children, isActive, setIsActiveImgPopup }) => {
  return (
    isActive && (
      <div className={cn(styles["popup"])}>
        <div className={cn(styles["popup__content-wrapper"])}>
          <div className={cn(styles["popup__content"])}>{children}</div>
          <div className={cn(styles["popup__btn"])}>
            <Button type="primary" handler={() => setIsActiveImgPopup(false)}>
              X
            </Button>
          </div>
        </div>
      </div>
    )
  );
};
export default PopUp;
