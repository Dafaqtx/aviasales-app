import React from "react";
import moment from "moment";

import SegmentText from "../SegmentText";
import SegmentValue from "../SegmentValue";

import {
  formattedMinutes,
  formattedStops,
  fromattedTrans
} from "../../formatters";

import "./style.scss";

const Segment = ({ segments }) => {
  return (
    <div className="Segment">
      {segments.map((segment, id) => (
        <div className="segment__row" key={id}>
          <div className="segment__col segment__path">
            <SegmentText>{`${segment.origin} - ${segment.destination}`}</SegmentText>
            <SegmentValue>
              {`${moment(segment.date).format("HH:mm")} – ${moment(segment.date)
                .add(segment.duration, "minutes")
                .format("HH:mm")}`}
            </SegmentValue>
          </div>
          <div className="segment__col segment__time">
            <span className="segment__text">В пути</span>
            <div className="segment__value">
              {`${formattedMinutes(segment.duration)}`}
            </div>
          </div>
          <div className="segment__col segment__stops">
            <span className="segment__text">
              {fromattedTrans(segment.stops.length)}
            </span>
            <div className="segment__value">
              {segment.stops.map((stop, id) => (
                <span key={id}>
                  {formattedStops(stop, id + 1 === segment.stops.length)}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Segment;
