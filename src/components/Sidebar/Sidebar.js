import React from "react";

import Filter from "../Filter";

import "./style.scss";

const Sidebar = () => {
  return (
    <aside className="Sidebar">
      <h2 className="Sidebar__title">Количество пересадок</h2>
      <Filter />
    </aside>
  );
};

export default Sidebar;
