$(document).ready(function () {
  $("button").click(function () {
    const data = {
      totalItems: $("#fitems").val(),
      itemDetails: [{ name: "apple", value: 10 }],
    };
    drawBarChart(data);
  });
  $("#fitems").on("change", () => {
    drawItemDetails();
  });
});

const createBarElement = (itemDetails) => {
  const $bar = $(`
  <div class="bar-container">
    <label>${itemDetails.value}</label>
    <div class="bar"></div>
  </div>
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

const drawItemDetails = () => {
  $("#item-options-tab").empty();
  const numberOfItems = $("#fitems").val();
  const $itemOptionsTab = $("#item-options-tab");
  for (let i = 1; i <= numberOfItems; i++) {
    $itemOptionsTab.append(createItemOptionsElement(i));
  }
};
