import React from "react";
import Tabs from "../Tabs";
import Tickets from "../Tickets";

import "./style.scss";

const Content = ({ tickets, onChangeFilter }) => {
  return (
    <div className="Content">
      <Tabs onChangeFilter={onChangeFilter} />
      <Tickets tickets={tickets} />
    </div>
  );
};

export default Content;
