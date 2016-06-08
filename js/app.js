$(document).foundation();
$(document).ready(launch);

var stickyNavTop;
function sticky() {

  function stickyNav() {
    var scrollTop = $(window).scrollTop();

    if (scrollTop > stickyNavTop) { 
      $('.navbar').addClass('sticky');
    } else {
      $('.navbar').removeClass('sticky'); 
    }
  };

  stickyNav();

  $(window).scroll(stickyNav);
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
  storyHover();
  videoHide();
  launchAnim();
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
    stickyNavTop = $('.navbar').offset().top;
  });
}
