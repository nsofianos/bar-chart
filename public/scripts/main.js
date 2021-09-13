import { drawItemDetails } from "./item-options.js";
import { drawBarChart } from "./bar-chart.js";

$(document).ready(function () {
  //build chart button
  $("button").click(function () {
    //create data on button click
    const data = {
      totalItems: $("#fitems").val(),
      itemDetails: [],
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
    drawBarChart(data);
  });
  //update item detail fields if user changes number of items
  $("#fitems").on("change", () => {
    drawItemDetails();
  });
});
