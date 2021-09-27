export const validateForm = (options, items) => {
  //clear any error msgs
  $(".error-msg-container").empty();
  let valid = true;
  $(".text-input").each(function (i, obj) {
    if (!$(obj).val()) {
      $(obj).css("border", "1px solid #ff6262");
      valid = false;
    } else $(obj).css("border", "");
    if (!Number.isInteger(parseInt($(obj).val()))) {
      $(obj).css("border", "1px solid #ff6262");
      valid = false;
    } else $(obj).css("border", "");
  });
  if (!valid) {
    $(".error-msg-container").append(
      '<h3 class="error-msg">Invalid Fields</h3>'
    );
    $(".error-msg").hide();
    $(".error-msg").slideDown(300);
  }
  return valid;
};
