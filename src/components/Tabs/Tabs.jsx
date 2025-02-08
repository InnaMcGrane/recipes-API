import cn from "classnames";
import styles from "./tabs.module.scss";
import Tab from "../Tab/Tab";
import { useState } from "react";
import TabContent from "../TabContent/TabContent";

const Tabs = () => {
  const [activeSlideNumber, setActiveSlideNumber] = useState(1);

  return (
    <div className={cn(styles["tabs"])}>
      <div className={cn(styles["tabs__control"])}>
        <Tab text="Steps" active={activeSlideNumber === 1} handler={() => setActiveSlideNumber(1)} />
        <Tab text="Ingredients" active={activeSlideNumber === 2} handler={() => setActiveSlideNumber(2)} />
      </div>
      <div className="tabs__content">
        <TabContent active={activeSlideNumber === 1} text="content 1" />
        <TabContent active={activeSlideNumber === 2} text="content 2" />
      </div>
    </div>
  );
};

export default Tabs;
