// Returns -1 if needed index is wrong
export const getArrayValidIndex = (array, indexToCheck) => {
  if (!array.length) return -1;
  if (indexToCheck < 0) return -1;
  if (indexToCheck > array.length - 1) return -1;
  return indexToCheck;
};

export const getNextArrayValidIndex = (array, currentIndex) => {
  return getArrayValidIndex(array, currentIndex + 1);
};

export const getPrevArrayValidIndex = (array, currentIndex) => {
  return getArrayValidIndex(array, currentIndex - 1);
};
