/*jslint browser: true*/
/*global $, jQuery, alert, clickOutsideHideSearchBar*/

function toggleSearchBar() {
  "use strict";

  var duration = 150,
    d1,
    d2;

  if ($("#search-field").hasClass("show")) {
    $("#search-field").removeClass('show');
    $("#search-form").css("z-index", "-1");

    $(".nav-btn, #account-btn").stop();
    $("#search-field").stop();

    d1 = $("#search-field").width() / $("#search-field").parent().width() * duration;
    d2 = d1 / 3;

    $(".nav-btn, #account-btn").fadeIn(d2, "easeInExpo");
    $("#search-field").animate({
      width: 'toggle',
      opacity: 'toggle'
    }, d1, "easeOutSine");

  } else {
    $("#search-field").addClass('show');
    $("#search-form").css("z-index", "0");

    $(".nav-btn, #account-btn").stop();
    $("#search-field").stop();

    d1 = (1 - $("#search-field").width() / $("#search-field").parent().width()) * duration;
    d1 = ($("#search-field").is(":visible")) ? d1 : duration;
    d2 = d1 / 3;

    $(".nav-btn, #account-btn").fadeOut(d2, "easeOutExpo");
    $("#search-field").animate({
      width: 'toggle',
      opacity: 'toggle'
    }, d1, "easeInSine", function () {
      this.focus();
    });
  }
}

function clickOutsideHideSearchBar() {
  "use strict";
  if (!$("a").is(event.target) && !$("a").has(event.target).length && $("#search-field").is(":visible") && !$("#search-field").is(event.target)) {
    toggleSearchBar();
  }
}

$(function () {
  "use strict";

  $("#search-btn").on("click", toggleSearchBar).on("click", function (event) {
    event.preventDefault();
  });

  $(document).on("click", clickOutsideHideSearchBar);

  $("#search-form").submit(function (event) {
    if ($.trim($("#search-field").val()) === "") {
      event.preventDefault();
    }
  });

});