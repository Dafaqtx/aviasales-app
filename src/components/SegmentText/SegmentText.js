import React from "react";

const SegmentText = ({ origin, destination }) => {
  return <span className="SegmentText">{`${origin} - ${destination}`}</span>;
};

export default SegmentText;
