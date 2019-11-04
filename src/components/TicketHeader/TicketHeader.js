import React from "react";
import formattedPrice from "../../formatters/formattedPrice";
import "./style.scss";

const TicketHeader = ({ price, carrier }) => {
  return (
    <div className="TicketHeader">
      <div className="TicketHeader__price">{`${formattedPrice(price)} Р `}</div>
      <div className="TicketHeader__carrier">{carrier}</div>
    </div>
  );
};
export default TicketHeader;
