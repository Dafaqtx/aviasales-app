import React from "react";
import moment from 'moment';
import './style.scss';

const Ticket = ({ticket}) => {
//   const ticket = {
//     carrier: "EY",
//     price: 26960,
//     segments: [
//       {
//         date: "2019-11-14T17:35:00.000Z",
//         destination: "HKT",
//         duration: 1359,
//         origin: "MOW",
//         stops: ["AUH"]
//       },
//       {
//         date: "2019-12-04T04:40:00.000Z",
//         destination: "HKT",
//         duration: 1463,
//         origin: "SET",
//         stops: ["DXB"]
//       }
//     ]
//   };

  const formattedMinutes = minutes => {
    const formattedHours = Math.floor((minutes / 60));
    const formattedMinutes = Math.round(((minutes / 60) - formattedHours) * 60);

    return `${formattedHours}ч ${formattedMinutes}м`;
  }

  const formattedPrice = price => price.toLocaleString()


  return (
        <div className="Ticket">
            <div className="Ticket__header">
                <div className="Ticket__price">{`${formattedPrice(ticket.price)} Р `}</div>
                <div className="Ticket__carrier">{ticket.carrier}</div>
            </div>
            <div className="Ticket__segments segment">
                {ticket.segments.map((segment, id) => (
                    <div className="segment__row" key={id}>
                        <div className="segment__col segment__path">
                            <span className="segment__text">{`${segment.origin} - ${segment.destination}`}</span>
                            <div className="segment__value">
                                {`${moment(segment.date).format('HH:mm')} – ${moment(segment.date).add(segment.duration, 'minutes').format('HH:mm')}`}
                            </div>
                        </div>
                        <div className="segment__col segment__time">
                            <span className="segment__text">В пути</span>
                            <div className="segment__value">
                                {`${formattedMinutes(segment.duration)}`}
                            </div>
                        </div>
                        <div className="segment__col segment__stops">
                            <span className="segment__text">{`${segment.stops.length} пересадки`}</span>
                            <div className="segment__value">
                                {segment.stops.map((stop, id) => (<span key={id}>{stop}</span>))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Ticket;
