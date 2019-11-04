import React from "react";

import TicketHeader from "../TicketHeader";
import Segment from "../Segment";
import "./style.scss";

const Ticket = ({ ticket }) => {
  return (
    <div className="Ticket">
      <TicketHeader price={ticket.price} carrier={ticket.carrier} />
      <Segment segments={ticket.segments} />
    </div>
  );
};

export default Ticket;
