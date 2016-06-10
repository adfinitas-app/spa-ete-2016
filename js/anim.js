(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 920,
	height: 200,
	fps: 40,
	color: "#000000",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Tween24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F27020").s().p("AgGBXIAGgfIhIAAIALg5IBFhVIAvAAIhGBaIgDAQIAZAAIAGghIAqAAIgHAhIAZAAIgGAkIgZAAIgGAfg");
	this.shape.setTransform(-0.4,-0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.7,-9.7,14.7,17.5);


(lib.Tween23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("AjniLIDnCLIDqiBIAAENInRAAQgBhFAAhGQgBiKACgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.4,-15,48.8,30.1);


(lib.Tween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("AiEAuIAAhjIEJAAIAABy");
	this.shape.setTransform(0,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.3,-6.8,28.7,13.7);


(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("AiEAbIAAg3IEJAAIAABB");
	this.shape.setTransform(-0.3,-3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("ADpBOIjpiaIjoCQ");
	this.shape_1.setTransform(0.1,-13.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("AjniLIDnCLIDqiBIAAENInRAAQgBhFAAhGQgBiKACgCg");
	this.shape_2.setTransform(0,7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.4,-22.3,48.8,44.7);


(lib.Tween19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F27020").s().p("Ag/BNQgLgLAAgTIABgPIAtAAIAAAFQAAAIAFAEQAGAEAKAAQAKAAAHgGQAIgGAAgKQAAgHgFgEQgFgEgIAAIgYAAIAFgZIATAAQAFAAAFgCQAGgCAEgEQAFgEACgEQACgEAAgFQAAgJgFgFQgGgEgLAAQgJAAgGAGQgHAHAAALIABAIIgsAAIgBgMQAAgbAUgQQATgQAjAAQAeAAAPAMQAIAHADAIQAEAJAAAKQAAAJgDAJQgDAIgFAIQgMAOgPAAIAAABQALAAAHAIQAEAEABAFQACAGAAAGQAAAegTAPQgUAOglAAQghAAgQgPg");
	this.shape.setTransform(0.1,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.4,-10.4,15.2,18.6);


(lib.Tween18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5).p("AA6AAQAAAcgRAUQgRAUgYAAQgXAAgRgUQgRgUAAgcQAAgbARgUQARgUAXAAQAYAAARAUQARAUAAAbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.9,-11,16.5,22);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5).p("AgjgpIAagIQAagBALAdQAHAQgLAbQgLAfgTgE");
	this.shape.setTransform(0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-9.4,10.4,15.5);


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5).p("AAhgpQgMgHgOgBQgagBgLAcQgGARALAbQALAfATgE");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-6,10.9,15.5);


(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5).p("ABsCBIjXAAIAAkBIDXAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.8,-13.9,23.7,27.9);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5).p("ABDAAIiFAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.7,-1,15.5,2);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5).p("ABpAAIjRAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-1,23,2);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5).p("ABpAAIjRAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-1,23,2);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5).p("ABpAAIjRAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-1,23,2);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F27020").s().p("AhMBbIADgTQADgQAJgMQAJgMAMgIIAvgYQALgFAHgIQADgEACgFQACgFAAgFQAAgTgUABQgIgBgEADQgEACgEAFQgIAIAAAPQAAAHACAEIgsAAQgCgGAAgJQAAgQAFgMQAFgMAKgJQAVgSAkgBQAeAAAPANQAPANAAAYQAAAIgCAJQgCAIgEAIQgJANgMAJIgYARIgVAMQgIAFAAACIAAAAIBBAAIgIAog");
	this.shape.setTransform(-0.1,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.8,-10.4,15.6,18.2);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5).p("ACMAAIkXAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-1,30,2);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5).p("ACMAAIkXAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-1,30,2);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5).p("ACMAAIkXAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-1,30,2);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5).p("ADXAAImtAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-1,45,2);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5).p("ADXAAImtAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-1,45,2);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5).p("Aj7AAIH3AA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.2,-1,52.5,2);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5).p("AA0AyIhnAAIAAhjIBnAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.2,-6,12.5,12);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5).p("ADkDDInIAAQgJAAgIgIQgGgGAAgKIAAlWQAAgJAGgHQAIgHAJAAIHIAAQAKAAAHAHQAHAHAAAJIAAFWQAAAKgHAGQgHAIgKAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.2,-20.5,52.5,41);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F27020").s().p("AgSBaIATh3QgBAGgGAEQgFAFgIAEQgQAJgSAAIgCgqQALAAALgEQALgDALgHQASgOAFgRIAtAAIggCyg");
	this.shape.setTransform(0.7,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-10.2,11.4,18);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AiFkMIELEMIkLEN");
	this.shape.setTransform(13.5,26.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,28.9,55.8);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGBXIAGggIhIAAIALg3IBFhWIAvAAIhGBbIgDAOIAZAAIAGggIAqAAIgHAgIAZAAIgGAkIgZAAIgGAgg");
	this.shape.setTransform(7.3,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.7,17.5);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/BNQgLgLAAgTIABgPIAtAAIAAAFQAAAIAFAEQAGAEAKAAQAKAAAHgGQAIgGAAgKQAAgHgFgEQgFgEgIAAIgYAAIAFgZIATAAQAFAAAFgCQAGgCAEgEQAFgEACgEQACgEAAgFQAAgJgFgFQgGgEgLAAQgJAAgGAGQgHAHAAALIABAIIgsAAIgBgMQAAgbAUgQQATgQAjAAQAeAAAPAMQAIAHADAIQAEAJAAAKQAAAJgDAJQgDAIgFAIQgMAOgPAAIAAABQALAAAHAIQAEAEABAFQACAGAAAGQAAAegTAPQgUAOglAAQghAAgQgPg");
	this.shape.setTransform(7.6,9.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.2,18.6);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhMBaIADgSQADgQAJgMQAJgNAMgGIAvgZQALgFAHgJQADgDACgGQACgEAAgGQAAgSgUAAQgIAAgEADQgEACgEAEQgIAJAAAPQAAAHACAEIgsAAQgCgGAAgKQAAgPAFgMQAFgMAKgJQAVgTAkAAQAeAAAPANQAPAMAAAZQAAAJgCAHQgCAJgEAHQgJAOgMAJIgYARIgVAMQgIAFAAACIAAABIBBAAIgIAmg");
	this.shape.setTransform(7.8,9.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.6,18.2);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSBaIATh2QgBAFgFAEQgGAFgIAFQgQAIgSAAIgDgqQAMAAALgDQALgEALgHQASgPAFgRIAtAAIggCzg");
	this.shape.setTransform(5.7,9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11.4,18);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("AAhhYIgqAAQgIgBgHAGQgOAMAFAgQAHA1ANAdQATAuAlAB");
	this.shape.setTransform(3.6,9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,9.9,20);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("AghhZIAsAAIAPAFQAOAMgEAgQgIA2gOAdQgTAugmAB");
	this.shape.setTransform(4.5,9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,10.2,20);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("AgOglIgFALQgEAFgEAAIgNAAQgFAAgDAFQgCAFADAEIAMANQACACAAADIAAAYQAAAFAEACQAEADAFgCIAQgJQAEgCADADIAOAIQAEADAFgCQAEgDAAgFIABgVQAAgDACgDIAPgQQADgFgCgFQgDgFgFAAIgRAAQgEAAgDgEIgJgMQgFgHgFABQgIAAgEAHg");
	this.shape.setTransform(5,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,12.1,11.1);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("AjniLIDnCLIDqiBIAAENInRAAQgBhFAAhGQgBiKACgCg");
	this.shape.setTransform(23.4,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("ADpg6InRgKIDoCJg");
	this.shape_1.setTransform(23.3,6.9,1,1,0,0,0,-0.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,48.8,30.1);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5).p("AgPAcIAAgTQAAgKAOgKQALgJANAA");
	this.shape.setTransform(1.7,9.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1.5).p("AgXgUQAOAAALAJQAOAKAAAKIAAAT");
	this.shape_1.setTransform(12.4,9.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1.5).p("AAAAJIAAgR");
	this.shape_2.setTransform(6.9,6.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgFAKIgIgKQgEgCADgFQACgFAGAAIANAAQAGAAACAFQADAEgEADIgHAKQgDADgEAAQgDAAgCgDg");
	this.shape_3.setTransform(6.9,4.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHAIQgDgEAAgEQAAgDADgEQAEgDADAAQAFAAACADQAEAEAAADQAAAEgEAEQgCADgFAAQgDAAgEgDg");
	this.shape_4.setTransform(9.8,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGAIQgEgEAAgEQAAgDAEgEQACgDAEAAQAEAAAEADQADAEAAADQAAAEgDAEQgEADgEAAQgEAAgCgDg");
	this.shape_5.setTransform(3.8,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,16,13.2);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5).p("AD8DNIn4AAQgTAAgMgNQgNgOAAgSIAAlAQAAgSANgNQAMgNATAAIH4AAQATAAANANQANANAAASIAAFAQAAASgNAOQgNANgTAAg");
	this.shape.setTransform(29.8,20.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,61.5,43);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsA4IAXhvIBCAAIgFAYIglAAIgDASIAiAAIgGAXIggAAIgEAVIAjAAIgGAZg");
	this.shape.setTransform(142.6,33.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgjA4IAShXIgYAAIAFgYIBOAAIgFAYIgZAAIgQBXg");
	this.shape_1.setTransform(134.4,33.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AglAvQgLgMAAgVQAAgTAIgRQAIgSAOgIQAOgJAPAAQAVAAARAKIgMAYIgNgHQgGgCgHAAQgIAAgFAGQgHAGgEALQgEAJAAAMQAAALAFAFQAEAFAIAAQAFAAAGgBIAQgGIAAAZQgQAHgQAAQgVAAgLgLg");
	this.shape_2.setTransform(124.6,33.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgsA4IAYhvIBBAAIgEAYIgmAAIgDASIAiAAIgGAXIggAAIgEAVIAiAAIgFAZg");
	this.shape_3.setTransform(114.8,33.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgjA4IAYhvIAdAAIgSBWIAkAAIgFAZg");
	this.shape_4.setTransform(105.4,33.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjA4IAYhvIAdAAIgSBWIAkAAIgFAZg");
	this.shape_5.setTransform(97,33.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgnAvQgMgMAAgVQAAgSAIgSQAIgRAOgJQAOgJAQAAQAUAAAMALQALAMAAAVQAAATgIARQgIARgNAJQgOAJgQAAQgVAAgLgLgAgGgZQgGAGgEAMQgEAJAAAMQAAATAPAAQAGAAAGgGQAHgHADgLQAEgJAAgNQAAgJgEgFQgEgFgGAAQgHAAgGAHg");
	this.shape_6.setTransform(87.4,33.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglAvQgLgMAAgVQAAgTAIgRQAIgSAOgIQAOgJAPAAQAVAAARAKIgMAYIgNgHQgGgCgHAAQgIAAgFAGQgHAGgEALQgEAJAAAMQAAALAFAFQAEAFAIAAQAFAAAGgBIAQgGIAAAZQgQAHgQAAQgVAAgLgLg");
	this.shape_7.setTransform(77,33.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgtA4IAYhvIBDAAIgGAYIglAAIgDASIAiAAIgFAXIghAAIgFAVIAkAAIgGAZg");
	this.shape_8.setTransform(63.1,33.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgyA4IAZhvIAeAAQAWAAALALQANALAAAUQgBAUgHARQgIAPgPAJQgOAIgTAAgAgOAfIAGAAQAIAAAGgFQAGgGAEgKQAEgKgBgLQAAgKgDgEQgFgGgIAAIgDAAg");
	this.shape_9.setTransform(52.7,33.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgsA4IAXhvIBDAAIgGAYIglAAIgDASIAiAAIgFAXIghAAIgEAVIAjAAIgGAZg");
	this.shape_10.setTransform(165.8,13.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgmAuQgLgLAAgWQAAgTAIgRQAJgRAPgIQAPgJARAAQAWAAANAIIgLAYQgMgHgMAAQgKAAgGAGQgIAGgEALQgGAJAAAMQAAAVARAAIAIgBIAFgSIgQAAIAEgWIAvAAIgOA8QgUAGgSAAQgVAAgLgMg");
	this.shape_11.setTransform(155.7,13.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAXA4IgBgVIghAAIgJAVIggAAIA4hvIAoAAIAJBvgAAVAKIgBgfIAAgGIAAgKIgEANIgQAiIAVAAg");
	this.shape_12.setTransform(143.4,13.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AguA4IAYhvIAcAAQATgBALAJQALAJAAAQQAAAUgNAKQgNALgWAAIgGAAIgIAlgAgCgFIADAAQAHABAEgFQAFgEAAgIQgBgEgCgDQgDgDgFAAIgFAAg");
	this.shape_13.setTransform(134,13.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgsA4IAXhvIBDAAIgGAYIglAAIgDASIAiAAIgFAXIghAAIgEAVIAjAAIgGAZg");
	this.shape_14.setTransform(120.8,13.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AANA4IgOgpIgGAAIgJApIgeAAIAYhvIAcAAQAUgBAKAIQALAIAAAQQAAAMgFAJQgGAHgLAFIARAoIADAHgAgBgHIABAAQAIAAAEgDQAFgFgBgIQABgEgDgDQgDgCgFgBIgEAAg");
	this.shape_15.setTransform(110.6,13.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgjA4IAShXIgZAAIAGgYIBPAAIgGAYIgZAAIgRBXg");
	this.shape_16.setTransform(102.3,13.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgoAvQgLgMAAgVQAAgSAIgSQAIgRAOgJQAOgJAQAAQAUAAALALQAMAMAAAVQAAATgIARQgHARgOAJQgOAJgQAAQgVAAgMgLgAgFgZQgHAGgEAMQgEAJAAAMQAAATAPAAQAGAAAHgGQAGgHAEgLQADgJAAgNQAAgJgDgFQgFgFgHAAQgGAAgFAHg");
	this.shape_17.setTransform(91.1,13.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgoA4IgIhvIAeAAIACA8IAAAEIgBAUIABAAIADgMIAFgMIAZg8IAgAAIg3Bvg");
	this.shape_18.setTransform(81.3,13.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgxA4IADgTIA0hEIgjAAIAEgYIBMAAIgFATIg0BDIAoAAIgFAZg");
	this.shape_19.setTransform(66.8,13.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgsA4IAXhvIBDAAIgGAYIglAAIgDASIAiAAIgFAXIghAAIgEAVIAjAAIgGAZg");
	this.shape_20.setTransform(58.3,13.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgwBKIAYhwIBCAAIgFAZIglAAIgCAQIAhAAIgGAZIghAAIgEAVIAjAAIgFAZgAgGgwIAAgBQAIgIANgQIAiAAIAAABQgEAEgLAJIgTALg");
	this.shape_21.setTransform(49.7,11.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAMA4IgNgpIgGAAIgJApIgeAAIAYhvIAdAAQATgBAKAIQALAIAAAQQAAAMgFAJQgGAHgLAFIASAoIACAHgAgBgHIABAAQAIAAAEgDQAEgFABgIQgBgEgCgDQgDgCgFgBIgEAAg");
	this.shape_22.setTransform(39.2,13.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AglAvQgLgMAAgVQAAgTAIgRQAIgSAOgIQAOgJAPAAQAVAAARAKIgMAYIgNgHQgGgCgHAAQgIAAgFAGQgHAGgEALQgEAJAAAMQAAALAFAFQAEAFAIAAQAFAAAGgBIAQgGIAAAZQgQAHgQAAQgVAAgLgLg");
	this.shape_23.setTransform(29.8,13.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,194,45.6);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5).p("AAhgpQgMgHgOgBQgagBgLAcQgGARALAbQALAfATgE");
	this.shape.setTransform(12,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1.5).p("AgjgpIAagIQAagBALAdQAHAQgLAbQgLAfgTgE");
	this.shape_1.setTransform(24.2,21);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1.5).p("AgPAcIAAgTQAAgKAOgKQALgJANAA");
	this.shape_2.setTransform(12.5,30.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(1.5).p("AgXgUQAOAAALAJQAOAKAAAKIAAAT");
	this.shape_3.setTransform(23.2,30.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1.5).p("AAAAJIAAgR");
	this.shape_4.setTransform(17.8,28.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgFAKIgIgKQgEgCADgFQACgFAGAAIANAAQAGAAACAFQADAEgEADIgHAKQgDADgEAAQgDAAgCgDg");
	this.shape_5.setTransform(17.7,26.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgHAIQgDgEAAgEQAAgDADgEQAEgDADAAQAFAAACADQAEAEAAADQAAAEgEAEQgCADgFAAQgDAAgEgDg");
	this.shape_6.setTransform(20.7,22.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGAIQgEgEAAgEQAAgDAEgEQACgDAEAAQAEAAAEADQADAEAAADQAAAEgDAEQgEADgEAAQgEAAgCgDg");
	this.shape_7.setTransform(14.7,22.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(1.5).p("AA6AAQAAAcgRAUQgRAUgYAAQgXAAgRgUQgRgUAAgcQAAgbARgUQARgUAXAAQAYAAARAUQARAUAAAbg");
	this.shape_8.setTransform(17.9,22.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(1.5).p("ABDAAIiFAA");
	this.shape_9.setTransform(39.3,22.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(1.5).p("ABpAAIjRAA");
	this.shape_10.setTransform(43,17.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(1.5).p("ABpAAIjRAA");
	this.shape_11.setTransform(43,12.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(1.5).p("ABpAAIjRAA");
	this.shape_12.setTransform(43,8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(1.5).p("ABsCBIjXAAIAAkBIDXAAg");
	this.shape_13.setTransform(17.8,20.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1.5).p("AD8DNIn4AAQgTAAgMgNQgNgOAAgSIAAlAQAAgSANgNQAMgNATAAIH4AAQATAAANANQANANAAASIAAFAQAAASgNAOQgNANgTAAg");
	this.shape_14.setTransform(29.8,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,61.5,43);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("AgOglIgFALQgEAFgEAAIgNAAQgFAAgDAFQgCAFADAEIAMANQACACAAADIAAAYQAAAFAEACQAEADAFgCIAQgJQAEgCADADIAOAIQAEADAFgCQAEgDAAgFIABgVQAAgDACgDIAPgQQADgFgCgFQgDgFgFAAIgRAAQgEAAgDgEIgJgMQgFgHgFABQgIAAgEAHg");
	this.shape.setTransform(19,15.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AABALIgBgV");
	this.shape_1.setTransform(11.1,21.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AgbAAIA3AA");
	this.shape_2.setTransform(25.3,3.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AgFAAIALAA");
	this.shape_3.setTransform(18.8,4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AAkAbQgPABgQgHQgggOgIgi");
	this.shape_4.setTransform(15.3,27.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("AAhhYIgqAAQgIgBgHAGQgOAMAFAgQAHA1ANAdQATAuAlAB");
	this.shape_5.setTransform(3.6,13.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("AghhZIAsAAIAPAFQAOAMgEAgQgIA2gOAdQgTAugmAB");
	this.shape_6.setTransform(34.4,13.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("AAghDIABATQABAXgFAUQgNA9g3AG");
	this.shape_7.setTransform(12.7,40.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("AgYg/IACA2QAMA3ApAL");
	this.shape_8.setTransform(24.1,40);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AAogbIBnAAQAMAAAJAIQAIAIAAALQAAALgIAJQgJAIgMAAIkeAAQgLAAgJgIQgIgJAAgLQAAgLAIgIQAJgIALAAICbAA");
	this.shape_9.setTransform(18.9,48.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("AiBinID7AAIgUEMQgFARgOARQgeAhgwAAQgwAAgmgeQgggZAAgPQAAgNgQj8g");
	this.shape_10.setTransform(18.7,16.9,1,1,0,0,0,-0.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,40.1,53.5);


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol19();
	this.instance.setTransform(0,7.3,0.085,0.085,0,0,0,23.4,14.1);

	this.instance_1 = new lib.Tween23("synched",0);
	this.instance_1.setTransform(0,7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance}]},13).to({state:[{t:this.instance_1}]},1).wait(52));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:14,scaleX:1.47,scaleY:1.47},10).to({scaleX:1,scaleY:1},13,cjs.Ease.get(0.97)).to({_off:true,regX:0,regY:0,mode:"synched",startPosition:0},1).wait(52));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("ADpg6IjpB+IjoiI");
	this.shape.setTransform(0.1,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("Ajog+IDoB8IDphy");
	this.shape_1.setTransform(0.1,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("Ajog3IDoBvIDphl");
	this.shape_2.setTransform(0.1,-1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("AjogxIDoBiIDphY");
	this.shape_3.setTransform(0.1,-1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("AjogqIDoBVIDphL");
	this.shape_4.setTransform(0.1,-2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("AjogkIDoBJIDpg/");
	this.shape_5.setTransform(0.1,-3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("AjogdIDoA7IDpgx");
	this.shape_6.setTransform(0.1,-3.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("AjogXIDoAvIDpgl");
	this.shape_7.setTransform(0.1,-4.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("ADpgHIjpAYIjogi");
	this.shape_8.setTransform(0.1,-4.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},24).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[]},1).wait(43));

	// Layer 3
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("ADpAFInRgJ");
	this.shape_9.setTransform(0.1,-6.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("AjogEIHRAJ");
	this.shape_10.setTransform(0.1,-6.2);
	this.shape_10._off = true;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("AjoAAIDngIIDqAR");
	this.shape_11.setTransform(0.1,-6.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("AjoAGIDngVIDqAf");
	this.shape_12.setTransform(0.1,-7.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("AjoANIDngjIDqAt");
	this.shape_13.setTransform(0.1,-8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("AjoAUIDogwIDpA6");
	this.shape_14.setTransform(0.1,-8.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("AjoAbIDog+IDpBI");
	this.shape_15.setTransform(0.1,-9.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("AjoAhIDohLIDpBV");
	this.shape_16.setTransform(0.1,-10.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("AjoApIDohaIDpBk");
	this.shape_17.setTransform(0.1,-10.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("AjoAvIDohnIDpBx");
	this.shape_18.setTransform(0.1,-11.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("AjoA2IDoh1IDpB/");
	this.shape_19.setTransform(0.1,-12.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("AjoA9IDoiCIDpCM");
	this.shape_20.setTransform(0.1,-12.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("ADpBOIjpiaIjoCQ");
	this.shape_21.setTransform(0.1,-13.6);
	this.shape_21._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9}]},24).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(25).to({_off:false},0).wait(8).to({_off:true},1).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(44).to({_off:false},0).wait(32));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_24 = new cjs.Graphics().p("Aj7ArIiqjhINLgUIgHC+ImcDXg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(24).to({graphics:mask_graphics_24,x:0,y:-13.4}).wait(52));

	// Layer 2
	this.instance_2 = new lib.Tween22("synched",0);
	this.instance_2.setTransform(-0.2,14.5);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(45).to({_off:false},0).to({y:-3.5},10,cjs.Ease.get(1)).to({y:-0.5},9,cjs.Ease.get(0.99)).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,6.1,4.1,2.5);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol21();
	this.instance.setTransform(19.1,15.4,0.406,0.406,-70,0,0,5,4.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({regY:4.5,scaleX:1.45,scaleY:1.44,rotation:0,x:19,y:15.3},13,cjs.Ease.get(0.93)).to({scaleX:1,scaleY:1},13,cjs.Ease.get(1)).wait(28));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AABAAQgBAAAAAA");
	this.shape.setTransform(18.9,30.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AALABQgLAAgJgB");
	this.shape_1.setTransform(17.9,30.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AAWAGQgPAAgPgGQgHgBgGgE");
	this.shape_2.setTransform(16.8,29.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AAeAOQgPAAgPgHQgSgHgLgN");
	this.shape_3.setTransform(15.9,28.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AAiAUQgPABgRgHQgYgLgLgW");
	this.shape_4.setTransform(15.6,28.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AAjAXQgPABgQgHQgcgMgKgc");
	this.shape_5.setTransform(15.4,27.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AAkAbQgPABgQgHQgggOgIgi");
	this.shape_6.setTransform(15.3,27.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AAnApQgPABgRgHQgfgOgJgiAglgjIgBgG");
	this.shape_7.setTransform(15.1,26.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AAnAwQgPABgQgHQgggOgIgiAgkgcIgCgU");
	this.shape_8.setTransform(15,25.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AAoAyQgPAAgRgHQgggNgIgiAgkgbIgDgW");
	this.shape_9.setTransform(15,25.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(64));

	// Layer 4
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AgBAAIADAA");
	this.shape_10.setTransform(27.9,3.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AgHAAIAPAA");
	this.shape_11.setTransform(27.3,3.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AgQAAIAhAA");
	this.shape_12.setTransform(26.4,3.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AgVAAIArAA");
	this.shape_13.setTransform(25.9,3.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AgZAAIAzAA");
	this.shape_14.setTransform(25.5,3.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AgbAAIA3AA");
	this.shape_15.setTransform(25.3,3.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AgIAAIA2AAAgtAAIAGAA");
	this.shape_16.setTransform(23.5,3.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AgxAAIAOAAAgFAAIA3AA");
	this.shape_17.setTransform(23.2,3.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).wait(66));

	// Layer 16 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_34 = new cjs.Graphics().p("AhiCNIAAkaIC1AAIAPEag");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(34).to({graphics:mask_graphics_34,x:-2,y:13.7}).wait(39));

	// Layer 7
	this.instance_1 = new lib.Symbol23();
	this.instance_1.setTransform(11.5,13.8,1,1,0,0,0,4,9);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({_off:false},0).to({x:4},14,cjs.Ease.get(1)).wait(25));

	// Layer 17 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_34 = new cjs.Graphics().p("AhiCNIAQkaIC0AAIAAEag");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(34).to({graphics:mask_1_graphics_34,x:39.4,y:13.7}).wait(39));

	// Layer 8
	this.instance_2 = new lib.Symbol22();
	this.instance_2.setTransform(25.5,13.8,1,1,0,0,0,4.1,9);
	this.instance_2._off = true;

	this.instance_2.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(34).to({_off:false},0).to({x:34},14,cjs.Ease.get(1)).wait(25));

	// Layer 15 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("AhFA7ICLh1IAAB1g");
	var mask_2_graphics_1 = new cjs.Graphics().p("ABMg/IAAB/IiYAAQAnhJBxg2g");
	var mask_2_graphics_2 = new cjs.Graphics().p("ABThEIAACIIilABQAHhYCegxg");
	var mask_2_graphics_3 = new cjs.Graphics().p("ABbhJIgBCRIiyACQgWhmDJgtg");
	var mask_2_graphics_4 = new cjs.Graphics().p("ABkhNIgBCZIi+ACQgyhzDxgog");
	var mask_2_graphics_5 = new cjs.Graphics().p("ABuhSIgBCiIjKADQhNiCEYgjg");
	var mask_2_graphics_6 = new cjs.Graphics().p("AB4hWIgCCpIjUAEQhoiOE+gfg");
	var mask_2_graphics_7 = new cjs.Graphics().p("ACChaIgCCxIjfAEQiAiaFhgbg");
	var mask_2_graphics_8 = new cjs.Graphics().p("ACMheIgDC4IjpAFQiYimGEgXg");
	var mask_2_graphics_9 = new cjs.Graphics().p("ACVhiIgDC/IjzAGQiuixGkgUg");
	var mask_2_graphics_10 = new cjs.Graphics().p("ACehlIgDDFIj9AGQjDi7HDgQg");
	var mask_2_graphics_11 = new cjs.Graphics().p("ACmhpIgDDMIkFAHQjYjGHggNg");
	var mask_2_graphics_12 = new cjs.Graphics().p("ACuhrIgDDRIkOAHQjrjPH8gJg");
	var mask_2_graphics_13 = new cjs.Graphics().p("AC1hvIgDDYIkVAGQj9jXIVgHg");
	var mask_2_graphics_14 = new cjs.Graphics().p("AC8hxIgEDcIkcAHQkOjfIugEg");
	var mask_2_graphics_15 = new cjs.Graphics().p("ADDh0IgEDhIkjAIQkejoJFgBg");
	var mask_2_graphics_16 = new cjs.Graphics().p("ADJh2IgEDlIkpAIQksjuJZABg");
	var mask_2_graphics_17 = new cjs.Graphics().p("ADOh4IgEDpIkvAJQk5j1JsADg");
	var mask_2_graphics_18 = new cjs.Graphics().p("ADUh6IgFDtIk0AIQlFj6J+AFg");
	var mask_2_graphics_19 = new cjs.Graphics().p("ADYh8IgEDwIk5AJQlQkAKNAHg");
	var mask_2_graphics_20 = new cjs.Graphics().p("ADch+IgED0Ik9AJQlakFKbAIg");
	var mask_2_graphics_21 = new cjs.Graphics().p("ADgh/IgFD2IlBAJQlikJKoAKg");
	var mask_2_graphics_22 = new cjs.Graphics().p("ADjiAIgFD4IlEAJQlqkNKzAMg");
	var mask_2_graphics_23 = new cjs.Graphics().p("ADmiBIgFD6IlHAKQlxkQK9AMg");
	var mask_2_graphics_24 = new cjs.Graphics().p("ADoiCIgFD8IlJAKQl2kTLEANg");
	var mask_2_graphics_25 = new cjs.Graphics().p("ADqiDIgFD9IlLAKQl6kULKANg");
	var mask_2_graphics_26 = new cjs.Graphics().p("ADriDIgFD+IlMAKQl9kWLOAOg");
	var mask_2_graphics_27 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl+kWLQAOg");
	var mask_2_graphics_28 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl/kXLRAPg");
	var mask_2_graphics_29 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl/kXLRAPg");
	var mask_2_graphics_30 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl/kXLRAPg");
	var mask_2_graphics_31 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl/kXLRAPg");
	var mask_2_graphics_32 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl/kXLRAPg");
	var mask_2_graphics_33 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl/kXLRAPg");
	var mask_2_graphics_34 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl/kXLRAPg");
	var mask_2_graphics_35 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl/kXLRAPg");
	var mask_2_graphics_36 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl/kXLRAPg");
	var mask_2_graphics_37 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl/kXLRAPg");
	var mask_2_graphics_38 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl/kXLRAPg");
	var mask_2_graphics_39 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl/kXLRAPg");
	var mask_2_graphics_40 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl/kXLRAPg");
	var mask_2_graphics_41 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl/kXLRAPg");
	var mask_2_graphics_42 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl/kXLRAPg");
	var mask_2_graphics_43 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl/kXLRAPg");
	var mask_2_graphics_44 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl/kXLRAPg");
	var mask_2_graphics_45 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl/kXLRAPg");
	var mask_2_graphics_46 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl/kXLRAPg");
	var mask_2_graphics_47 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl/kXLRAPg");
	var mask_2_graphics_48 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl/kXLRAPg");
	var mask_2_graphics_49 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl/kXLRAPg");
	var mask_2_graphics_50 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl/kXLRAPg");
	var mask_2_graphics_51 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl/kXLRAPg");
	var mask_2_graphics_52 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl/kXLRAPg");
	var mask_2_graphics_53 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl/kXLRAPg");
	var mask_2_graphics_54 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl/kXLRAPg");
	var mask_2_graphics_55 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl/kXLRAPg");
	var mask_2_graphics_56 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl/kXLRAPg");
	var mask_2_graphics_57 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl/kXLRAPg");
	var mask_2_graphics_58 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl/kXLRAPg");
	var mask_2_graphics_59 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl/kXLRAPg");
	var mask_2_graphics_60 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl/kXLRAPg");
	var mask_2_graphics_61 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl/kXLRAPg");
	var mask_2_graphics_62 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl/kXLRAPg");
	var mask_2_graphics_63 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl/kXLRAPg");
	var mask_2_graphics_64 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl/kXLRAPg");
	var mask_2_graphics_65 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl/kXLRAPg");
	var mask_2_graphics_66 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl/kXLRAPg");
	var mask_2_graphics_67 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl/kXLRAPg");
	var mask_2_graphics_68 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl/kXLRAPg");
	var mask_2_graphics_69 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl/kXLRAPg");
	var mask_2_graphics_70 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl/kXLRAPg");
	var mask_2_graphics_71 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl/kXLRAPg");
	var mask_2_graphics_72 = new cjs.Graphics().p("ADsiDIgFD+IlNAKQl/kXLRAPg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:37.4,y:51.7}).wait(1).to({graphics:mask_2_graphics_1,x:36.7,y:51.3}).wait(1).to({graphics:mask_2_graphics_2,x:36,y:50.8}).wait(1).to({graphics:mask_2_graphics_3,x:35.3,y:50.4}).wait(1).to({graphics:mask_2_graphics_4,x:34.4,y:50}).wait(1).to({graphics:mask_2_graphics_5,x:33.4,y:49.7}).wait(1).to({graphics:mask_2_graphics_6,x:32.5,y:49.3}).wait(1).to({graphics:mask_2_graphics_7,x:31.5,y:48.9}).wait(1).to({graphics:mask_2_graphics_8,x:30.6,y:48.6}).wait(1).to({graphics:mask_2_graphics_9,x:29.7,y:48.3}).wait(1).to({graphics:mask_2_graphics_10,x:28.8,y:48}).wait(1).to({graphics:mask_2_graphics_11,x:28,y:47.7}).wait(1).to({graphics:mask_2_graphics_12,x:27.2,y:47.4}).wait(1).to({graphics:mask_2_graphics_13,x:26.5,y:47.2}).wait(1).to({graphics:mask_2_graphics_14,x:25.9,y:46.9}).wait(1).to({graphics:mask_2_graphics_15,x:25.2,y:46.7}).wait(1).to({graphics:mask_2_graphics_16,x:24.6,y:46.5}).wait(1).to({graphics:mask_2_graphics_17,x:24.1,y:46.3}).wait(1).to({graphics:mask_2_graphics_18,x:23.6,y:46.1}).wait(1).to({graphics:mask_2_graphics_19,x:23.1,y:46}).wait(1).to({graphics:mask_2_graphics_20,x:22.7,y:45.8}).wait(1).to({graphics:mask_2_graphics_21,x:22.4,y:45.7}).wait(1).to({graphics:mask_2_graphics_22,x:22.1,y:45.6}).wait(1).to({graphics:mask_2_graphics_23,x:21.8,y:45.5}).wait(1).to({graphics:mask_2_graphics_24,x:21.6,y:45.4}).wait(1).to({graphics:mask_2_graphics_25,x:21.4,y:45.4}).wait(1).to({graphics:mask_2_graphics_26,x:21.3,y:45.3}).wait(1).to({graphics:mask_2_graphics_27,x:21.2,y:45.3}).wait(1).to({graphics:mask_2_graphics_28,x:21.2,y:45.3}).wait(1).to({graphics:mask_2_graphics_29,x:21.2,y:45.3}).wait(1).to({graphics:mask_2_graphics_30,x:21.2,y:45.3}).wait(1).to({graphics:mask_2_graphics_31,x:21.2,y:45.3}).wait(1).to({graphics:mask_2_graphics_32,x:21.2,y:45.3}).wait(1).to({graphics:mask_2_graphics_33,x:21.2,y:45.3}).wait(1).to({graphics:mask_2_graphics_34,x:21.2,y:45.3}).wait(1).to({graphics:mask_2_graphics_35,x:21.2,y:45.3}).wait(1).to({graphics:mask_2_graphics_36,x:21.2,y:45.3}).wait(1).to({graphics:mask_2_graphics_37,x:21.2,y:45.3}).wait(1).to({graphics:mask_2_graphics_38,x:21.2,y:45.3}).wait(1).to({graphics:mask_2_graphics_39,x:21.2,y:45.3}).wait(1).to({graphics:mask_2_graphics_40,x:21.2,y:45.3}).wait(1).to({graphics:mask_2_graphics_41,x:21.2,y:45.3}).wait(1).to({graphics:mask_2_graphics_42,x:21.2,y:45.3}).wait(1).to({graphics:mask_2_graphics_43,x:21.2,y:45.3}).wait(1).to({graphics:mask_2_graphics_44,x:21.2,y:45.3}).wait(1).to({graphics:mask_2_graphics_45,x:21.2,y:45.3}).wait(1).to({graphics:mask_2_graphics_46,x:21.2,y:45.3}).wait(1).to({graphics:mask_2_graphics_47,x:21.2,y:45.3}).wait(1).to({graphics:mask_2_graphics_48,x:21.2,y:45.3}).wait(1).to({graphics:mask_2_graphics_49,x:21.2,y:45.3}).wait(1).to({graphics:mask_2_graphics_50,x:21.2,y:45.3}).wait(1).to({graphics:mask_2_graphics_51,x:21.2,y:45.3}).wait(1).to({graphics:mask_2_graphics_52,x:21.2,y:45.3}).wait(1).to({graphics:mask_2_graphics_53,x:21.2,y:45.3}).wait(1).to({graphics:mask_2_graphics_54,x:21.2,y:45.3}).wait(1).to({graphics:mask_2_graphics_55,x:21.2,y:45.3}).wait(1).to({graphics:mask_2_graphics_56,x:21.2,y:45.3}).wait(1).to({graphics:mask_2_graphics_57,x:21.2,y:45.3}).wait(1).to({graphics:mask_2_graphics_58,x:21.2,y:45.3}).wait(1).to({graphics:mask_2_graphics_59,x:21.2,y:45.3}).wait(1).to({graphics:mask_2_graphics_60,x:21.2,y:45.3}).wait(1).to({graphics:mask_2_graphics_61,x:21.2,y:45.3}).wait(1).to({graphics:mask_2_graphics_62,x:21.2,y:45.3}).wait(1).to({graphics:mask_2_graphics_63,x:21.2,y:45.3}).wait(1).to({graphics:mask_2_graphics_64,x:21.2,y:45.3}).wait(1).to({graphics:mask_2_graphics_65,x:21.2,y:45.3}).wait(1).to({graphics:mask_2_graphics_66,x:21.2,y:45.3}).wait(1).to({graphics:mask_2_graphics_67,x:21.2,y:45.3}).wait(1).to({graphics:mask_2_graphics_68,x:21.2,y:45.3}).wait(1).to({graphics:mask_2_graphics_69,x:21.2,y:45.3}).wait(1).to({graphics:mask_2_graphics_70,x:21.2,y:45.3}).wait(1).to({graphics:mask_2_graphics_71,x:21.2,y:45.3}).wait(1).to({graphics:mask_2_graphics_72,x:21.2,y:45.3}).wait(1));

	// Layer 9
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("AAfhAIACATQAAAXgEAUQgOA9g2AA");
	this.shape_18.setTransform(12.7,39.8);

	this.shape_18.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(73));

	// Layer 10
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("AgYg/IACA2QAMA3ApAL");
	this.shape_19.setTransform(24.1,40);

	this.shape_19.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(73));

	// Layer 14 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_0 = new cjs.Graphics().p("AhFA7ICLh1IAAB1g");
	var mask_3_graphics_1 = new cjs.Graphics().p("ABMg/IAAB/IiYAAQAqhBBug+g");
	var mask_3_graphics_2 = new cjs.Graphics().p("ABThEIAACIIilABQAQhICVhBg");
	var mask_3_graphics_3 = new cjs.Graphics().p("ABahJIgBCRIiyACQgJhPC8hEg");
	var mask_3_graphics_4 = new cjs.Graphics().p("ABihNIgBCZIi+ACQgjhUDihHg");
	var mask_3_graphics_5 = new cjs.Graphics().p("ABrhSIgBCiIjKADQg6hbEFhKg");
	var mask_3_graphics_6 = new cjs.Graphics().p("AB0hWIgCCpIjUAEQhRhhEnhMg");
	var mask_3_graphics_7 = new cjs.Graphics().p("AB9haIgCCxIjfAEQhnhnFIhOg");
	var mask_3_graphics_8 = new cjs.Graphics().p("ACGheIgCC4IjqAFQh7htFnhQg");
	var mask_3_graphics_9 = new cjs.Graphics().p("ACOhiIgCC/IjzAGQiPhyGEhTg");
	var mask_3_graphics_10 = new cjs.Graphics().p("ACXhlIgDDFIj9AGQihh3GhhUg");
	var mask_3_graphics_11 = new cjs.Graphics().p("ACehpIgDDMIkFAHQizh8G7hXg");
	var mask_3_graphics_12 = new cjs.Graphics().p("ACmhrIgEDRIkNAHQjEiAHVhYg");
	var mask_3_graphics_13 = new cjs.Graphics().p("ACshvIgDDYIkVAGQjUiEHshag");
	var mask_3_graphics_14 = new cjs.Graphics().p("ACzhxIgEDcIkcAHQjiiIIChbg");
	var mask_3_graphics_15 = new cjs.Graphics().p("AC5h0IgEDhIkjAIQjwiLIXheg");
	var mask_3_graphics_16 = new cjs.Graphics().p("AC+h2IgEDlIkpAIQj8iOIphfg");
	var mask_3_graphics_17 = new cjs.Graphics().p("ADEh4IgEDpIkvAJQkIiTI7hfg");
	var mask_3_graphics_18 = new cjs.Graphics().p("ADIh6IgEDtIk0AIQkTiUJLhhg");
	var mask_3_graphics_19 = new cjs.Graphics().p("ADNh8IgFDwIk5AJQkbiXJZhig");
	var mask_3_graphics_20 = new cjs.Graphics().p("ADQh+IgED0Ik9AJQkliaJmhjg");
	var mask_3_graphics_21 = new cjs.Graphics().p("ADUh/IgFD2IlBAJQkribJxhkg");
	var mask_3_graphics_22 = new cjs.Graphics().p("ADXiAIgFD4IlEAJQkzidJ8hkg");
	var mask_3_graphics_23 = new cjs.Graphics().p("ADZiBIgFD6IlHAJQk3ieKDhlg");
	var mask_3_graphics_24 = new cjs.Graphics().p("ADbiCIgFD7IlJAKQk8igKKhlg");
	var mask_3_graphics_25 = new cjs.Graphics().p("ADdiDIgFD9IlLAKQlAihKQhmg");
	var mask_3_graphics_26 = new cjs.Graphics().p("ADeiEIgFD/IlMAKQlDiiKUhng");
	var mask_3_graphics_27 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlEiiKWhng");
	var mask_3_graphics_28 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlFiiKXhng");
	var mask_3_graphics_29 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlFiiKXhng");
	var mask_3_graphics_30 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlFiiKXhng");
	var mask_3_graphics_31 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlFiiKXhng");
	var mask_3_graphics_32 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlFiiKXhng");
	var mask_3_graphics_33 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlFiiKXhng");
	var mask_3_graphics_34 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlFiiKXhng");
	var mask_3_graphics_35 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlFiiKXhng");
	var mask_3_graphics_36 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlFiiKXhng");
	var mask_3_graphics_37 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlFiiKXhng");
	var mask_3_graphics_38 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlFiiKXhng");
	var mask_3_graphics_39 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlFiiKXhng");
	var mask_3_graphics_40 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlFiiKXhng");
	var mask_3_graphics_41 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlFiiKXhng");
	var mask_3_graphics_42 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlFiiKXhng");
	var mask_3_graphics_43 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlFiiKXhng");
	var mask_3_graphics_44 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlFiiKXhng");
	var mask_3_graphics_45 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlFiiKXhng");
	var mask_3_graphics_46 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlFiiKXhng");
	var mask_3_graphics_47 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlFiiKXhng");
	var mask_3_graphics_48 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlFiiKXhng");
	var mask_3_graphics_49 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlFiiKXhng");
	var mask_3_graphics_50 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlFiiKXhng");
	var mask_3_graphics_51 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlFiiKXhng");
	var mask_3_graphics_52 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlFiiKXhng");
	var mask_3_graphics_53 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlFiiKXhng");
	var mask_3_graphics_54 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlFiiKXhng");
	var mask_3_graphics_55 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlFiiKXhng");
	var mask_3_graphics_56 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlFiiKXhng");
	var mask_3_graphics_57 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlFiiKXhng");
	var mask_3_graphics_58 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlFiiKXhng");
	var mask_3_graphics_59 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlFiiKXhng");
	var mask_3_graphics_60 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlFiiKXhng");
	var mask_3_graphics_61 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlFiiKXhng");
	var mask_3_graphics_62 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlFiiKXhng");
	var mask_3_graphics_63 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlFiiKXhng");
	var mask_3_graphics_64 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlFiiKXhng");
	var mask_3_graphics_65 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlFiiKXhng");
	var mask_3_graphics_66 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlFiiKXhng");
	var mask_3_graphics_67 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlFiiKXhng");
	var mask_3_graphics_68 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlFiiKXhng");
	var mask_3_graphics_69 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlFiiKXhng");
	var mask_3_graphics_70 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlFiiKXhng");
	var mask_3_graphics_71 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlFiiKXhng");
	var mask_3_graphics_72 = new cjs.Graphics().p("ADfiEIgFD/IlNAKQlFiiKXhng");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:mask_3_graphics_0,x:37.4,y:51.7}).wait(1).to({graphics:mask_3_graphics_1,x:36.7,y:51.3}).wait(1).to({graphics:mask_3_graphics_2,x:36,y:50.8}).wait(1).to({graphics:mask_3_graphics_3,x:35.4,y:50.4}).wait(1).to({graphics:mask_3_graphics_4,x:34.6,y:50}).wait(1).to({graphics:mask_3_graphics_5,x:33.7,y:49.7}).wait(1).to({graphics:mask_3_graphics_6,x:32.9,y:49.3}).wait(1).to({graphics:mask_3_graphics_7,x:32,y:48.9}).wait(1).to({graphics:mask_3_graphics_8,x:31.1,y:48.6}).wait(1).to({graphics:mask_3_graphics_9,x:30.3,y:48.3}).wait(1).to({graphics:mask_3_graphics_10,x:29.5,y:48}).wait(1).to({graphics:mask_3_graphics_11,x:28.8,y:47.7}).wait(1).to({graphics:mask_3_graphics_12,x:28.1,y:47.4}).wait(1).to({graphics:mask_3_graphics_13,x:27.4,y:47.2}).wait(1).to({graphics:mask_3_graphics_14,x:26.8,y:46.9}).wait(1).to({graphics:mask_3_graphics_15,x:26.2,y:46.7}).wait(1).to({graphics:mask_3_graphics_16,x:25.7,y:46.5}).wait(1).to({graphics:mask_3_graphics_17,x:25.1,y:46.3}).wait(1).to({graphics:mask_3_graphics_18,x:24.7,y:46.1}).wait(1).to({graphics:mask_3_graphics_19,x:24.3,y:46}).wait(1).to({graphics:mask_3_graphics_20,x:23.9,y:45.8}).wait(1).to({graphics:mask_3_graphics_21,x:23.6,y:45.7}).wait(1).to({graphics:mask_3_graphics_22,x:23.3,y:45.6}).wait(1).to({graphics:mask_3_graphics_23,x:23.1,y:45.5}).wait(1).to({graphics:mask_3_graphics_24,x:22.9,y:45.5}).wait(1).to({graphics:mask_3_graphics_25,x:22.7,y:45.4}).wait(1).to({graphics:mask_3_graphics_26,x:22.6,y:45.4}).wait(1).to({graphics:mask_3_graphics_27,x:22.5,y:45.3}).wait(1).to({graphics:mask_3_graphics_28,x:22.5,y:45.3}).wait(1).to({graphics:mask_3_graphics_29,x:22.5,y:45.3}).wait(1).to({graphics:mask_3_graphics_30,x:22.5,y:45.3}).wait(1).to({graphics:mask_3_graphics_31,x:22.5,y:45.3}).wait(1).to({graphics:mask_3_graphics_32,x:22.5,y:45.3}).wait(1).to({graphics:mask_3_graphics_33,x:22.5,y:45.3}).wait(1).to({graphics:mask_3_graphics_34,x:22.5,y:45.3}).wait(1).to({graphics:mask_3_graphics_35,x:22.5,y:45.3}).wait(1).to({graphics:mask_3_graphics_36,x:22.5,y:45.3}).wait(1).to({graphics:mask_3_graphics_37,x:22.5,y:45.3}).wait(1).to({graphics:mask_3_graphics_38,x:22.5,y:45.3}).wait(1).to({graphics:mask_3_graphics_39,x:22.5,y:45.3}).wait(1).to({graphics:mask_3_graphics_40,x:22.5,y:45.3}).wait(1).to({graphics:mask_3_graphics_41,x:22.5,y:45.3}).wait(1).to({graphics:mask_3_graphics_42,x:22.5,y:45.3}).wait(1).to({graphics:mask_3_graphics_43,x:22.5,y:45.3}).wait(1).to({graphics:mask_3_graphics_44,x:22.5,y:45.3}).wait(1).to({graphics:mask_3_graphics_45,x:22.5,y:45.3}).wait(1).to({graphics:mask_3_graphics_46,x:22.5,y:45.3}).wait(1).to({graphics:mask_3_graphics_47,x:22.5,y:45.3}).wait(1).to({graphics:mask_3_graphics_48,x:22.5,y:45.3}).wait(1).to({graphics:mask_3_graphics_49,x:22.5,y:45.3}).wait(1).to({graphics:mask_3_graphics_50,x:22.5,y:45.3}).wait(1).to({graphics:mask_3_graphics_51,x:22.5,y:45.3}).wait(1).to({graphics:mask_3_graphics_52,x:22.5,y:45.3}).wait(1).to({graphics:mask_3_graphics_53,x:22.5,y:45.3}).wait(1).to({graphics:mask_3_graphics_54,x:22.5,y:45.3}).wait(1).to({graphics:mask_3_graphics_55,x:22.5,y:45.3}).wait(1).to({graphics:mask_3_graphics_56,x:22.5,y:45.3}).wait(1).to({graphics:mask_3_graphics_57,x:22.5,y:45.3}).wait(1).to({graphics:mask_3_graphics_58,x:22.5,y:45.3}).wait(1).to({graphics:mask_3_graphics_59,x:22.5,y:45.3}).wait(1).to({graphics:mask_3_graphics_60,x:22.5,y:45.3}).wait(1).to({graphics:mask_3_graphics_61,x:22.5,y:45.3}).wait(1).to({graphics:mask_3_graphics_62,x:22.5,y:45.3}).wait(1).to({graphics:mask_3_graphics_63,x:22.5,y:45.3}).wait(1).to({graphics:mask_3_graphics_64,x:22.5,y:45.3}).wait(1).to({graphics:mask_3_graphics_65,x:22.5,y:45.3}).wait(1).to({graphics:mask_3_graphics_66,x:22.5,y:45.3}).wait(1).to({graphics:mask_3_graphics_67,x:22.5,y:45.3}).wait(1).to({graphics:mask_3_graphics_68,x:22.5,y:45.3}).wait(1).to({graphics:mask_3_graphics_69,x:22.5,y:45.3}).wait(1).to({graphics:mask_3_graphics_70,x:22.5,y:45.3}).wait(1).to({graphics:mask_3_graphics_71,x:22.5,y:45.3}).wait(1).to({graphics:mask_3_graphics_72,x:22.5,y:45.3}).wait(1));

	// Layer 11
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AApgbIBmAAQAMAAAJAIQAIAIAAALQAAALgIAJQgJAIgMAAIkeAAQgLAAgJgIQgIgJAAgLQAAgLAIgIQAJgIALAAICbAA");
	this.shape_20.setTransform(18.9,48.6);

	this.shape_20.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(73));

	// Layer 13 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_0 = new cjs.Graphics().p("AhEg6ICJAAIiJB1g");
	var mask_4_graphics_1 = new cjs.Graphics().p("Ag/gOIB/goIhfBtQABgbghgqg");
	var mask_4_graphics_2 = new cjs.Graphics().p("Ag7AcIB3hOIg4BlQAAAAgBAAQgDAAg7gXg");
	var mask_4_graphics_3 = new cjs.Graphics().p("Ag3A5IBvh0IgQBeQACAZg0AAQgTAAgagDg");
	var mask_4_graphics_4 = new cjs.Graphics().p("AAohLIAWBWQAEA/h/ACg");
	var mask_4_graphics_5 = new cjs.Graphics().p("AAShdIA6BRQAFBZidARg");
	var mask_4_graphics_6 = new cjs.Graphics().p("AgChtIBcBKQAGBzi5Aeg");
	var mask_4_graphics_7 = new cjs.Graphics().p("AgWh9IB9BEQAHCMjUArg");
	var mask_4_graphics_8 = new cjs.Graphics().p("AgqiMICdA+QAICkjtA3g");
	var mask_4_graphics_9 = new cjs.Graphics().p("Ag8ibIC7A4QAIC8kFBDg");
	var mask_4_graphics_10 = new cjs.Graphics().p("AhOioIDYAyQAJDRkcBOg");
	var mask_4_graphics_11 = new cjs.Graphics().p("Ahfi1IDzAtQAKDmkyBYg");
	var mask_4_graphics_12 = new cjs.Graphics().p("AhvjCIENApQALD5lHBjg");
	var mask_4_graphics_13 = new cjs.Graphics().p("Ah9jNIElAkQALELlaBsg");
	var mask_4_graphics_14 = new cjs.Graphics().p("AiLjYIE8AgQALEclsB1g");
	var mask_4_graphics_15 = new cjs.Graphics().p("AiYjiIFRAcQAMEsl9B9g");
	var mask_4_graphics_16 = new cjs.Graphics().p("AikjrIFkAYQANE7mMCEg");
	var mask_4_graphics_17 = new cjs.Graphics().p("AivjzIF2AUQANFJmaCKg");
	var mask_4_graphics_18 = new cjs.Graphics().p("Ai5j7IGGASQAOFUmoCRg");
	var mask_4_graphics_19 = new cjs.Graphics().p("AjCkCIGVAPQAOFgmzCWg");
	var mask_4_graphics_20 = new cjs.Graphics().p("AjKkIIGiAMQAPFqm/Cbg");
	var mask_4_graphics_21 = new cjs.Graphics().p("AjRkOIGuAKQAOFynHChg");
	var mask_4_graphics_22 = new cjs.Graphics().p("AjXkTIG4AIQAOF6nPClg");
	var mask_4_graphics_23 = new cjs.Graphics().p("AjckXIHAAGQAPGBnWCog");
	var mask_4_graphics_24 = new cjs.Graphics().p("AjhkaIHIAFQAPGGncCqg");
	var mask_4_graphics_25 = new cjs.Graphics().p("AjkkdIHNAEQAPGKngCtg");
	var mask_4_graphics_26 = new cjs.Graphics().p("AjnkfIHRAEQAQGNnkCtg");
	var mask_4_graphics_27 = new cjs.Graphics().p("AjokgIHTADQAQGPnmCvg");
	var mask_4_graphics_28 = new cjs.Graphics().p("AjokgIHUACQAPGQnmCvg");
	var mask_4_graphics_29 = new cjs.Graphics().p("AjokgIHUACQAPGQnmCvg");
	var mask_4_graphics_30 = new cjs.Graphics().p("AjokgIHUACQAPGQnmCvg");
	var mask_4_graphics_31 = new cjs.Graphics().p("AjokgIHUACQAPGQnmCvg");
	var mask_4_graphics_32 = new cjs.Graphics().p("AjokgIHUACQAPGQnmCvg");
	var mask_4_graphics_33 = new cjs.Graphics().p("AjokgIHUACQAPGQnmCvg");
	var mask_4_graphics_34 = new cjs.Graphics().p("AjokgIHUACQAPGQnmCvg");
	var mask_4_graphics_35 = new cjs.Graphics().p("AjokgIHUACQAPGQnmCvg");
	var mask_4_graphics_36 = new cjs.Graphics().p("AjokgIHUACQAPGQnmCvg");
	var mask_4_graphics_37 = new cjs.Graphics().p("AjokgIHUACQAPGQnmCvg");
	var mask_4_graphics_38 = new cjs.Graphics().p("AjokgIHUACQAPGQnmCvg");
	var mask_4_graphics_39 = new cjs.Graphics().p("AjokgIHUACQAPGQnmCvg");
	var mask_4_graphics_40 = new cjs.Graphics().p("AjokgIHUACQAPGQnmCvg");
	var mask_4_graphics_41 = new cjs.Graphics().p("AjokgIHUACQAPGQnmCvg");
	var mask_4_graphics_42 = new cjs.Graphics().p("AjokgIHUACQAPGQnmCvg");
	var mask_4_graphics_43 = new cjs.Graphics().p("AjokgIHUACQAPGQnmCvg");
	var mask_4_graphics_44 = new cjs.Graphics().p("AjokgIHUACQAPGQnmCvg");
	var mask_4_graphics_45 = new cjs.Graphics().p("AjokgIHUACQAPGQnmCvg");
	var mask_4_graphics_46 = new cjs.Graphics().p("AjokgIHUACQAPGQnmCvg");
	var mask_4_graphics_47 = new cjs.Graphics().p("AjokgIHUACQAPGQnmCvg");
	var mask_4_graphics_48 = new cjs.Graphics().p("AjokgIHUACQAPGQnmCvg");
	var mask_4_graphics_49 = new cjs.Graphics().p("AjokgIHUACQAPGQnmCvg");
	var mask_4_graphics_50 = new cjs.Graphics().p("AjokgIHUACQAPGQnmCvg");
	var mask_4_graphics_51 = new cjs.Graphics().p("AjokgIHUACQAPGQnmCvg");
	var mask_4_graphics_52 = new cjs.Graphics().p("AjokgIHUACQAPGQnmCvg");
	var mask_4_graphics_53 = new cjs.Graphics().p("AjokgIHUACQAPGQnmCvg");
	var mask_4_graphics_54 = new cjs.Graphics().p("AjokgIHUACQAPGQnmCvg");
	var mask_4_graphics_55 = new cjs.Graphics().p("AjokgIHUACQAPGQnmCvg");
	var mask_4_graphics_56 = new cjs.Graphics().p("AjokgIHUACQAPGQnmCvg");
	var mask_4_graphics_57 = new cjs.Graphics().p("AjokgIHUACQAPGQnmCvg");
	var mask_4_graphics_58 = new cjs.Graphics().p("AjokgIHUACQAPGQnmCvg");
	var mask_4_graphics_59 = new cjs.Graphics().p("AjokgIHUACQAPGQnmCvg");
	var mask_4_graphics_60 = new cjs.Graphics().p("AjokgIHUACQAPGQnmCvg");
	var mask_4_graphics_61 = new cjs.Graphics().p("AjokgIHUACQAPGQnmCvg");
	var mask_4_graphics_62 = new cjs.Graphics().p("AjokgIHUACQAPGQnmCvg");
	var mask_4_graphics_63 = new cjs.Graphics().p("AjokgIHUACQAPGQnmCvg");
	var mask_4_graphics_64 = new cjs.Graphics().p("AjokgIHUACQAPGQnmCvg");
	var mask_4_graphics_65 = new cjs.Graphics().p("AjokgIHUACQAPGQnmCvg");
	var mask_4_graphics_66 = new cjs.Graphics().p("AjokgIHUACQAPGQnmCvg");
	var mask_4_graphics_67 = new cjs.Graphics().p("AjokgIHUACQAPGQnmCvg");
	var mask_4_graphics_68 = new cjs.Graphics().p("AjokgIHUACQAPGQnmCvg");
	var mask_4_graphics_69 = new cjs.Graphics().p("AjokgIHUACQAPGQnmCvg");
	var mask_4_graphics_70 = new cjs.Graphics().p("AjokgIHUACQAPGQnmCvg");
	var mask_4_graphics_71 = new cjs.Graphics().p("AjokgIHUACQAPGQnmCvg");
	var mask_4_graphics_72 = new cjs.Graphics().p("AjokgIHUACQAPGQnmCvg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:mask_4_graphics_0,x:3.1,y:-1.3}).wait(1).to({graphics:mask_4_graphics_1,x:2.6,y:-1.7}).wait(1).to({graphics:mask_4_graphics_2,x:2.1,y:-2.1}).wait(1).to({graphics:mask_4_graphics_3,x:1.7,y:-1.2}).wait(1).to({graphics:mask_4_graphics_4,x:2.3,y:0.4}).wait(1).to({graphics:mask_4_graphics_5,x:3.7,y:2.2}).wait(1).to({graphics:mask_4_graphics_6,x:5.1,y:3.8}).wait(1).to({graphics:mask_4_graphics_7,x:6.3,y:5.4}).wait(1).to({graphics:mask_4_graphics_8,x:7.6,y:6.9}).wait(1).to({graphics:mask_4_graphics_9,x:8.7,y:8.4}).wait(1).to({graphics:mask_4_graphics_10,x:9.8,y:9.7}).wait(1).to({graphics:mask_4_graphics_11,x:10.9,y:11}).wait(1).to({graphics:mask_4_graphics_12,x:11.9,y:12.3}).wait(1).to({graphics:mask_4_graphics_13,x:12.8,y:13.4}).wait(1).to({graphics:mask_4_graphics_14,x:13.6,y:14.5}).wait(1).to({graphics:mask_4_graphics_15,x:14.4,y:15.5}).wait(1).to({graphics:mask_4_graphics_16,x:15.2,y:16.4}).wait(1).to({graphics:mask_4_graphics_17,x:15.9,y:17.2}).wait(1).to({graphics:mask_4_graphics_18,x:16.5,y:18}).wait(1).to({graphics:mask_4_graphics_19,x:17.1,y:18.7}).wait(1).to({graphics:mask_4_graphics_20,x:17.6,y:19.3}).wait(1).to({graphics:mask_4_graphics_21,x:18,y:19.9}).wait(1).to({graphics:mask_4_graphics_22,x:18.4,y:20.4}).wait(1).to({graphics:mask_4_graphics_23,x:18.7,y:20.8}).wait(1).to({graphics:mask_4_graphics_24,x:19,y:21.1}).wait(1).to({graphics:mask_4_graphics_25,x:19.2,y:21.4}).wait(1).to({graphics:mask_4_graphics_26,x:19.4,y:21.6}).wait(1).to({graphics:mask_4_graphics_27,x:19.5,y:21.7}).wait(1).to({graphics:mask_4_graphics_28,x:19.5,y:21.7}).wait(1).to({graphics:mask_4_graphics_29,x:19.5,y:21.7}).wait(1).to({graphics:mask_4_graphics_30,x:19.5,y:21.7}).wait(1).to({graphics:mask_4_graphics_31,x:19.5,y:21.7}).wait(1).to({graphics:mask_4_graphics_32,x:19.5,y:21.7}).wait(1).to({graphics:mask_4_graphics_33,x:19.5,y:21.7}).wait(1).to({graphics:mask_4_graphics_34,x:19.5,y:21.7}).wait(1).to({graphics:mask_4_graphics_35,x:19.5,y:21.7}).wait(1).to({graphics:mask_4_graphics_36,x:19.5,y:21.7}).wait(1).to({graphics:mask_4_graphics_37,x:19.5,y:21.7}).wait(1).to({graphics:mask_4_graphics_38,x:19.5,y:21.7}).wait(1).to({graphics:mask_4_graphics_39,x:19.5,y:21.7}).wait(1).to({graphics:mask_4_graphics_40,x:19.5,y:21.7}).wait(1).to({graphics:mask_4_graphics_41,x:19.5,y:21.7}).wait(1).to({graphics:mask_4_graphics_42,x:19.5,y:21.7}).wait(1).to({graphics:mask_4_graphics_43,x:19.5,y:21.7}).wait(1).to({graphics:mask_4_graphics_44,x:19.5,y:21.7}).wait(1).to({graphics:mask_4_graphics_45,x:19.5,y:21.7}).wait(1).to({graphics:mask_4_graphics_46,x:19.5,y:21.7}).wait(1).to({graphics:mask_4_graphics_47,x:19.5,y:21.7}).wait(1).to({graphics:mask_4_graphics_48,x:19.5,y:21.7}).wait(1).to({graphics:mask_4_graphics_49,x:19.5,y:21.7}).wait(1).to({graphics:mask_4_graphics_50,x:19.5,y:21.7}).wait(1).to({graphics:mask_4_graphics_51,x:19.5,y:21.7}).wait(1).to({graphics:mask_4_graphics_52,x:19.5,y:21.7}).wait(1).to({graphics:mask_4_graphics_53,x:19.5,y:21.7}).wait(1).to({graphics:mask_4_graphics_54,x:19.5,y:21.7}).wait(1).to({graphics:mask_4_graphics_55,x:19.5,y:21.7}).wait(1).to({graphics:mask_4_graphics_56,x:19.5,y:21.7}).wait(1).to({graphics:mask_4_graphics_57,x:19.5,y:21.7}).wait(1).to({graphics:mask_4_graphics_58,x:19.5,y:21.7}).wait(1).to({graphics:mask_4_graphics_59,x:19.5,y:21.7}).wait(1).to({graphics:mask_4_graphics_60,x:19.5,y:21.7}).wait(1).to({graphics:mask_4_graphics_61,x:19.5,y:21.7}).wait(1).to({graphics:mask_4_graphics_62,x:19.5,y:21.7}).wait(1).to({graphics:mask_4_graphics_63,x:19.5,y:21.7}).wait(1).to({graphics:mask_4_graphics_64,x:19.5,y:21.7}).wait(1).to({graphics:mask_4_graphics_65,x:19.5,y:21.7}).wait(1).to({graphics:mask_4_graphics_66,x:19.5,y:21.7}).wait(1).to({graphics:mask_4_graphics_67,x:19.5,y:21.7}).wait(1).to({graphics:mask_4_graphics_68,x:19.5,y:21.7}).wait(1).to({graphics:mask_4_graphics_69,x:19.5,y:21.7}).wait(1).to({graphics:mask_4_graphics_70,x:19.5,y:21.7}).wait(1).to({graphics:mask_4_graphics_71,x:19.5,y:21.7}).wait(1).to({graphics:mask_4_graphics_72,x:19.5,y:21.7}).wait(1));

	// Layer 12
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("AiBinID8AAIgUEMQgFARgPARQgdAhgwAAQgwAAgngeQgfgZAAgPQAAgNgRj8g");
	this.shape_21.setTransform(18.7,16.9,1,1,0,0,0,-0.4,0);

	this.shape_21.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(73));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.1,-1,32.1,53.5);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 18 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_35 = new cjs.Graphics().p("AjUCsIAAlXIGpAAIAAFXg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(35).to({graphics:mask_graphics_35,x:16.9,y:16}).wait(44));

	// Layer 3
	this.instance = new lib.Tween17("synched",0);
	this.instance.setTransform(24,38.5);
	this.instance._off = true;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5).p("AAcg6QAGAEAHAOQAHANABAXQACAVgBAPQgEAIgGAIQgRAUgXAAQgYAAgSgUQgGgHgDgJQgCgPAAgVQABgYAIgNQAJgNAHgFQANgIAPAAQAPAAANAJIAXgHQAcgBALAdQAHAQgLAbQgKAdgagDQgBgBgDAAAgZg5QgBgBgCgBQgKgFgNgBQgcgBgLAcQgGARALAbQALAfAXgF");
	this.shape.setTransform(18,22.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1.5).p("AAcg6QAHAEAHAOQAHANABAXQABAVAIgDQgDAGgCAFQgIARgFAGQgRAUgYAAQgXAAgSgUQgGgHgIgZQADABAAgVQAAgYAJgNQAJgNAHgFQgLgFgMgBQgcgBgLAcQgGARALAbQALAfASgVAAcg6IAYgHQAcgBAJAWQAIAXgKAbQgLAdgRgVAgYg5QgCgBgBgBQANgIAOAAQAPAAANAJAA2AZQgCAHAEAA");
	this.shape_1.setTransform(17.9,22.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("AAcg6QADAFACAIQACAIAKALQAKAMAGAHQgFAbgDAFQgIARgFAGQgRAUgXAAQgVgBgMgLQgMgLgJg0QACgEAAgCIAAAIIgCgCQAAgCABgDQAAAAABgBIAAAAAAcg6IAYgHQAcgBAIASQAJATgLAUQgLASgOgQAgbg7QgLgFgMgBQgcgBgJAVQgJAWAKAQQAKANAXgSQADgTAHgKQAIgNAIgFQAMgIAPAAQAPAAANAJAgYg5QgCgBgBgBAA1AZQgCAHAEAA");
	this.shape_2.setTransform(18,22.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("AAagkQADAEADACQACABALAFQAKAEAGAMQgHAygDAFQgIARgFAGQgRAUgVgBQgXAAgNgMQgNgMgHg0QACgEAAgCAAagkIAWgrQAngbAEAyQAEAxgLASQgLATgMgmAgdglQgIgTgQgUQgQgVgOAwQgOAwAKAIQALAJAVgRQADgIAHgKQAIgOAIgEQAMgIAQAAQAOAAANAJAg3gBQAAAIABAAIAAAAIAAAIIgCgCQAAgDABgLgAgagkQgCAAgBgBAAzAvQgCAHAEAA");
	this.shape_3.setTransform(18.2,20.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("AAagpIAWgqQAngGAAAnQgBAmgKAMQgJAKgMgYQgBA0gDAFQgIARgFAGQgRAUgVgBQgXAAgNgMQgNgMgHg0QAAgDAEgWQgDATABgBIAAABIAAAIIgCgCQACgFAAgBAAagpQADAFAFAHQAEAGABABQAAAAAQAIAgdgpQAOgQgfgQQgfgQgGAlQgGAlAJANQAJAKATgYQAAADAHgKQAIgOAIgEQAMgIAQAAQAOAAANAIAgagoQgCgBgBAAAAzArQgCAGAEAB");
	this.shape_4.setTransform(18.2,20.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("AAbgiIAWgqQAmglAAA2QAAA2gKAKQgJAMgMgYQgBA0gDAFQgIARgFAGQgRAUgWgBQgWAAgNgMQgNgMgHg0QAAgDAEgWQgDATABgBIAAABIAAAIIgCgCQACgFAAgBAAbgiQADAFAFAHQAFAGAAABQAAAAAQAIAgcgiQAOgQghgcQghgbgEAuQgFAvAKAMQAJAPATgYQAAADAHgKQAIgOAIgEgAgZghQgCgBgBAAQAMgIAQAAQAOAAANAIAA0AyQgCAGAEAB");
	this.shape_5.setTransform(18.1,20.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("AAbgiIAWgqQAmglAAA2QAAA2gKAKQgJAMgMgYQgBA0gDAFQgIARgFAGQgRAUgWgBQgWAAgNgMQgNgMgHg0QAAgDAEgWQgDATABgBIAAABIAAAIIgCgCQACgFAAgBAAbgiQADAFAFAHQAFAGAAABQAAAAAQAIAgcgiQAOgQghgcQghgbgEAuQgFAvAKAMQAJAPATgYQAAADAHgKQAIgOAIgEQAMgIAQAAQAOAAANAIAgZghQgCgBgBAAAA0AyQgCAGAEAB");
	this.shape_6.setTransform(18.1,20.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(1.5,0,1).p("AAagpIAWgqQAngGAAAnQgBAmgKAMQgJAKgMgYQgBA0gDAFQgIARgFAGQgRAUgVgBQgXAAgNgMQgNgMgHg0QAAgDAEgWQgDATABgBIAAABIAAAIIgCgCQACgFAAgBAAagpQADAFAFAHQAEAGABABQAAAAAQAIAgdgpQAOgQgfgQQgfgQgGAlQgGAlAJANQAJAKATgYQAAADAHgKQAIgOAIgEgAgagoQgCgBgBAAQAMgIAQAAQAOAAANAIAAzArQgCAGAEAB");
	this.shape_7.setTransform(18.2,20.9);

	this.instance.mask = this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},35).to({state:[{t:this.instance}]},12).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},3).to({state:[{t:this.shape_4}]},3).to({state:[{t:this.shape_6}]},4).to({state:[{t:this.shape_7}]},3).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35).to({_off:false},0).to({y:21},12,cjs.Ease.get(1)).to({_off:true},1).wait(31));

	// Layer 2
	this.instance_1 = new lib.Tween16("synched",0);
	this.instance_1.setTransform(12,38.5);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35).to({_off:false},0).to({y:21},12,cjs.Ease.get(1)).to({_off:true},1).wait(31));

	// Layer 10
	this.instance_2 = new lib.Tween18("synched",0);
	this.instance_2.setTransform(17.9,40.2);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35).to({_off:false},0).to({y:22.7},12,cjs.Ease.get(1)).to({_off:true},1).wait(31));

	// Layer 4
	this.instance_3 = new lib.Symbol18();
	this.instance_3.setTransform(17.9,45.3,1,1,0,0,0,7,6.5);
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(35).to({_off:false},0).to({y:27.8},12,cjs.Ease.get(1)).wait(32));

	// Layer 15
	this.instance_4 = new lib.Tween15("synched",0);
	this.instance_4.setTransform(17.8,20.5,0.093,0.093);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({scaleX:1.23,scaleY:1.23},10).to({scaleX:1,scaleY:1},11,cjs.Ease.get(1)).wait(44));

	// Layer 11
	this.instance_5 = new lib.Tween14("synched",0);
	this.instance_5.setTransform(39.3,22.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(35).to({_off:false},0).to({alpha:1},11).wait(33));

	// Layer 12
	this.instance_6 = new lib.Tween13("synched",0);
	this.instance_6.setTransform(43,17.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(31).to({_off:false},0).to({alpha:1},11).wait(37));

	// Layer 13
	this.instance_7 = new lib.Tween12("synched",0);
	this.instance_7.setTransform(43,12.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(27).to({_off:false},0).to({alpha:1},11).wait(41));

	// Layer 14
	this.instance_8 = new lib.Tween11("synched",0);
	this.instance_8.setTransform(43,8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(23).to({_off:false},0).to({alpha:1},11).wait(45));

	// Layer 16
	this.instance_9 = new lib.Symbol17();
	this.instance_9.setTransform(29.8,20.5,0.059,0.059,0,0,0,29.8,20.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regY:20.5,scaleX:1.26,scaleY:1.26},10).to({scaleX:1,scaleY:1},15,cjs.Ease.get(0.99)).wait(54));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(28,19.3,3.6,2.5);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAAQgBgIAJAAQAKAAAAAIQAAADgDAEQgEADgDAAQgJAAABgKg");
	this.shape.setTransform(12.3,3);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(44).to({_off:false},0).wait(25));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFAHQgEgEAAgDQABgIAIAAQAKAAAAAIQgBADgDAEQgCADgEAAQgDAAgCgDg");
	this.shape_1.setTransform(8.3,3);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(38).to({_off:false},0).wait(31));

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIAAQgBgIAJAAQAKAAgBAIQAAADgCAEQgEADgDAAQgJAAABgKg");
	this.shape_2.setTransform(4.3,3);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(33).to({_off:false},0).wait(36));

	// Layer 5
	this.instance = new lib.Tween5("synched",0);
	this.instance.setTransform(25,32);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).to({alpha:1},17).wait(22));

	// Layer 6
	this.instance_1 = new lib.Tween6("synched",0);
	this.instance_1.setTransform(25,27.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(27).to({_off:false},0).to({alpha:1},17).wait(25));

	// Layer 7
	this.instance_2 = new lib.Tween7("synched",0);
	this.instance_2.setTransform(32.5,22.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).to({alpha:1},17).wait(28));

	// Layer 8
	this.instance_3 = new lib.Tween8("synched",0);
	this.instance_3.setTransform(32.5,17.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).to({alpha:1},17).wait(31));

	// Layer 9
	this.instance_4 = new lib.Tween9("synched",0);
	this.instance_4.setTransform(32.5,13);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},0).to({alpha:1},17).wait(34));

	// Layer 11
	this.instance_5 = new lib.Tween4("synched",0);
	this.instance_5.setTransform(0.4,6.5,0.02,1,0,0,0,-25.1,0);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(17).to({_off:false},0).to({regX:-24.9,scaleX:1},17,cjs.Ease.get(1)).wait(35));

	// Layer 10
	this.instance_6 = new lib.Tween3("synched",0);
	this.instance_6.setTransform(9.3,17.5,0.143,0.143);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10).to({_off:false},0).to({scaleX:1.2,scaleY:1.2},10).to({scaleX:1,scaleY:1},9,cjs.Ease.get(1)).wait(40));

	// Layer 12
	this.instance_7 = new lib.Tween2("synched",0);
	this.instance_7.setTransform(0.3,0,0.085,0.085,0,0,0,-24.9,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:-25.1,scaleX:1.19,scaleY:1.19,x:0.2},8,cjs.Ease.get(-1)).to({regX:-25,scaleX:1,scaleY:1,x:0.3},12,cjs.Ease.get(0.93)).wait(49));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,-1,6.3,5.3);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// >
	this.instance = new lib.Symbol28();
	this.instance.setTransform(56.5,73.1,0.552,0.552,0,0,0,13.5,26.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off:false},0).to({x:62.5,alpha:1},12,cjs.Ease.get(0.99)).wait(58));

	// 1
	this.instance_1 = new lib.Symbol25();
	this.instance_1.setTransform(112.1,29,1,1,0,0,0,7.8,9.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17).to({_off:false},0).to({alpha:1},8).wait(62));

	// 1
	this.instance_2 = new lib.Tween10("synched",0);
	this.instance_2.setTransform(112.2,30.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:20.3},9).to({y:30.3},8,cjs.Ease.get(0.85)).to({startPosition:0},8).wait(62));

	// Layer 1
	this.instance_3 = new lib.Symbol3();
	this.instance_3.setTransform(109.4,74.9,1,1,0,0,0,29.8,20.5);

	this.instance_4 = new lib.Symbol16("synched",0,false);
	this.instance_4.setTransform(109.4,74.9,1,1,0,0,0,29.8,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_3}]},5).to({state:[]},1).to({state:[{t:this.instance_4}]},3).wait(78));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:0},5).to({_off:true},1).wait(81));

	// CHOISISSEZ VOTRE ANIMAL MASCOTTE ET DONNEZ UN NOM À VOTRE ÉQUIPE
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsA5IAXhxIBDAAIgGAZIglAAIgDASIAiAAIgFAXIghAAIgEAWIAjAAIgGAZg");
	this.shape.setTransform(171.6,175.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AguA5IAYhxIAbAAQAVABALAIQAKAJAAARQAAATgNAJQgNALgWAAIgGAAIgIAngAgCgEIADAAQAHAAAEgFQAFgFAAgGQAAgFgDgDQgDgDgFAAIgFAAg");
	this.shape_1.setTransform(161.8,175.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaA5IAYhxIAdAAIgYBxg");
	this.shape_2.setTransform(154.2,175.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiA1QgIgEgEgIQgEgIAAgJIAAgKIAQhGIAfAAIgQBFIgBAJQAAAKAKAAQAHAAADgFQADgFADgLIAOhDIAfAAIgQBGQgEAWgNALQgNAKgUAAQgLAAgIgEg");
	this.shape_3.setTransform(146.1,175.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AADBHIgKgaIgBAAQgVAAgLgLQgLgMAAgVQAAgSAIgSQAIgRAOgJQAOgJARAAQATAAAMAMQALALAAAVQAAAWgJAQQgJARgPAJIATAhgAgFgmQgIAGgDAMQgEALAAALQAAAJAEAEQADAFAIAAQAFAAAHgGQAGgHAFgJQADgLAAgOQAAgIgDgFQgEgEgHgBQgHABgFAGg");
	this.shape_4.setTransform(134.3,177.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgwBKIAYhwIBCAAIgFAYIglAAIgCAQIAgAAIgFAZIggAAIgFAWIAjAAIgFAZgAgGgwIAAgBQAJgIALgQIAjAAIAAABQgDAFgMAHIgTAMg");
	this.shape_5.setTransform(124.5,174.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtA5IAZhxIBBAAIgEAZIgmAAIgDASIAiAAIgFAXIghAAIgFAWIAjAAIgEAZg");
	this.shape_6.setTransform(111,175.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAMA5IgNgqIgGAAIgJAqIgeAAIAYhxIAdAAQATABAKAHQALAIAAAPQAAANgFAJQgGAHgLAEIASApIACAIgAgBgHIABAAQAIAAAEgEQAEgEABgHQgBgFgCgDQgDgCgFAAIgEAAg");
	this.shape_7.setTransform(100.8,175.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgjA5IAThXIgaAAIAGgaIBPAAIgGAaIgZAAIgRBXg");
	this.shape_8.setTransform(92.5,175.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnAvQgMgMAAgVQAAgSAIgSQAIgRAOgJQAOgJAQAAQAUAAAMALQALAMAAAVQAAATgIARQgIARgNAJQgOAJgQAAQgVAAgLgLgAgFgZQgHAGgEAMQgEAJAAAMQAAATAQAAQAFAAAGgGQAHgHADgLQAEgJAAgNQAAgJgEgFQgDgFgIAAQgGAAgFAHg");
	this.shape_9.setTransform(81.3,175.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgnA5IgJhxIAeAAIACA9IAAAEIgBAUIAAAAIAEgNIAEgLIAZg9IAhAAIg2Bxg");
	this.shape_10.setTransform(71.5,175.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAXBKIgBgVIghAAIgJAVIggAAIA4hwIAnAAIAKBwgAAWAcIgBgfIgBgGIABgLIgGANIgPAjIAWAAgAATgwQgHgFgGgHQgFgHgBgEIAAgCIAeAAQACAMAFALIAAACg");
	this.shape_11.setTransform(54.9,174.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAUA5IAJgrIAIghIABgEIAAAAIgmBQIgbAAIAAhQIgBAAIgGAmIgJAqIgbAAIAXhwIApAAIAABOIABAAIAjhOIAqAAIgZBwg");
	this.shape_12.setTransform(174.2,156);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgnAvQgMgMAAgVQAAgSAIgSQAIgRAOgJQAOgJAQAAQAVAAAKALQAMAMAAAVQAAATgIARQgIARgNAJQgOAJgQAAQgVAAgLgLgAgFgZQgHAGgEAMQgEAJAAAMQAAATAQAAQAFAAAGgGQAHgHADgLQAEgJAAgNQAAgJgEgFQgDgFgIAAQgGAAgFAHg");
	this.shape_13.setTransform(161.1,156);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AACA5IgUhPIgBAAIgEAfIgKAwIgcAAIAYhwIAkAAIAUBKIABAAQACgSADgJIAKgvIAbAAIgYBwg");
	this.shape_14.setTransform(148.9,156);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AACA5IgUhPIgBAAIgEAfIgKAwIgcAAIAYhwIAkAAIAUBKIABAAQACgSADgJIAKgvIAbAAIgYBwg");
	this.shape_15.setTransform(132.1,156);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgiA1QgIgEgEgIQgEgIAAgJIAAgKIAQhGIAfAAIgQBFIgBAJQAAAKAKAAQAHAAADgFQADgFADgLIAOhDIAfAAIgQBGQgEAWgNALQgNAKgUAAQgLAAgIgEg");
	this.shape_16.setTransform(120.6,156.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgyA5IAEgTIA0hFIgkAAIAGgYIBLAAIgFASIg0BFIApAAIgGAZg");
	this.shape_17.setTransform(106.1,156);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgtA5IAZhwIBCAAIgGAYIglAAIgDASIAiAAIgFAXIghAAIgFAWIAjAAIgEAZg");
	this.shape_18.setTransform(97.6,156);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AACA5IgUhPIgBAAIgEAfIgKAwIgcAAIAYhwIAkAAIAUBKIABAAQACgSADgJIAKgvIAbAAIgYBwg");
	this.shape_19.setTransform(86.6,156);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AACA5IgUhPIgBAAIgEAfIgKAwIgcAAIAYhwIAkAAIAUBKIABAAQACgSADgJIAKgvIAbAAIgYBwg");
	this.shape_20.setTransform(74,156);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgnAvQgMgMAAgVQAAgSAIgSQAIgRAOgJQAOgJAQAAQAUAAAMALQALAMAAAVQAAATgIARQgIARgNAJQgOAJgQAAQgVAAgLgLgAgGgZQgGAGgEAMQgEAJAAAMQAAATAQAAQAFAAAGgGQAHgHADgLQAEgJAAgNQAAgJgEgFQgDgFgIAAQgGAAgGAHg");
	this.shape_21.setTransform(61.9,156);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgxA5IAXhwIAfAAQAWgBAMALQAMAMgBAVQABATgJAQQgHARgOAIQgQAJgRAAgAgNAfIAFAAQAIAAAFgGQAHgEAEgLQAEgKAAgLQgBgJgEgGQgEgFgHAAIgEAAg");
	this.shape_22.setTransform(50.3,156);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgjA5IAShXIgZAAIAGgZIBPAAIgGAZIgZAAIgRBXg");
	this.shape_23.setTransform(195.4,136.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgtA5IAYhwIBDAAIgGAYIglAAIgDASIAiAAIgFAXIghAAIgFAWIAjAAIgEAZg");
	this.shape_24.setTransform(185.8,136.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgsA5IAXhwIBDAAIgGAYIglAAIgDASIAiAAIgGAXIggAAIgEAWIAjAAIgGAZg");
	this.shape_25.setTransform(172.7,136.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgjA5IAShXIgYAAIAFgZIBOAAIgFAZIgZAAIgQBXg");
	this.shape_26.setTransform(164.6,136.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgjA5IAThXIgZAAIAFgZIBOAAIgFAZIgZAAIgQBXg");
	this.shape_27.setTransform(155.8,136.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgnAvQgMgMAAgVQAAgSAIgSQAIgRAOgJQAOgJAQAAQAUAAAMALQALAMAAAVQAAATgIARQgIARgNAJQgOAJgQAAQgVAAgLgLgAgGgZQgGAGgEAMQgEAJAAAMQAAATAPAAQAGAAAGgGQAHgHADgLQAEgJAAgNQAAgJgEgFQgEgFgGAAQgHAAgGAHg");
	this.shape_28.setTransform(144.6,136.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AglAvQgLgMAAgVQAAgTAIgRQAIgSAOgIQAOgJAPAAQAVAAARAKIgMAYIgNgHQgGgCgHAAQgIAAgFAGQgHAGgEALQgEAJAAAMQAAALAFAFQAEAFAIAAIALgBIAQgGIAAAZQgQAHgQAAQgVAAgLgLg");
	this.shape_29.setTransform(134.2,136.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgdA4QgHgCgFgDIAAgcQAGAFAJACQAIADAHAAQAFAAADgCQADgDAAgEIgBgEIgCgEIgKgIQgJgHgDgGQgFgHAAgKQAAgKAGgIQAEgIAKgFQAJgEAKAAQASAAAPAIIgKAXQgNgGgKAAQgFAAgCACQgCACAAAEQAAAEACADQACAEAHAFQAKAHAEAFQAEAIAAAKQAAARgLAKQgMAJgSAAQgJAAgIgCg");
	this.shape_30.setTransform(124.4,136.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAYA5IgCgWIggAAIgKAWIggAAIA4hwIAoAAIAJBwgAAVALIgBgfIAAgHIAAgKIgEAMIgQAkIAVAAg");
	this.shape_31.setTransform(113.3,136.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAUA5IAJgrIAIghIABgEIAAAAIgmBQIgbAAIAAhQIgBAAIgGAlIgJArIgbAAIAXhwIApAAIAABOIABAAIAjhOIAqAAIgZBwg");
	this.shape_32.setTransform(101.9,136.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgjA5IAYhwIAdAAIgSBXIAkAAIgFAZg");
	this.shape_33.setTransform(85.8,136.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAXA5IAAgWIghAAIgKAWIggAAIA4hwIAnAAIAKBwgAAWALIgBgfIgBgHIABgKIgGAMIgPAkIAWAAg");
	this.shape_34.setTransform(75.5,136.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AATA5IAJgrIAJghIABgEIgBAAIglBQIgbAAIAAhQIAAAAIgIAlIgIArIgcAAIAZhwIAoAAIAABOIABAAIAjhOIApAAIgYBwg");
	this.shape_35.setTransform(64,136.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgaA5IAYhwIAdAAIgYBwg");
	this.shape_36.setTransform(53.9,136.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AACA5IgUhPIgBAAIgEAfIgKAwIgcAAIAYhwIAkAAIAUBKIABAAQACgSADgJIAKgvIAbAAIgYBwg");
	this.shape_37.setTransform(44.8,136.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAXA5IAAgWIgiAAIgJAWIggAAIA4hwIAnAAIAKBwgAAWALIgBgfIgBgHIABgKIgGAMIgPAkIAWAAg");
	this.shape_38.setTransform(31.9,136.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgtA5IAYhxIBDAAIgGAZIglAAIgDASIAiAAIgFAXIghAAIgFAWIAkAAIgGAZg");
	this.shape_39.setTransform(180.1,116.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AANA5IgOgqIgGAAIgJAqIgeAAIAYhxIAdAAQATABAKAHQALAIAAAPQAAANgFAJQgGAHgLAEIARApIADAIgAgBgHIABAAQAIAAAEgEQAEgEAAgHQABgFgDgDQgDgCgFAAIgEAAg");
	this.shape_40.setTransform(169.9,116.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgjA5IAShXIgZAAIAGgaIBPAAIgGAaIgZAAIgRBXg");
	this.shape_41.setTransform(161.6,116.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgnAvQgMgMAAgVQAAgSAIgSQAIgRAOgJQAOgJAQAAQAVAAAKALQAMAMAAAVQAAATgIARQgIARgNAJQgOAJgQAAQgVAAgLgLgAgFgZQgHAGgEAMQgEAJAAAMQAAATAQAAQAFAAAGgGQAHgHAEgLQADgJAAgNQAAgJgDgFQgFgFgHAAQgGAAgFAHg");
	this.shape_42.setTransform(150.4,116.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgoA5IgIhxIAeAAIACA9IAAAEIgBAUIABAAIADgNIAFgLIAZg9IAgAAIg2Bxg");
	this.shape_43.setTransform(140.6,116.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgyA5IAEgTIA0hFIgjAAIAEgZIBMAAIgFATIg0BFIAoAAIgFAZg");
	this.shape_44.setTransform(126.1,116.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgsA5IAXhxIBDAAIgGAZIglAAIgDASIAiAAIgFAXIghAAIgEAWIAjAAIgGAZg");
	this.shape_45.setTransform(117.6,116.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgcA4QgIgCgGgDIAAgcQAHAFAIACQAJADAHAAQAGAAADgCQACgDAAgEIgBgEIgCgEIgJgIQgJgHgFgGQgEgHAAgKQAAgKAFgIQAGgIAJgFQAJgEAJAAQAUAAAOAIIgKAXQgOgGgJAAQgFAAgDACQgBACAAAEQAAAEABADQADAEAHAFQAJAHAFAFQAFAIAAAKQAAARgMAKQgLAJgTAAQgJAAgHgCg");
	this.shape_46.setTransform(108.7,116.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgcA4QgIgCgGgDIAAgcQAHAFAJACQAIADAHAAQAGAAADgCQACgDAAgEIAAgEIgDgEIgKgIQgIgHgFgGQgEgHAAgKQAAgKAFgIQAGgIAJgFQAJgEAJAAQATAAAQAIIgLAXQgOgGgJAAQgFAAgDACQgBACAAAEQAAAEABADQADAEAHAFQAJAHAFAFQAFAIgBAKQAAARgLAKQgLAJgTAAQgJAAgHgCg");
	this.shape_47.setTransform(99.9,116.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgaA5IAYhxIAdAAIgYBxg");
	this.shape_48.setTransform(92.6,116.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgcA4QgIgCgGgDIAAgcQAHAFAJACQAIADAHAAQAGAAADgCQACgDAAgEIAAgEIgDgEIgKgIQgIgHgFgGQgEgHAAgKQAAgKAFgIQAGgIAJgFQAJgEAKAAQASAAAQAIIgLAXQgOgGgJAAQgFAAgDACQgBACAAAEQAAAEABADQADAEAHAFQAJAHAFAFQAFAIgBAKQAAARgLAKQgLAJgTAAQgJAAgHgCg");
	this.shape_49.setTransform(85.5,116.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgaA5IAYhxIAdAAIgYBxg");
	this.shape_50.setTransform(78.2,116.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgnAvQgMgMAAgVQAAgSAIgSQAIgRAOgJQAOgJAQAAQAUAAAMALQALAMAAAVQAAATgIARQgIARgNAJQgOAJgQAAQgVAAgLgLgAgGgZQgGAGgEAMQgEAJAAAMQAAATAQAAQAFAAAGgGQAHgHADgLQAEgJAAgNQAAgJgEgFQgDgFgIAAQgGAAgGAHg");
	this.shape_51.setTransform(69.5,116.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AABA5IAKgvIgZAAIgKAvIgfAAIAYhxIAfAAIgJArIAZAAIAJgrIAfAAIgYBxg");
	this.shape_52.setTransform(57.9,116.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AglAvQgLgMAAgVQAAgTAIgRQAIgSAOgIQAOgJAPAAQAVAAARAKIgMAYIgNgHQgGgCgHAAQgIAAgFAGQgHAGgEALQgEAJAAAMQAAALAFAFQAEAFAIAAIALgBIAQgGIAAAZQgQAHgQAAQgVAAgLgLg");
	this.shape_53.setTransform(47.7,116.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(87));

	// Back
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(255,255,255,0)").s().p("AxpPeIAA+7MAjTAAAIAAe7g");
	this.shape_54.setTransform(113,99);

	this.timeline.addTween(cjs.Tween.get(this.shape_54).wait(87));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,226.1,198.1);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// >
	this.instance = new lib.Symbol28();
	this.instance.setTransform(56.5,73.1,0.552,0.552,0,0,0,13.5,26.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off:false},0).to({x:64.5,alpha:1},12,cjs.Ease.get(0.99)).wait(58));

	// 3
	this.instance_1 = new lib.Symbol26();
	this.instance_1.setTransform(109.2,31.1,1,1,0,0,0,7.5,9.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17).to({_off:false},0).to({alpha:1},7).wait(63));

	// 3
	this.instance_2 = new lib.Tween19("synched",0);
	this.instance_2.setTransform(109.1,32.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:22.3},9).to({y:32.3},8,cjs.Ease.get(0.99)).to({_off:true},7).wait(63));

	// Layer 1
	this.instance_3 = new lib.Tween20("synched",0);
	this.instance_3.setTransform(107,75.4);

	this.instance_4 = new lib.Tween21("synched",0,false);
	this.instance_4.setTransform(107,75.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_3}]},5).to({state:[]},1).to({state:[{t:this.instance_4}]},3).wait(78));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:0},5).to({_off:true},1).wait(81));

	// INVITEZ VOS AMIS À COLLECTER POUR VOTRE ÉQUIPE
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsA5IAXhwIBCAAIgFAYIglAAIgDASIAiAAIgGAXIggAAIgEAWIAjAAIgGAZg");
	this.shape.setTransform(164.2,156);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AguA5IAYhwIAcAAQATAAALAIQALAJAAARQAAATgNAJQgOALgVAAIgHAAIgIAngAgCgEIADAAQAHAAAEgFQAFgFAAgGQgBgFgCgDQgDgDgFAAIgFAAg");
	this.shape_1.setTransform(154.4,156);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaA5IAYhwIAdAAIgYBwg");
	this.shape_2.setTransform(146.7,156);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiA1QgIgEgEgIQgEgIAAgJIAAgKIAQhGIAfAAIgQBFIgBAJQAAAKAKAAQAHAAADgFQADgFADgLIAOhDIAfAAIgQBGQgEAWgNALQgNAKgUAAQgLAAgIgEg");
	this.shape_3.setTransform(138.7,156.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AADBHIgKgaIgBAAQgVAAgLgLQgLgMAAgVQAAgSAIgSQAIgRAOgJQAOgJARAAQATAAAMAMQALALAAAVQAAAWgJAQQgJARgPAJIASAhgAgGgmQgGAGgEAMQgEALAAALQAAAJAEAEQAEAFAGAAQAHAAAGgGQAHgHAEgJQADgLAAgOQAAgIgDgFQgEgEgHgBQgHABgGAGg");
	this.shape_4.setTransform(126.8,157.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgwBKIAYhwIBCAAIgFAYIglAAIgCAQIAgAAIgFAaIghAAIgEAVIAjAAIgFAZgAgGgwIAAgBQAJgIAMgQIAiAAIAAABQgDAFgMAHIgTAMg");
	this.shape_5.setTransform(117,154.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtA5IAYhwIBDAAIgGAYIglAAIgDASIAiAAIgFAXIghAAIgFAWIAkAAIgGAZg");
	this.shape_6.setTransform(103.6,156);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AANA5IgOgqIgGAAIgJAqIgeAAIAYhwIAcAAQAUAAAKAHQALAIAAAPQAAANgFAJQgGAHgLAEIASApIACAIgAgBgHIABAAQAIAAAEgDQAEgFAAgHQABgFgDgDQgDgCgFAAIgEAAg");
	this.shape_7.setTransform(93.4,156);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgjA5IAThXIgaAAIAGgZIBPAAIgGAZIgZAAIgRBXg");
	this.shape_8.setTransform(85.1,156);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnAvQgMgMAAgVQAAgSAIgSQAIgRAOgJQAOgJAQAAQAVAAAKALQAMAMAAAVQAAATgIARQgIARgNAJQgOAJgQAAQgVAAgLgLgAgFgZQgHAGgEAMQgEAJAAAMQAAATAQAAQAFAAAGgGQAHgHAEgLQADgJAAgNQAAgJgDgFQgFgFgHAAQgGAAgFAHg");
	this.shape_9.setTransform(73.9,156);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgoA5IgIhwIAeAAIACA8IAAAEIgBAUIABAAIADgNIAFgLIAZg8IAgAAIg2Bwg");
	this.shape_10.setTransform(64.1,156);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AANA5IgOgqIgFAAIgJAqIgfAAIAYhwIAcAAQAUAAALAHQAKAIAAAPQAAANgGAJQgFAHgLAEIARApIAEAIgAgCgHIADAAQAHAAAEgDQAFgFgBgHQAAgFgCgDQgDgCgFAAIgEAAg");
	this.shape_11.setTransform(181.8,136.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgiA1QgIgEgEgIQgEgIAAgJIAAgKIAQhGIAfAAIgQBFIgBAJQAAAKAKAAQAHAAADgFQADgFADgLIAOhDIAfAAIgQBGQgEAWgNALQgNAKgUAAQgLAAgIgEg");
	this.shape_12.setTransform(171.7,136.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgnAvQgMgMAAgVQAAgSAIgSQAIgRAOgJQAOgJAQAAQAUAAAMALQALAMAAAVQAAATgIARQgIARgNAJQgOAJgQAAQgVAAgLgLgAgGgZQgGAGgEAMQgEAJAAAMQAAATAPAAQAGAAAGgGQAHgHADgLQAEgJAAgNQAAgJgEgFQgEgFgGAAQgHAAgGAHg");
	this.shape_13.setTransform(159.9,136.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AguA5IAYhwIAcAAQATAAAMAIQAKAJAAARQAAATgNAJQgNALgWAAIgGAAIgJAngAgCgEIADAAQAHAAAEgFQAFgFAAgGQgBgFgCgDQgDgDgFAAIgFAAg");
	this.shape_14.setTransform(148.9,136.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAMA5IgNgqIgFAAIgJAqIgfAAIAYhwIAdAAQATAAALAHQAKAIAAAPQAAANgGAJQgFAHgLAEIASApIADAIgAgCgHIADAAQAHAAAEgDQAFgFAAgHQAAgFgDgDQgDgCgFAAIgEAAg");
	this.shape_15.setTransform(134.4,136.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgsA5IAXhwIBDAAIgGAYIglAAIgDASIAiAAIgFAXIghAAIgEAWIAjAAIgGAZg");
	this.shape_16.setTransform(125.3,136.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgjA5IAShXIgZAAIAGgZIBPAAIgGAZIgZAAIgRBXg");
	this.shape_17.setTransform(117.1,136.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AglAvQgLgMAAgVQAAgTAIgRQAIgSAOgIQAOgJAPAAQAVAAARAKIgMAYIgNgHQgGgCgHAAQgIAAgFAGQgHAGgEALQgEAJAAAMQAAALAFAFQAEAFAIAAIALgBIAQgGIAAAZQgQAHgQAAQgVAAgLgLg");
	this.shape_18.setTransform(107.3,136.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgsA5IAXhwIBDAAIgGAYIglAAIgDASIAiAAIgGAXIggAAIgEAWIAjAAIgGAZg");
	this.shape_19.setTransform(97.5,136.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgjA5IAYhwIAdAAIgSBXIAkAAIgFAZg");
	this.shape_20.setTransform(88.1,136.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgjA5IAYhwIAdAAIgSBXIAkAAIgFAZg");
	this.shape_21.setTransform(79.7,136.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgoAvQgLgMAAgVQAAgSAIgSQAIgRAOgJQAOgJAQAAQAVAAAKALQAMAMAAAVQAAATgIARQgHARgOAJQgOAJgQAAQgVAAgMgLgAgGgZQgGAGgEAMQgEAJAAAMQAAATAPAAQAGAAAHgGQAGgHAEgLQADgJAAgNQAAgJgDgFQgEgFgHAAQgHAAgGAHg");
	this.shape_22.setTransform(70.1,136.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AglAvQgLgMAAgVQAAgTAIgRQAIgSAOgIQAOgJAPAAQAVAAARAKIgMAYIgNgHQgGgCgHAAQgIAAgFAGQgHAGgEALQgEAJAAAMQAAALAFAFQAEAFAIAAIALgBIAQgGIAAAZQgQAHgQAAQgVAAgLgLg");
	this.shape_23.setTransform(59.7,136.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAXBKIgBgVIghAAIgJAVIggAAIA4hwIAoAAIAJBwgAAVAcIgBgfIAAgGIAAgLIgEANIgQAjIAVAAgAATgwQgHgFgFgHQgGgHgBgEIAAgCIAdAAQADAMAFALIAAACg");
	this.shape_24.setTransform(43.5,134.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgcA4QgIgCgGgDIAAgcQAHAFAJACQAIADAHAAQAGAAADgCQACgDAAgEIAAgEIgDgEIgKgIQgIgHgEgGQgFgHAAgKQAAgKAFgIQAGgIAJgFQAJgEAJAAQATAAAQAIIgLAXQgOgGgJAAQgFAAgDACQgBACAAAEQAAAEABADQADAEAHAFQAJAHAFAFQAFAIgBAKQAAARgLAKQgLAJgTAAQgJAAgHgCg");
	this.shape_25.setTransform(178.2,116.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgaA5IAYhxIAdAAIgYBxg");
	this.shape_26.setTransform(170.9,116.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AATA5IAJgrIAJghIABgEIgBAAIglBQIgbAAIAAhQIgBAAIgHAmIgIAqIgcAAIAZhxIAoAAIAABPIABAAIAjhPIApAAIgYBxg");
	this.shape_27.setTransform(160.9,116.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAXA5IAAgWIghAAIgKAWIggAAIA4hxIAnAAIAKBxgAAWALIgBgfIgBgHIABgLIgGANIgPAkIAWAAg");
	this.shape_28.setTransform(147,116.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgdA4QgHgCgFgDIAAgcQAGAFAJACQAIADAHAAQAFAAADgCQADgDAAgEIAAgEIgDgEIgKgIQgIgHgEgGQgFgHAAgKQAAgKAGgIQAEgIAKgFQAJgEAKAAQASAAAQAIIgLAXQgNgGgKAAQgFAAgCACQgCACAAAEQAAAEACADQACAEAHAFQAJAHAFAFQAEAIAAAKQAAARgLAKQgMAJgSAAQgJAAgIgCg");
	this.shape_29.setTransform(134.4,116.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgoAvQgLgMAAgVQAAgSAIgSQAIgRAOgJQAOgJAQAAQAVAAAKALQAMAMAAAVQAAATgIARQgHARgOAJQgOAJgQAAQgVAAgMgLgAgGgZQgGAGgEAMQgEAJAAAMQAAATAPAAQAGAAAHgGQAGgHAEgLQADgJAAgNQAAgJgDgFQgFgFgGAAQgHAAgGAHg");
	this.shape_30.setTransform(124,116.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgoA5IgIhxIAeAAIACA9IAAAEIgBAUIABAAIADgNIAFgLIAZg9IAgAAIg3Bxg");
	this.shape_31.setTransform(114.2,116.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgxA5IADgTIA0hFIgjAAIAEgZIBLAAIgDATIg1BFIAoAAIgFAZg");
	this.shape_32.setTransform(99.8,116.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgsA5IAXhxIBCAAIgFAZIglAAIgDASIAiAAIgGAXIggAAIgEAWIAjAAIgGAZg");
	this.shape_33.setTransform(91.3,116.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgjA5IAShXIgYAAIAFgaIBOAAIgFAaIgZAAIgQBXg");
	this.shape_34.setTransform(83.1,116.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgaA5IAYhxIAdAAIgYBxg");
	this.shape_35.setTransform(75,116.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgoA5IgIhxIAeAAIACA9IAAAEIgBAUIABAAIADgNIAFgLIAZg9IAgAAIg3Bxg");
	this.shape_36.setTransform(68.2,116.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AACA5IgUhPIgBAAIgEAfIgKAwIgcAAIAYhxIAkAAIAUBLIABAAQACgSADgJIAKgwIAbAAIgYBxg");
	this.shape_37.setTransform(56,116.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgaA5IAYhxIAdAAIgYBxg");
	this.shape_38.setTransform(46.9,116.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(87));

	// Back
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,255,255,0)").s().p("AxpPeIAA+7MAjTAAAIAAe7g");
	this.shape_39.setTransform(113,99);

	this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(87));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,226.1,198.1);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// >
	this.instance = new lib.Symbol28();
	this.instance.setTransform(66.5,73.1,0.552,0.552,0,0,0,13.5,26.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off:false},0).to({x:76.5,alpha:1},12,cjs.Ease.get(0.99)).wait(58));

	// 4
	this.instance_1 = new lib.Symbol27();
	this.instance_1.setTransform(104.6,29.4,1,1,0,0,0,7.3,8.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17).to({_off:false},0).to({alpha:1},8).wait(62));

	// 4
	this.instance_2 = new lib.Tween24("synched",0);
	this.instance_2.setTransform(105,30.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:20.3},9).to({y:30.3},8,cjs.Ease.get(1)).to({_off:true},7).wait(63));

	// Layer 1
	this.instance_3 = new lib.Symbol1();
	this.instance_3.setTransform(108.3,73.6,1,1,0,0,0,19.1,25.7);

	this.instance_4 = new lib.Symbol20("synched",0,false);
	this.instance_4.setTransform(108.3,73.6,1,1,0,0,0,19.1,25.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_3}]},5).to({state:[]},1).to({state:[{t:this.instance_4}]},3).wait(78));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:0},5).to({_off:true},1).wait(81));

	// TENTEZ DE GAGNER DE NOMBREUX LOTS, DONT 1 SÉANCE DE DRESSAGE
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcA4QgIgCgGgDIAAgcQAHAFAJACQAIADAHAAQAFAAADgCQADgDAAgEIAAgEIgDgEIgKgIQgIgHgEgGQgFgHAAgKQAAgKAFgIQAFgIAKgFQAJgEAKAAQASAAAQAIIgLAXQgNgGgKAAQgFAAgDACQgBACAAAEQAAAEABADQADAEAHAFQAJAHAFAFQAFAIgBAKQAAARgLAKQgLAJgTAAQgJAAgHgCg");
	this.shape.setTransform(150.2,175.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgsA5IAXhxIBDAAIgGAZIglAAIgDASIAiAAIgFAXIghAAIgEAWIAjAAIgGAZg");
	this.shape_1.setTransform(141.5,175.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AANA5IgOgqIgGAAIgJAqIgeAAIAYhxIAcAAQAUABAKAHQALAIAAAPQAAANgGAJQgFAHgLAEIARApIADAIgAgCgHIACAAQAIAAAEgEQAFgEgBgHQABgFgDgDQgDgCgFAAIgEAAg");
	this.shape_2.setTransform(131.3,175.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgvA5IAYhxIAlAAQAQABAJAGQAJAGAAAMQAAAWgXAHIAAABQAHABAEAFQAEAGAAAIQAAASgMAKQgMAJgUABgAgLAgIAGAAQAFAAAFgDQAEgEAAgFQAAgGgDgCQgCgEgFAAIgFAAgAgBgMIADAAQAHAAAEgDQADgDAAgHQAAgHgKAAIgFAAg");
	this.shape_3.setTransform(121.2,175.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AANA5IgOgqIgGAAIgJAqIgeAAIAYhxIAdAAQATABAKAHQALAIAAAPQAAANgFAJQgGAHgLAEIASApIACAIgAgBgHIABAAQAIAAAEgEQAEgEABgHQgBgFgCgDQgDgCgFAAIgEAAg");
	this.shape_4.setTransform(110.8,175.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAXA5IgBgWIghAAIgJAWIggAAIA4hxIAnAAIAKBxgAAWALIgBgfIgBgHIABgLIgGANIgPAkIAWAAg");
	this.shape_5.setTransform(99.4,175.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcA4QgIgCgGgDIAAgcQAHAFAJACQAIADAHAAQAFAAADgCQADgDAAgEIAAgEIgDgEIgKgIQgIgHgEgGQgFgHAAgKQAAgKAGgIQAEgIAKgFQAJgEAKAAQASAAAQAIIgLAXQgOgGgJAAQgFAAgDACQgBACAAAEQAAAEABADQADAEAHAFQAJAHAFAFQAFAIgBAKQAAARgLAKQgLAJgTAAQgJAAgHgCg");
	this.shape_6.setTransform(86.8,175.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgsA5IAXhxIBDAAIgGAZIglAAIgDASIAiAAIgFAXIghAAIgEAWIAjAAIgGAZg");
	this.shape_7.setTransform(78,175.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgjA5IAYhxIAdAAIgSBYIAkAAIgFAZg");
	this.shape_8.setTransform(68.7,175.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdA4QgHgCgFgDIAAgcQAGAFAIACQAJADAHAAQAFAAADgCQADgDAAgEIgBgEIgCgEIgJgIQgKgHgDgGQgFgHAAgKQAAgKAGgIQAEgIAKgFQAJgEAKAAQASAAAPAIIgKAXQgNgGgKAAQgFAAgCACQgCACAAAEQAAAEACADQACAEAHAFQAKAHAEAFQAEAIABAKQAAARgMAKQgMAJgSAAQgJAAgIgCg");
	this.shape_9.setTransform(179.2,156);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AACA5IgUhPIgBAAIgEAfIgKAwIgcAAIAYhwIAkAAIAUBKIABAAQACgSADgJIAKgvIAbAAIgYBwg");
	this.shape_10.setTransform(168.4,156);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAXA5IgBgWIghAAIgJAWIggAAIA4hwIAoAAIAJBwgAAVALIgBgfIAAgHIAAgLIgEANIgQAkIAVAAg");
	this.shape_11.setTransform(155.5,156);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgxA5IAXhwIAfAAQAWgBAMALQALAMABAVQAAATgJAQQgHARgOAIQgQAJgRAAgAgNAfIAFAAQAIAAAGgGQAGgEAEgLQADgKAAgLQAAgJgEgGQgEgFgHAAIgEAAg");
	this.shape_12.setTransform(145.6,156);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgtA5IAZhwIBBAAIgEAYIgmAAIgDASIAiAAIgGAXIggAAIgFAWIAjAAIgEAZg");
	this.shape_13.setTransform(132,156);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AACA5IgUhPIgBAAIgEAfIgKAwIgcAAIAYhwIAkAAIAUBKIABAAQACgSADgJIAKgvIAbAAIgYBwg");
	this.shape_14.setTransform(121,156);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAYA5IgBgWIghAAIgKAWIggAAIA4hwIAoAAIAJBwgAAWALIgCgfIAAgHIAAgLIgEANIgQAkIAWAAg");
	this.shape_15.setTransform(108.1,156);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgvA5IAYhwIAlAAQAQAAAJAGQAJAGAAAMQAAAWgXAHIAAABQAHABAEAFQAEAGAAAIQAAASgMAKQgMAJgUABgAgLAhIAGAAQAFgBAFgDQAEgEAAgFQAAgGgDgCQgCgEgFAAIgFAAgAgBgMIADAAQAHAAAEgDQADgDAAgHQAAgHgKAAIgFAAg");
	this.shape_16.setTransform(98.7,156);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAYA5IgCgWIggAAIgKAWIggAAIA4hwIAoAAIAJBwgAAVALIgBgfIAAgHIAAgLIgEANIgQAkIAVAAg");
	this.shape_17.setTransform(87.2,156);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AglAvQgLgMAAgVQAAgTAIgRQAIgSAOgIQAOgJAPAAQAVAAARAKIgMAYIgNgHQgGgCgHAAQgIAAgFAGQgHAGgEALQgEAJAAAMQAAALAFAFQAEAFAIAAIALgBIAQgGIAAAZQgQAHgQAAQgVAAgLgLg");
	this.shape_18.setTransform(78.5,156);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgsA5IAXhwIBDAAIgGAYIglAAIgDASIAiAAIgFAXIghAAIgEAWIAjAAIgGAZg");
	this.shape_19.setTransform(64.5,156);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AACA5IgUhPIgBAAIgEAfIgKAwIgcAAIAYhwIAkAAIAUBKIABAAQACgSADgJIAKgvIAbAAIgYBwg");
	this.shape_20.setTransform(53.5,156);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgiA1QgIgEgEgIQgEgIAAgJIAAgKIAQhGIAfAAIgQBFIgBAJQAAAKAKAAQAHAAADgFQADgFADgLIAOhDIAfAAIgQBGQgEAWgNALQgNAKgUAAQgLAAgIgEg");
	this.shape_21.setTransform(42,156.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgdA4QgHgCgFgDIAAgcQAGAFAIACQAJADAHAAQAFAAADgCQADgDAAgEIgBgEIgCgEIgJgIQgKgHgDgGQgFgHAAgKQAAgKAGgIQAEgIAKgFQAJgEAKAAQASAAAPAIIgKAXQgNgGgKAAQgFAAgCACQgCACAAAEQAAAEACADQACAEAHAFQAKAHAEAFQAEAIABAKQAAARgMAKQgMAJgSAAQgJAAgIgCg");
	this.shape_22.setTransform(183.7,136.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AACA5IgUhPIgBAAIgEAfIgKAwIgcAAIAYhwIAkAAIAUBKIABAAQACgSADgJIAKgvIAbAAIgYBwg");
	this.shape_23.setTransform(172.9,136.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAXA5IgBgWIghAAIgJAWIggAAIA4hwIAoAAIAJBwgAAVALIgBgfIAAgHIAAgKIgEAMIgQAkIAVAAg");
	this.shape_24.setTransform(160,136.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgxA5IAXhwIAfAAQAWgBAMALQALAMABAVQAAATgJAQQgHARgOAIQgQAJgRAAgAgNAfIAFAAQAIAAAGgGQAGgEAEgLQADgKAAgLQAAgJgEgGQgEgFgHAAIgEAAg");
	this.shape_25.setTransform(150.1,136.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgyA5IAZhwIAeAAQAWgBALALQANAMAAAVQgBATgHAQQgIARgPAIQgOAJgTAAgAgOAfIAGAAQAIAAAGgGQAGgEAEgLQAEgKgBgLQAAgJgDgGQgFgFgIAAIgDAAg");
	this.shape_26.setTransform(135,136.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AACA5IgUhPIgBAAIgEAfIgKAwIgcAAIAYhwIAkAAIAUBKIABAAQACgSADgJIAKgvIAbAAIgYBwg");
	this.shape_27.setTransform(123.5,136.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgsA5IAYhwIBBAAIgEAYIgmAAIgDASIAiAAIgGAXIggAAIgEAWIAjAAIgGAZg");
	this.shape_28.setTransform(113,136.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgXAMIAFgXIApAAIgEAXg");
	this.shape_29.setTransform(105.5,137.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AABA5IgLgtIgIADIgIAqIgfAAIAYhwIAfAAIgLAwIADgEIAKgQIAWgcIAkAAIgrA0IAVA8g");
	this.shape_30.setTransform(98.2,136.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgtA5IAZhwIBBAAIgEAYIgmAAIgDASIAiAAIgFAXIghAAIgFAWIAjAAIgEAZg");
	this.shape_31.setTransform(88.1,136.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgsA5IAXhwIBCAAIgFAYIglAAIgDASIAiAAIgGAXIggAAIgEAWIAjAAIgGAZg");
	this.shape_32.setTransform(79.1,136.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgJA5IAAgxIABgXQgCAKgHAPIgTAvIgjAAIgDhwIAdAAIgBA3QgBAUgBAJIADgIIAIgSIAag6IAYAAIAAA7QAAAMgCANIALgbIAXg5IAeAAIgxBwg");
	this.shape_33.setTransform(68.1,136.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AACA5IgUhPIgBAAIgEAfIgKAwIgcAAIAYhwIAkAAIAUBKIABAAQACgSADgJIAKgvIAbAAIgYBwg");
	this.shape_34.setTransform(49,136.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgiA1QgIgEgEgIQgEgIAAgJIAAgKIAQhGIAfAAIgQBFIgBAJQAAAKAKAAQAHAAADgFQADgFADgLIAOhDIAfAAIgQBGQgEAWgNALQgNAKgUAAQgLAAgIgEg");
	this.shape_35.setTransform(37.5,136.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAMA5IgNgqIgGAAIgJAqIgeAAIAYhxIAdAAQATABAKAHQALAIAAAPQAAANgFAJQgGAHgLAEIASApIACAIgAgBgHIABAAQAIAAAEgEQAEgEABgHQgBgFgCgDQgDgCgFAAIgEAAg");
	this.shape_36.setTransform(179.1,116.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgsA5IAXhxIBCAAIgFAZIglAAIgDASIAiAAIgGAXIggAAIgEAWIAjAAIgGAZg");
	this.shape_37.setTransform(170,116.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AACA5IgUhPIgBAAIgEAfIgKAwIgcAAIAYhxIAkAAIAUBLIABAAQACgSADgJIAKgwIAbAAIgYBxg");
	this.shape_38.setTransform(159,116.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgmAuQgMgLAAgWQABgTAIgRQAJgRAPgIQAPgJARAAQAVAAAOAIIgLAYQgMgHgMAAQgKAAgGAGQgIAGgEALQgFAJgBAMQABAVAQAAIAIgBIAFgSIgQAAIAEgWIAvAAIgOA8QgUAGgSAAQgVAAgLgMg");
	this.shape_39.setTransform(147.3,116.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAYA5IgBgWIghAAIgKAWIggAAIA4hxIAoAAIAJBxgAAVALIgBgfIAAgHIAAgLIgEANIgQAkIAVAAg");
	this.shape_40.setTransform(135,116.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgmAuQgMgLAAgWQAAgTAJgRQAJgRAPgIQAOgJATAAQAUAAAOAIIgLAYQgMgHgMAAQgKAAgGAGQgIAGgFALQgEAJAAAMQAAAVAQAAIAJgBIADgSIgPAAIAFgWIAuAAIgOA8QgUAGgSAAQgVAAgLgMg");
	this.shape_41.setTransform(125.4,116.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgtA5IAYhxIBDAAIgGAZIglAAIgDASIAiAAIgFAXIghAAIgFAWIAkAAIgFAZg");
	this.shape_42.setTransform(111.2,116.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgyA5IAYhxIAfAAQAWAAALALQANAMAAAVQgBATgHAQQgIARgPAIQgOAJgTAAgAgOAfIAGAAQAIAAAGgGQAGgEAEgLQAEgKgBgLQAAgJgDgGQgFgFgIAAIgDAAg");
	this.shape_43.setTransform(100.8,116.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgyA5IAEgTIA0hFIgkAAIAGgZIBKAAIgEATIg0BFIApAAIgGAZg");
	this.shape_44.setTransform(87.1,116.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgtA5IAZhxIBBAAIgEAZIgmAAIgDASIAiAAIgFAXIghAAIgFAWIAjAAIgEAZg");
	this.shape_45.setTransform(78.6,116.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgjA5IAThXIgZAAIAFgaIBPAAIgGAaIgZAAIgRBXg");
	this.shape_46.setTransform(70.5,116.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AACA5IgUhPIgBAAIgEAfIgKAwIgcAAIAYhxIAkAAIAUBLIABAAQACgSADgJIAKgwIAbAAIgYBxg");
	this.shape_47.setTransform(58.8,116.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgtA5IAZhxIBBAAIgEAZIgmAAIgDASIAiAAIgGAXIggAAIgFAWIAjAAIgEAZg");
	this.shape_48.setTransform(48.3,116.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgjA5IAThXIgZAAIAFgaIBOAAIgFAaIgZAAIgQBXg");
	this.shape_49.setTransform(40.1,116.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(87));

	// Back
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(255,255,255,0)").s().p("AxpPeIAA+7MAjTAAAIAAe7g");
	this.shape_50.setTransform(113,99);

	this.timeline.addTween(cjs.Tween.get(this.shape_50).wait(87));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,226.1,198.1);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// >
	this.instance = new lib.Symbol28();
	this.instance.setTransform(56.5,73.1,0.552,0.552,0,0,0,13.5,26.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off:false},0).to({x:66.5,alpha:1},12,cjs.Ease.get(0.99)).wait(32));

	// 1
	this.instance_1 = new lib.Symbol24();
	this.instance_1.setTransform(109.2,31.1,1,1,0,0,0,5.7,9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17).to({_off:false},0).to({alpha:1},7).wait(37));

	// 1
	this.instance_2 = new lib.Tween1("synched",0);
	this.instance_2.setTransform(108.5,32.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:22.3},9,cjs.Ease.get(-1)).to({y:32.3},8,cjs.Ease.get(1)).to({_off:true},8).wait(36));

	// Layer 1
	this.instance_3 = new lib.Symbol14("single",59);
	this.instance_3.setTransform(111.8,73.4,1,1,0,0,0,25.2,19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:0,startPosition:39},5).to({_off:true},1).wait(3).to({_off:false,alpha:1,mode:"synched",startPosition:0,loop:false},0).to({startPosition:8},8).wait(44));

	// CRÉEZ VOTRE PAGE DE COLLECTE
	this.instance_4 = new lib.Symbol15();
	this.instance_4.setTransform(110.1,125.8,1,1,0,0,0,97,22.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(61));

	// back
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AxpPeIAA+7MAjTAAAIAAe7g");
	this.shape.setTransform(113,99);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,226.1,198.1);


// stage content:
(lib.Etapes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 4
	this.instance = new lib.Symbol10("single",0);
	this.instance.setTransform(792,99,1,1,0,0,0,113,99);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(300).to({mode:"synched",loop:false},0).wait(100));

	// 3
	this.instance_1 = new lib.Symbol11("single",0);
	this.instance_1.setTransform(566,99,1,1,0,0,0,113,99);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(200).to({mode:"synched",loop:false},0).wait(100).to({mode:"single"},0).wait(100));

	// 2
	this.instance_2 = new lib.Symbol12("single",0);
	this.instance_2.setTransform(340,99,1,1,0,0,0,113,99);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100).to({mode:"synched",loop:false},0).wait(100).to({mode:"single"},0).wait(200));

	// 1
	this.instance_3 = new lib.Symbol9("synched",0,false);
	this.instance_3.setTransform(113,99,1,1,0,0,0,113,99);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100).to({mode:"single"},0).wait(300));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(460,100,905.1,198.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;