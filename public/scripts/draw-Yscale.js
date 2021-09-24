import { getBreakpoints } from "./breakpoints.js";

export const drawYScaleUnits = (data) => {
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
