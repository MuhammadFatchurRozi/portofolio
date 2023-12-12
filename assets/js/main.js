// load ajax html content into div with id="content"
// when user clicks on a link with class="ajax"
$(document).ready(function () {
  $(".ajax").click(function () {
    $("#content").load($(this).attr("href"));
    return false;
  });
});
// end of ajax load
// end of main.js
