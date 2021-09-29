import { randomColor } from "./random-color.js";
//creates fields for entering details for each item
const createItemOptionsElement = (itemNumber) => {
  const $itemOptions = $(`
  <div class="options-container">
    <label>Item ${itemNumber}</label>
    <input type="text" autocomplete="off" class="text-input" id="item-name${itemNumber}" placeholder="Name"></input>
    <input type="text" autocomplete="off" class="text-input value" id="item-val${itemNumber}" placeholder="Value"></input>
    <input type="color" value="${randomColor(
      200
    )}" id="item-color${itemNumber}"></input>
  </div>
  `);
  return $itemOptions;
};

//draw all item fields
export const drawItemDetails = () => {
  //clear fields
  $("#item-options-tab").empty();

  const $numberOfItems = $("#fitems").val();
  const $itemOptionsTab = $("#item-options-tab");

  //draw fields
  for (let i = 1; i <= $numberOfItems; i++) {
    $itemOptionsTab.append(createItemOptionsElement(i));
  }
};
