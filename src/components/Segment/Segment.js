import React from "react";
import moment from "moment";

import SegmentText from "../SegmentText";
import SegmentValue from "../SegmentValue";
import SegmentStop from "../SegmentStop";
import SegmentCol from "../SegmentCol";
import SegmentRow from "../SegmentRow";

import { formattedMinutes, fromattedTrans } from "../../formatters";

import "./style.scss";

const Segment = ({ segments }) => {
  return (
    <div className="Segment">
      {segments.map((segment, id) => (
        <SegmentRow key={id}>
          <SegmentCol>
            <SegmentText>{`${segment.origin} - ${segment.destination}`}</SegmentText>
            <SegmentValue>
              {`${moment(segment.date).format("HH:mm")} – ${moment(segment.date)
                .add(segment.duration, "minutes")
                .format("HH:mm")}`}
            </SegmentValue>
          </SegmentCol>
          <SegmentCol>
            <SegmentText>В пути</SegmentText>
            <SegmentValue>
              {`${formattedMinutes(segment.duration)}`}
            </SegmentValue>
          </SegmentCol>
          <SegmentCol>
            <SegmentText>{fromattedTrans(segment.stops.length)}</SegmentText>
            <SegmentValue>
              <SegmentStop stops={segment.stops} />
            </SegmentValue>
          </SegmentCol>
        </SegmentRow>
      ))}
    </div>
  );
};

export default Segment;
