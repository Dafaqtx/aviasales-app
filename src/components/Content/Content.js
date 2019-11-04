import React from "react";
import Tabs from "../Tabs";
import Tickets from "../Tickets";

const Content = ({ tickets }) => {
  return (
    <div className="Content">
      <Tabs />
      <Tickets />
    </div>
  );
};

export default Content;
