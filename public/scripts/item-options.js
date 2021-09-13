const createItemOptionsElement = (itemNumber) => {
  const $itemOptions = $(`
  <div class="options-container">
    <label>Item ${itemNumber}</label>
    <textarea placeholder="Name"></textarea>
    <textarea placeholder="Value"></textarea>
  </div>
  `);
  return $itemOptions;
};

export const drawItemDetails = () => {
  $("#item-options-tab").empty();
  const numberOfItems = $("#fitems").val();
  const $itemOptionsTab = $("#item-options-tab");
  for (let i = 1; i <= numberOfItems; i++) {
    $itemOptionsTab.append(createItemOptionsElement(i));
  }
};
