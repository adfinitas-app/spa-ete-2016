$(document).foundation()
$(document).ready(launch);

var canvas, stage, exportRoot;
function init() {
	// --- write your JS code here ---
	
	canvas = document.getElementById("canvas");
	images = images||{};

	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad(evt) {
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function handleComplete(evt) {
	exportRoot = new lib.Etapes();

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
  //init();
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
