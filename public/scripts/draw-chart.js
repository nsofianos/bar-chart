import { getBarSizes } from "./bar-sizes.js";
import { drawYScaleUnits } from "./draw-Yscale.js";
import { getBreakpoints } from "./breakpoints.js";
import { createBarElement } from "./create-bar.js";

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
