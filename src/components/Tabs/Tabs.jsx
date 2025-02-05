import cn from "classnames";
import styles from "./tabs.module.scss";

const Tabs = () => {
    const [activeSlideNumber, setActiveSlideNumber] = useState(1);
		
    return (
      <div className="tabs">
        <div className="tabs__control"></div>
        <div className="tabs__content">
          <div className="tab-content tab-content--active">content 1</div>
          <div className="tab-content">content 2</div>
        </div>
      </div>
    );
}

export default Tabs;