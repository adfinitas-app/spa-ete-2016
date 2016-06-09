$(document).foundation();
$(document).ready(launch);

function part1(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  }, 1000);
}
function part2(e) {
  e.preventDefault();
  var size = $("#stories").offset().top;
  if ($('.navbar').hasClass('sticky') == false) {
    size -= (navSize + 5);
  }
  $('html, body').animate({
    scrollTop: size
  }, 1000);
}
function part3(e) {
  e.preventDefault();
  var size;
  var size = $("#compte").offset().top - navSize;
  if ($('.navbar').hasClass('sticky') == false) {
    console.log("I'm in");
    size -= navSize;
  }
  $('html, body').animate({
    scrollTop: size
  }, 1000);
}
function part4(e) {
  e.preventDefault();
  var size = $("#numbers").offset().top - navSize;
  if ($('.navbar').hasClass('sticky') == false) {
    console.log("I'm in");
    size -= navSize;
  }
  $('html, body').animate({
    scrollTop: size
  }, 1000);
}
function launchAnchors() {
  $("#top-anchor").on("click", part1)
  $("#stories-anchor").on("click", part2)
  $("#compte-anchor").on("click", part3)
  $("#numbers-anchor").on("click", part4)
  $("#team-anchor").on("click", part3)
}

var stickyNavTop;
function sticky() {
  function stickyNav() {
    if ($(window).scrollTop() >= stickyNavTop) {
      $('.navbar').addClass('sticky');
    } else {
      $('.navbar').removeClass('sticky');
    }
  };
  stickyNav();
  $(window).on("scroll", stickyNav);
}
function resetSticky() {
  $('.navbar').removeClass('sticky');
  $(window).off("scroll");
  stickyNavTop = $('.navbar').offset().top;
  sticky();
}

var canvas, stage, exportRoot;
function launchAnim() {
  // --- write your JS code here ---

  canvas = document.getElementById("canvas");
  exportRoot = new lib.Etapes();

  stage = new createjs.Stage(canvas);
  stage.addChild(exportRoot);
  stage.update();

  createjs.Ticker.setFPS(lib.properties.fps);
  createjs.Ticker.addEventListener("tick", stage);
}

function launch() {
  stickyNavTop = $('.navbar').offset().top;
  navSize = $(".navbar .container").outerHeight();
  navSize = 110;
  storyHover();
  videoHide();
  launchAnim();
  launchAnchors();
  sticky();
}

function storyHover() {
  $(".histoires-bloc .animal").on("mouseenter", function() {
    $(this).find(".initial-story").css("display", "none");
    $(this).find(".hover-story").css("display", "inline-block");
  });
  $(".histoires-bloc .animal").on("mouseleave", function() {
    $(this).find(".initial-story").css("display", "inline-block");
    $(this).find(".hover-story").css("display", "none");
  });
}

function videoHide() {
  $(".header video").on("ended", function() {
    $(".header video").hide();
    $(".header .content").show();
    resetSticky();
  });
}
