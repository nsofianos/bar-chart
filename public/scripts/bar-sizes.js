//returns the sizes for all bars
export const getBarSizes = (data) => {
  const itemValues = [];
  const barSizes = [];
  //create array with item values
  for (const item of data) {
    itemValues.push(Number.parseInt(item.value));
  }
  //find the highest value in the array...
  const highestValue = Math.max(...itemValues);

  //calculate ratio based on that value
  const ratio = 250 / highestValue;
  //return a new array with sizes
  for (const value of itemValues) {
    barSizes.push(value * ratio);
  }
  return barSizes;
};
