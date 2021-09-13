//creates html element for bar
const createBarElement = (itemDetails) => {
  const $bar = $(`
  <div class="bar-container">
    <label>${itemDetails.value}</label>
    <div class="bar"></div>
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
  //draw chart
  for (let i = 0; i < data.totalItems; i++) {
    $barChart.append(createBarElement(data.itemDetails[i]));
  }
  $(".chart-container").append($barChart);
};
