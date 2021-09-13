//creates fields for entering details for each item
const createItemOptionsElement = (itemNumber) => {
  const $itemOptions = $(`
  <div class="options-container">
    <label>Item ${itemNumber}</label>
    <textarea class="item-name" id="item-name${itemNumber}" placeholder="Name"></textarea>
    <textarea class="item-value" id="item-val${itemNumber}" placeholder="Value"></textarea>
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
