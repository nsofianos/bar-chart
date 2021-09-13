$(document).ready(function () {
  $("button").click(function () {
    const data = $("#fitems").val();
    drawBarChart(data);
  });
  $("#fitems").on("change", () => {
    drawItemDetails();
  });
});

const createBarElement = () => {
  const $bar = $(`
  <div class="bar"></div>
  `);
  return $bar;
};

createItemOptionsElement = (itemNumber) => {
  const $itemOptions = $(`
  <div class="options-container">
    <label>Item ${itemNumber}</label>
    <textarea placeholder="Name"></textarea>
    <textarea placeholder="Value"></textarea>
  </div>
  `);
  return $itemOptions;
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

const drawItemDetails = () => {
  $("#item-options-tab").empty();
  const numberOfItems = $("#fitems").val();
  const $itemOptionsTab = $("#item-options-tab");
  for (let i = 1; i <= numberOfItems; i++) {
    $itemOptionsTab.append(createItemOptionsElement(i));
  }
};
