import React from "react";
import moment from "moment";

import SegmentText from "../SegmentText";
import SegmentValue from "../SegmentValue";
import SegmentStop from "../SegmentStop";

import { formattedMinutes, fromattedTrans } from "../../formatters";

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
            <SegmentText>В пути</SegmentText>
            <SegmentValue>
              {`${formattedMinutes(segment.duration)}`}
            </SegmentValue>
          </div>
          <div className="segment__col segment__stops">
            <SegmentText>{fromattedTrans(segment.stops.length)}</SegmentText>
            <SegmentValue>
              <SegmentStop stops={segment.stops} />
            </SegmentValue>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Segment;
