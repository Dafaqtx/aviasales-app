import React, { useState } from "react";
import classNames from "classnames";
import "./style.scss";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("price");
  return (
    <div className="Tabs">
      <button
        type="button"
        className={classNames("Tabs__button", {
          "Tabs__button--active": activeTab === "price"
        })}
        onClick={() => {
          setActiveTab("price");
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
