import React from "react";
import "./style.scss";

const Tabs = () => {
  return (
    <div className="Tabs">
        <button type="button" className="Tabs__button Tabs__button--active">Самый дешевый</button>
        <button type="button" className="Tabs__button">Самый быстрый</button>
    </div>
  );
};

export default Tabs;
