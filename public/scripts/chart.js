$(document).ready(function () {
  $("button").click(function () {
    $("p").hide();
    drawBarChart();
  });
});

const drawBarChart = () => {
  console.log("drawn chart");
};
