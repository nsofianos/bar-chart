import { getBarSizes } from "./bar-sizes.js";
import { getBreakpoints } from "./breakpoints.js";

//creates html element for bar
const createBarElement = (barSizeRatio, itemDetails, totalItems) => {
  //calculate width and height %
  let barHeightPercentage = Math.round((barSizeRatio * 100 * 10) / 10);
  //minimum size 1% height
  if (barHeightPercentage === 0) barHeightPercentage++;

  //create element
  const $bar = $(`
  <div class="bar-container">
    <label class="item-value-label">${itemDetails.value}</label>
    <div class="bar" style="background-color:${itemDetails.color}; width:${totalItems}em; height:${barHeightPercentage}%;"></div>
    <label class="item-label">${itemDetails.name}</label>
  </div>
  `);

  return $bar;
};

const drawYScaleUnits = (data) => {
  //get breakpoints
  const breakpoints = getBreakpoints(data);

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
  const breakPoints = getBreakpoints(data.itemDetails);
  const barSizes = getBarSizes(data.itemDetails, breakPoints);

  //draw chart
  for (let i = 0; i < data.totalItems; i++) {
    $(".chart").append(
      createBarElement(barSizes[i], data.itemDetails[i], data.totalItems)
    );
  }
  $(".bar-container").hide();
  $(".bar-container").show("slide", { direction: "down" }, 1000);
};
