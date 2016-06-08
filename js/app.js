$(document).foundation()
$(document).ready(launch);

var canvas, stage, exportRoot;
function anim1() {
	// --- write your JS code here ---
	
	canvas = document.getElementById("canvas1");
	exportRoot = new lib.ETAPE_1();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
}
function anim2() {
	// --- write your JS code here ---
	
	canvas = document.getElementById("canvas2");
	exportRoot = new lib.ETAPE_2();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
}


function launch() {
  storyHover();
  videoHide();
  // TODO: Load on viewport
  anim1();
  anim2();
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
  });
}
