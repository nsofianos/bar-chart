import { drawItemDetails } from "./item-options.js";
import { drawBarChart } from "./draw-chart.js";
import { validateForm } from "./form-validation.js";
import { drawCustomUnitsField } from "./custom-units.js";

$(document).ready(function () {
  //default item
  drawItemDetails();

  //update item detail fields if user changes number of items
  $("#fitems").on("change", () => {
    drawItemDetails();
  });

  //custom units field
  $("#funits").on("change", () => {
    drawCustomUnitsField();
  });

  //build chart button
  $("button").click(function () {
    //create data on button click
    const data = {
      totalItems: $("#fitems").val(),
      itemDetails: [],
    };

    //chart options
    const chartOptions = {
      units: $("#funits").val(),
      title: $("#op-title").val(),
      xaxis: $("#op-xaxis").val(),
      yaxis: $("#op-yaxis").val(),
      tfont: $("#tfont").val(),
      yfont: $("#yfont").val(),
      afont: $("#afont").val(),
      ifont: $("#ifont").val(),
      tcolor: $("#tcolor").val(),
      acolor: $("#acolor").val(),
      icolor: $("#icolor").val(),
    };

    //store item detail values in data
    for (let i = 0; i < data.totalItems; i++) {
      data.itemDetails.push({
        name: $(`#item-name${i + 1}`).val(),
        value: $(`#item-val${i + 1}`).val(),
        color: $(`#item-color${i + 1}`).val(),
      });
    }

    //validate fields
    if (!validateForm(chartOptions, data.itemDetails)) return;

    //scroll to chart
    $("html, body").animate({ scrollTop: 100 }, 400);

    //draw chart
    drawBarChart(data, chartOptions);
  });
});
