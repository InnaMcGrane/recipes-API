import cn from "classnames";
import styles from "./tabs.module.scss";
import Tab from "../Tab/Tab";
import { useState } from "react";
import TabContent from "../TabContent/TabContent";

const Tabs = ({ instructions }) => {
  const [activeSlideNumber, setActiveSlideNumber] = useState(1);

  return (
    <div className={cn(styles["tabs"])}>
      <div className={cn(styles["tabs__control"])}>
        <Tab text="Steps" active={activeSlideNumber === 1} handler={() => setActiveSlideNumber(1)} />
        <Tab text="Ingredients" active={activeSlideNumber === 2} handler={() => setActiveSlideNumber(2)} />
        <Tab text="More" active={activeSlideNumber === 3} handler={() => setActiveSlideNumber(3)} />
      </div>
      <div className="tabs__content">
        <TabContent active={activeSlideNumber === 1}>
          {/* <List>
            <ListLi>step 1</ListLi>
            <ListLi>step 1</ListLi>
            <ListLi>step 1</ListLi>
            <ListLi>step 1</ListLi>
            <ListLi>step 1</ListLi>
          </List> */}
          <ul>
            {instructions.map((text) => {
              return <li>{text}</li>;
            })}
          </ul>
        </TabContent>
        <TabContent active={activeSlideNumber === 2}>content2</TabContent>
        <TabContent active={activeSlideNumber === 3}>content3</TabContent>
      </div>
    </div>
  );
};

export default Tabs;
