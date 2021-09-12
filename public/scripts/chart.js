$(document).ready(function () {
  $("button").click(function () {
    $(".chart-container").empty();
    $(".chart-container").prepend(drawBarChart());
  });
});

const drawBarChart = (data, options, element) => {
  console.log("drawn chart");
  const $barChart = $(`
  <div class="chart">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>
  `);
  return $barChart;
};
