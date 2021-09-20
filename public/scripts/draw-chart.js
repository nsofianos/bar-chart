import { getBarSizes } from "./bar-sizes.js";
import { getBreakpoints } from "./breakpoints.js";

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
  for (const item of data) itemValues.push(item.value);
  const maxVal = Math.max(...itemValues);
  //get breakpoints
  const breakpoints = getBreakpoints(maxVal);
  console.log(breakpoints);
  //reset old labels
  $(".yaxis-scale-label").remove();
  //draw new labels & horizontal lines
  $(".chart-divisions").empty();
  for (let i = 0; i < breakpoints.length; i++) {
    $(".yaxis-scale").prepend(
      $(`<label class="yaxis-scale-label">${breakpoints[i]}</label>`)
    );
    if (i > 1) $(".chart-divisions").append("<hr/>");
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
