//returns the sizes for all bars
export const getBarSizes = (barData, breakPoints) => {
  //create array with item values
  const itemValues = [];
  for (const item of barData) {
    itemValues.push(Number.parseInt(item.value));
  }

  //get the max breakpoint value
  const maxBreakpoint = Math.max(...breakPoints);

  //return a new array with size ratios
  const barSizes = [];
  for (const value of itemValues) {
    barSizes.push(value / maxBreakpoint);
  }
  return barSizes;
};
