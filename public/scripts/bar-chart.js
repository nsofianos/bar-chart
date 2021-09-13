import { getBarSizes } from "./bar-sizes.js";

//creates html element for bar
const createBarElement = (barSize, itemDetails) => {
  const $bar = $(`
  <div class="bar-container">
    <label>${itemDetails.value}</label>
    <div class="bar" style="background-color:${itemDetails.color}; height:${barSize}px;"></div>
    <label>${itemDetails.name}</label>
  </div>
  `);
  return $bar;
};

//creates the bar chart
export const drawBarChart = (data, options, element) => {
  //clear chart
  $(".chart-container").empty();
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
};
