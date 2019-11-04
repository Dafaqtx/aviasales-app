import React from "react";
import Ticket from "../Ticket";

const Tickets = ({ tickets }) => {
  return (
    <div className="Tickets">
      {tickets.length ? (
        <div>
          {tickets.map(ticket => (
            <Ticket ticket={ticket} />
          ))}
        </div>
      ) : (
        "Tickets not found"
      )}
    </div>
  );
};

export default Tickets;
