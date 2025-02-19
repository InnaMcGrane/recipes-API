import cn from "classnames";
import styles from "./tabs.module.scss";
import Tab from "../Tab/Tab";
import { useState } from "react";
import TabContent from "../TabContent/TabContent";
import ListGroup from "../ListGroup/ListGroup";
import ListGroupItem from "../ListGroupItem/ListgroupItem";
import Collapse from "../Collapse/Collapse";
import Button from "../Button/Button";

const Tabs = ({ instructions }) => {
  const [activeSlideNumber, setActiveSlideNumber] = useState(1);
  const [firstCollapseIsOpen, setFirstCollapseIsOpen] = useState(false)

  return (
    <div className={cn(styles["tabs"])}>
      <div className={cn(styles["tabs__control"])}>
        <Tab text="Steps" active={activeSlideNumber === 1} handler={() => setActiveSlideNumber(1)} />
        <Tab text="Ingredients" active={activeSlideNumber === 2} handler={() => setActiveSlideNumber(2)} />
        <Tab text="More" active={activeSlideNumber === 3} handler={() => setActiveSlideNumber(3)} />
      </div>
      <div className="tabs__content">
        <TabContent active={activeSlideNumber === 1}>
          <Collapse isOpen={firstCollapseIsOpen}>
            <ListGroup>
              {instructions.map((text) => (
                <ListGroupItem>{text}</ListGroupItem>
              ))}
            </ListGroup>
          </Collapse>
          <div className={cn(styles["tabs__btn-collapse-control"])}>
            <Button type="primary" handler={() => setFirstCollapseIsOpen(!firstCollapseIsOpen)}>
              {firstCollapseIsOpen === true ? "Show less" : "Show more"}
            </Button>
          </div>
        </TabContent>
        <TabContent active={activeSlideNumber === 2}>content2</TabContent>
        <TabContent active={activeSlideNumber === 3}>content3</TabContent>
      </div>
    </div>
  );
};

export default Tabs;
