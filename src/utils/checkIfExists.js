export const checkIfExists = (array, userId) => {
  const isPresent = array.find((user) => user?.id === userId);
  console.log("am i present?..", isPresent);
  return isPresent;
};
