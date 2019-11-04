const formattedMinutes = minutes => {
  const formattedHours = Math.floor(minutes / 60);
  const formattedMinutes = Math.round((minutes / 60 - formattedHours) * 60);

  return `${formattedHours}ч ${formattedMinutes}м`;
};

export default formattedMinutes;
