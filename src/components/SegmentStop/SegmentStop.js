import React from "react";

import { formattedStops } from "../../formatters";

const SegmentStop = ({ stops }) => {
  return (
    <div className="SegmentStop">
      {stops.map((stop, id) => (
        <span key={id}>{formattedStops(stop, id + 1 === stops.length)}</span>
      ))}
    </div>
  );
};

export default SegmentStop;
