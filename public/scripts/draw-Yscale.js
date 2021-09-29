import { getBreakpoints } from "./breakpoints.js";

export const drawYScaleUnits = (data, units) => {
  //get breakpoints
  const breakpoints = getBreakpoints(data);
  console.log(units);

  //reset old labels
  $(".yaxis-scale-label").remove();

  //draw new labels & horizontal lines
  $(".chart-divisions").empty();
  for (let i = 0; i < breakpoints.length; i++) {
    switch (units) {
      case "none":
        $(".yaxis-scale").prepend(
          $(`<label class="yaxis-scale-label">${breakpoints[i]}</label>`)
        );
        break;
      case "$":
        $(".yaxis-scale").prepend(
          $(
            `<label class="yaxis-scale-label">${units}${breakpoints[i]}</label>`
          )
        );
        break;
      case "deg":
        $(".yaxis-scale").prepend(
          $(
            `<label class="yaxis-scale-label">${
              breakpoints[i]
            }${"\u00B0"}</label>`
          )
        );
        break;
      case "custom":
        $(".yaxis-scale").prepend(
          $(
            `<label class="yaxis-scale-label">${breakpoints[i]}${$(
              "#custom-units"
            ).val()}</label>`
          )
        );
        break;
      default:
        $(".yaxis-scale").prepend(
          $(
            `<label class="yaxis-scale-label">${breakpoints[i]}${units}</label>`
          )
        );
    }

    if (i > 1) $(".chart-divisions").append("<hr/>");
  }
};
