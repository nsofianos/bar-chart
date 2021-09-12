$(document).ready(function () {
  $("button").click(function () {
    $(".chart-container").empty();
    $(".chart-container").prepend(drawBarChart(6));
  });
});

const createBarElement = () => {
  const $bar = $(`
    <div class="bar"></div>
  `);
  return $bar;
};

const drawBarChart = (data, options, element) => {
  console.log("drawn chart");
  const $barChart = $(`
  <div class="chart">
  </div>
  `);
  for (let i = 0; i < data; i++) {
    $barChart.prepend(createBarElement());
  }
  return $barChart;
};
