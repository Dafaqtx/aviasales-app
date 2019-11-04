import React from "react";

import TicketHeader from "../TicketHeader";
import Segment from "../Segment";
import "./style.scss";

const Ticket = ({ ticket }) => {
  const { price, carrier, segments } = ticket;

  return (
    <div className="Ticket">
      <TicketHeader price={price} carrier={carrier} />
      <Segment segments={segments} />
    </div>
  );
};

export default Ticket;
