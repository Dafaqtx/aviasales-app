const fromattedTrans = count => {
  if (count === 0) {
    return "Без пересадок";
  }

  return count === 1 ? "1 пересадка" : `${count} пересадки`;
};

export default fromattedTrans;
