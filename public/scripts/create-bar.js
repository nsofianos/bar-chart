//creates html element for bar
export const createBarElement = (barSizeRatio, itemDetails, totalItems) => {
  //calculate height %
  let barHeightPercentage = Math.round((barSizeRatio * 100 * 10) / 10);

  //minimum size 1% height
  if (barHeightPercentage === 0) barHeightPercentage++;

  //calculate width based on total items
  const barWidthPercentage = 16 - totalItems * 1.2;

  //create element
  const $bar = $(`
  <div class="bar-container" style="width:${barWidthPercentage}%">
    <label class="item-label" id="item-value-label">${itemDetails.value}</label>
    <div class="bar" style="background-color:${itemDetails.color}; height:${barHeightPercentage}%;"></div>
    <label class="item-label" id="item-label-name">${itemDetails.name}</label>
  </div>
  `);

  return $bar;
};
