import React from "react";
import Tabs from "../Tabs";
import Tickets from "../Tickets";

import "./style.scss";

const Content = ({ tickets }) => {
  return (
    <div className="Content">
      <Tabs />
      <Tickets tickets={tickets} />
    </div>
  );
};

export default Content;
