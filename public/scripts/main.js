import { drawItemDetails } from "./item-options.js";
import { drawBarChart } from "./bar-chart.js";

$(document).ready(function () {
  $("button").click(function () {
    const data = {
      totalItems: $("#fitems").val(),
      itemDetails: [],
    };
    for (let i = 0; i < data.totalItems; i++) {
      data.itemDetails.push({
        name: $(`#item-name${i + 1}`).val(),
        value: $(`#item-val${i + 1}`).val(),
      });
    }
    console.log(data.itemDetails);
    drawBarChart(data);
  });
  $("#fitems").on("change", () => {
    drawItemDetails();
  });
});
