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

  //set font sizes
  $("#chart-title").css("font-size", `${options.tfont}em`);
  $("#xaxis-label").css("font-size", `${options.afont}em`);
  $("#yaxis-label").css("font-size", `${options.afont}em`);

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
  //set item font size
  $(".item-label").css("font-size", `${options.ifont}em`);
  //sliding animation
  $(".bar-container").hide();
  $(".bar-container").show("slide", { direction: "down" }, 1000);
};
