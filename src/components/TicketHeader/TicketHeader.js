import React from "react";
import { formattedPrice } from "../../formatters/";
import "./style.scss";

const TicketHeader = ({ price, carrier }) => {
  return (
    <div className="TicketHeader">
      <div className="TicketHeader__price">{`${formattedPrice(price)} Р `}</div>
      <div className="TicketHeader__carrier">
        <img src={`//pics.avs.io/99/36/${carrier}.png`} alt={carrier} />
      </div>
    </div>
  );
};
export default TicketHeader;
