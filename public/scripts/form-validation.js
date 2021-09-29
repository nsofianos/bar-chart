export const validateForm = (options, items) => {
  //clear any error msgs
  $(".error-msg-container").empty();
  let valid = true;
  let error = "";
  //check each input field for error
  $(".text-input").each(function (i, obj) {
    //check is value is a number
    $(".value").each(function (i, obj) {
      if (!Number.isInteger(parseInt($(obj).val()))) {
        $(obj).css("border", "1px solid #ff6262");
        valid = false;
        error = "value";
      } else $(obj).css("border", "");
    });
    //check if field is empty
    if (!$(obj).val()) {
      $(obj).css("border", "1px solid #ff6262");
      valid = false;
      error = "empty";
    } else $(obj).css("border", "");
  });
  //display message if error
  if (!valid) {
    if (error === "value")
      $(".error-msg-container").append(
        '<h3 class="error-msg">Item Value Must Be A Number</h3>'
      );
    else
      $(".error-msg-container").append(
        '<h3 class="error-msg">Empty Fields</h3>'
      );
    $(".error-msg").hide();
    $(".error-msg").slideDown(300);
  }
  return valid;
};
