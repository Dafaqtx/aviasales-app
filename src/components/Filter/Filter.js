import React from "react";

import Checkbox from "../Checkbox";

import "./style.scss";

const Filter = () => {
  const filters = [
    "Все",
    "Без пересадок",
    "1 пересадка",
    "2 пересадки",
    "3 пересадки"
  ];

  return (
    <div className="Filter">
      {filters.map((filter, id) => (
        <Checkbox label={filter} id={id} key={id} />
      ))}
    </div>
  );
};

export default Filter;
