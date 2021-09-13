import { drawItemDetails } from "./item-options.js";
import { drawBarChart } from "./bar-chart.js";

$(document).ready(function () {
  $("button").click(function () {
    const data = {
      totalItems: $("#fitems").val(),
      itemDetails: [{ name: "apple", value: 10 }],
    };
    drawBarChart(data);
  });
  $("#fitems").on("change", () => {
    drawItemDetails();
  });
});
