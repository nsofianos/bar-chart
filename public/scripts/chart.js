$(document).ready(function () {
  $("button").click(function () {
    const data = $("#fitems").val();
    drawBarChart(data);
    //$(".chart-container").empty();
    //$(".chart-container").prepend(drawBarChart(data));
  });
});

const createBarElement = () => {
  const $bar = $(`
    <div class="bar"></div>
  `);
  return $bar;
};

const drawBarChart = (data, options, element) => {
  const $barChart = $(`
  <div class="chart">
  </div>
  `);
  for (let i = 0; i < data; i++) {
    $barChart.prepend(createBarElement());
  }
  $(".chart-container").empty();
  $(".chart-container").prepend($barChart);
};
