const formattedStops = (stop, last) => {
  if (!last) {
    return `${stop}, `;
  } else {
    return stop;
  }
};

export default formattedStops;
