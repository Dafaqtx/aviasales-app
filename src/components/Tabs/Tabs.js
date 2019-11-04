import React, { useState } from "react";
import classNames from "classnames";
import "./style.scss";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("economical");
  return (
    <div className="Tabs">
      <button
        type="button"
        className={classNames("Tabs__button", {
          "Tabs__button--active": activeTab === "economical"
        })}
        onClick={() => {
          setActiveTab("economical");
        }}
      >
        Самый дешевый
      </button>
      <button
        type="button"
        className={classNames("Tabs__button", {
          "Tabs__button--active": activeTab === "fast"
        })}
        onClick={() => {
          setActiveTab("fast");
        }}
      >
        Самый быстрый
      </button>
    </div>
  );
};

export default Tabs;
