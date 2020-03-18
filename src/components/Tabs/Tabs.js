import React, { useState } from "react";
import classNames from "classnames";
import "./style.scss";

const Tabs = ({ onChangeFilter }) => {
  const [activeTab, setActiveTab] = useState("price");

  return (
    <div className="Tabs">
      <button
        type="button"
        className={classNames("Tabs__button", {
          "Tabs__button--active": activeTab === "price"
        })}
        onClick={() => {
          onChangeFilter("price");
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
          onChangeFilter("fast");
          setActiveTab("fast");
        }}
      >
        Самый быстрый
      </button>
    </div>
  );
};

export default Tabs;
