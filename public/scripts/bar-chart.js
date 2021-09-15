import { getBarSizes } from "./bar-sizes.js";

//creates html element for bar
const createBarElement = (barSize, itemDetails) => {
  const $bar = $(`
  <div class="bar-container">
    <label>${itemDetails.value}</label>
    <div class="bar" style="background-color:${itemDetails.color}; height:${barSize}px;"></div>
    <label class="item-label">${itemDetails.name}</label>
  </div>
  `);
  return $bar;
};

//creates the bar chart
export const drawBarChart = (data, options, element) => {
  //clear chart
  $(".chart-container").empty();
  //set title
  $("#chart-title").text(options.title);
  //set x and y axis labels
  $("#xaxis-label").text(options.xaxis);
  //$("#yaxis-label").text(options.yaxis);
  //initialize chart element
  const $barChart = $(`
  <div class="chart">
  </div>
  `);
  //get sizes for each bar
  const barSizes = getBarSizes(data.itemDetails);
  //draw chart
  for (let i = 0; i < data.totalItems; i++) {
    $barChart.append(createBarElement(barSizes[i], data.itemDetails[i]));
  }
  $(".chart-container").append($barChart);
  $(".chart").hide();
  $(".chart").slideDown(1000);
};
