export const drawCustomUnitsField = () => {
  if ($("#funits").val() === "custom") {
    //draw custom field if custom is selected, else delete it
    $("#data-options").append(
      $(`<div class="data-option" id="custom-unit">
          <label for="custom">Custom Units</label>
          <input type="text" autocomplete="off" name="custom" class="text-input" id="custom-units"></input>
         </div>`)
    );
  } else {
    $("#custom-unit").remove();
  }
};
