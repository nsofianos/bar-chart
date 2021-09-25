import { drawItemDetails } from "./item-options.js";
import { drawBarChart } from "./draw-chart.js";

$(document).ready(function () {
  //default item
  drawItemDetails();

  //build chart button
  $("button").click(function () {
    //create data on button click
    const data = {
      totalItems: $("#fitems").val(),
      itemDetails: [],
    };
    //chart options
    const chartOptions = {
      title: $("#op-title").val(),
      xaxis: $("#op-xaxis").val(),
      yaxis: $("#op-yaxis").val(),
      tfont: $("#tfont").val(),
      afont: $("#afont").val(),
      ifont: $("#ifont").val(),
    };
    //store item detail values in data
    for (let i = 0; i < data.totalItems; i++) {
      data.itemDetails.push({
        name: $(`#item-name${i + 1}`).val(),
        value: $(`#item-val${i + 1}`).val(),
        color: $(`#item-color${i + 1}`).val(),
      });
    }
    //draw chart
    drawBarChart(data, chartOptions);
  });
  //update item detail fields if user changes number of items
  $("#fitems").on("change", () => {
    drawItemDetails();
  });
});
