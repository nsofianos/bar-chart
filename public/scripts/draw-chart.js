import { getBarSizes } from "./bar-sizes.js";

//creates html element for bar
const createBarElement = (barSize, itemDetails) => {
  const $bar = $(`
  <div class="bar-container">
    <label>${itemDetails.value}</label>
    <div class="bar" style="background-color:${itemDetails.color}; height:${barSize}px;"></div>
    <label class="item-label">${itemDetails.name}</label>
  </div>
  `);
  return $bar;
};

const drawYScaleUnits = (data) => {
  //store item values in array, then grab the highest value
  const itemValues = [];
  for (const item of data) {
    itemValues.push(Number.parseInt(item.value));
  }
  let highestValue = Math.max(...itemValues);
  while (highestValue > 10) highestValue /= 10;
  console.log(highestValue);
  highestValue = Math.round(highestValue / 0.5) * 0.5;
  console.log(highestValue);
  //reset old labels
  $(".yaxis-scale-label").remove();
  //draw new labels
  for (let i = 0; i < 6; i++) {
    $(".yaxis-scale").append($(`<label class="yaxis-scale-label">1</label>`));
  }
};

//creates the bar chart
export const drawBarChart = (data, options, element) => {
  //clear chart
  $(".bar-container").remove();
  $(".ui-effects-placeholder").remove();
  //set title
  $("#chart-title").text(options.title);
  //set x and y axis labels
  $("#xaxis-label").text(options.xaxis);
  $("#yaxis-label").text(options.yaxis);
  //draw y scale units
  drawYScaleUnits(data.itemDetails);
  //get sizes for each bar
  const barSizes = getBarSizes(data.itemDetails);
  //draw chart
  for (let i = 0; i < data.totalItems; i++) {
    $(".chart").append(createBarElement(barSizes[i], data.itemDetails[i]));
  }
  $(".bar-container").hide();
  $(".bar-container").show("slide", { direction: "down" }, 1000);
};
