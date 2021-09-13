//returns the sizes for all bars
export const getBarSizes = (data) => {
  const itemValues = [];
  const barSizes = [];
  //create array with item values
  for (const item of data) {
    itemValues.push(Number.parseInt(item.value));
  }
  //find the highest value in the array...
  let highestValue = 0;
  for (const value of itemValues) {
    if (value > highestValue) highestValue = value;
  }
  //calculate ratio based on that value
  const ratio = 250 / highestValue;
  //return a new array with sizes
  for (const value of itemValues) {
    barSizes.push(value * ratio);
  }
  return barSizes;
};
