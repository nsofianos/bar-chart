const createBarElement = (itemDetails) => {
  const $bar = $(`
  <div class="bar-container">
    <label>${itemDetails.value}</label>
    <div class="bar"></div>
  </div>
  `);
  return $bar;
};

export const drawBarChart = (data, options, element) => {
  $(".chart-container").empty();
  const $barChart = $(`
  <div class="chart">
  </div>
  `);
  for (let i = 0; i < data.totalItems; i++) {
    $barChart.append(createBarElement(data.itemDetails[0]));
  }
  $(".chart-container").append($barChart);
};
