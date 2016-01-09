/*jslint browser: true*/
/*global $, jQuery, alert, clickOutsideHideSearchBar*/

function showHideSearchBar() {
  "use strict";
  if ($("#search-wrapper").css("z-index") !== "0") {
    $("#search-wrapper").css("z-index", "0");
  } else {
    $("#search-wrapper").css("z-index", "-1");
  }
  $(".nav-btn, .nav-item .account-icon").fadeToggle(50);
  $("#search-field").animate({
    width: 'toggle',
    opacity: 'toggle'
  }, 150, function () {
    this.focus();
  });
}

function clickOutsideHideSearchBar() {
  "use strict";
  if (!$("a").is(event.target) && !$("a").has(event.target).length && $("#search-field").is(":visible") && !$("#search-field").is(event.target)) {
    showHideSearchBar();
  }
}

$(function () {
  "use strict";

  $("#search-btn").on("click", showHideSearchBar).on("click", function (event) {
    event.preventDefault();
  });

  $(document).on("click", clickOutsideHideSearchBar);

  $("#search-form").submit(function (event) {
    if ($.trim($("#search-field").val()) === "") {
      event.preventDefault();
    }
  });

});