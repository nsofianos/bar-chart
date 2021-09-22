import { randomColor } from "./random-color.js";
//creates fields for entering details for each item
const createItemOptionsElement = (itemNumber) => {
  const $itemOptions = $(`
  <div class="options-container">
    <label>Item ${itemNumber}</label>
    <textarea id="item-name${itemNumber}" placeholder="Name"></textarea>
    <textarea id="item-val${itemNumber}" placeholder="Value"></textarea>
    <input type="color" value="${randomColor(
      100
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
