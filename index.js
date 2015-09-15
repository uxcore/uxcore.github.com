require('./style/kuma/src/less/kuma-webpack.less');
require('./style/index.less');

window.UXCORE = {
	'uxcore-calendar': require('uxcore-calendar'),
	'uxcore-button': require('uxcore-button'),
	'uxcore-dialog': require('uxcore-dialog'),
	'uxcore-select2': require('uxcore-select2'),
	'uxcore-pagination': require('uxcore-pagination'),
	'uxcore-tooltip': require('uxcore-tooltip'),
	'uxcore-tabs': require('uxcore-tabs'),
	'uxcore-form': require('uxcore-form'),
	'uxcore-grid': require('uxcore-grid'),
	'uxcore-dropdown': require('uxcore-dropdown'),
	'uxcore-mention': require('uxcore-mention'),
	'uxcore-tree': require('uxcore-tree'),
	'uxcore-transfer': require('uxcore-transfer'),
	'uxcore-popover': require('uxcore-popover')
};

/*
 * init code highlighter
 */
 $(function(){
	 // init code highlight
	 window.onload = function(){
		 $('.markdown pre code').each(function(){
			hljs.highlightBlock(this);
		});
		$('.highlight').each(function(){
			$(this).append('<a href="#" class="code-toggle"></a>');
		});
	};
	// window srcoll
	var $body = $('body'), contentScrollTop, timer;
	$('#J-main .site-content').on('scroll', function(e){
		timer && clearTimeout(timer);
		timer = setTimeout(function(){
			contentScrollTop = $(this).scrollTop();
			if (contentScrollTop > 100) {
				$body.addClass('head-collapse');
			} else {
				$body.removeClass('head-collapse');
			}
		}.bind(this), 100);
	});
	$('#J-main').on('click', '.code-toggle', function(e){
		e.preventDefault();
		$(this).parent('.highlight').toggleClass('toggle-down');
	});
	if ($('#site-home').length > 0) {
		initHomeLayout();
	}
 });

 function initHomeLayout(){
	 // Little Canvas things
	var $home = $('#site-home');
	var $canvas = $('<canvas />');
	$home.append($canvas);
	var canvas = $canvas[0],
	    ctx = canvas.getContext('2d');

	// Set Canvas to be window size
	canvas.width = $home.width() - 4;
	canvas.height = $home.height() - 4;

	// Configuration, Play with these
	var config = {
	  particleNumber: 200,
	  maxParticleSize: 20,
	  maxSpeed: 10,
	  colorVariation: 20
	};

	// Colors
	var colorPalette = {
	    bg: {r:255, g:255, b:255},
	    matter: [
	      {r:76, g:166, b:253}, // blue: 4CA6FD
	      {r:255, g:183, b: 62} // orange: FFB73E
	    ]
	};

	// Some Variables hanging out
	var particles = [],
	    centerX = canvas.width / 2,
	    centerY = canvas.height / 2,
	    drawBg;

	// Draws the background for the canvas, because space
	drawBg = function (ctx, color) {
	    ctx.fillStyle = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
	    ctx.fillRect(0,0,canvas.width,canvas.height);
	};

	// Particle Constructor
	var Particle = function (x, y) {
	    // X Coordinate
	    this.x = x || Math.round(Math.random() * canvas.width);
	    // Y Coordinate
	    this.y = y || Math.round(Math.random() * canvas.height);
	    // Radius of the space dust
	    this.r = Math.ceil(Math.random() * config.maxParticleSize);
	    // Color of the rock, given some randomness
	    this.c = colorVariation(colorPalette.matter[Math.floor(Math.random() * colorPalette.matter.length)],true );
	    // Speed of which the rock travels
	    this.s = Math.pow(Math.ceil(Math.random() * config.maxSpeed), 0.7);
	    // Direction the Rock flies
	    this.d = Math.round(Math.random() * 360);
	};

	// Provides some nice color variation
	// Accepts an rgba object
	// returns a modified rgba object or a rgba string if true is passed in for argument 2
	var colorVariation = function (color, returnString) {
	    var r,g,b,a, variation;
	    r = Math.round(((Math.random() * config.colorVariation) - (config.colorVariation/2)) + color.r);
	    g = Math.round(((Math.random() * config.colorVariation) - (config.colorVariation/2)) + color.g);
	    b = Math.round(((Math.random() * config.colorVariation) - (config.colorVariation/2)) + color.b);
	    a = Math.random() + 0.3;
        return "rgba(" + r + "," + g + "," + b + "," + a + ")";
	};

	// Used to find the rocks next point in space, accounting for speed and direction
	var updateParticleModel = function (p) {
	    var a = 180 - (p.d + 90); // find the 3rd angle
	    if (p.d > 0 && p.d < 180) {
			p.x += p.s * Math.sin(p.d) / Math.sin(p.s);
		} else {
			p.x -= p.s * Math.sin(p.d) / Math.sin(p.s);
		}
		if (p.d > 90 && p.d < 270) {
			p.y += p.s * Math.sin(a) / Math.sin(p.s);
		} else {
			p.y -= p.s * Math.sin(a) / Math.sin(p.s);
		}
	    return p;
	};

	// Just the function that physically draws the particles
	// Physically? sure why not, physically.
	var drawParticle = function (x, y, r, c) {
	    ctx.beginPath();
	    ctx.fillStyle = c;
	    ctx.arc(x, y, r, 0, 2 * Math.PI, false);
	    ctx.fill();
	    ctx.closePath();
	};

	// Remove particles that aren't on the canvas
	var cleanUpArray = function () {
	    particles = particles.filter(function(p){
	      return (p.x > -100 && p.y > -100);
	    });
	};


	var initParticles = function (numParticles, x, y) {
		var particle;
	    for (var i = 0; i < numParticles; i++) {
			particle = new Particle(x, y);
			drawParticle(particle.x, particle.y, particle.r, particle.c);
	        particles.push(particle);
	    }
	};

	// That thing
	window.requestAnimFrame = (function() {
	  return window.requestAnimationFrame ||
	     window.webkitRequestAnimationFrame ||
	     window.mozRequestAnimationFrame ||
	     function(callback) {
	        window.setTimeout(callback, 1000 / 60);
	     };
	})();


	var frame = function () {
	  // Draw background first
	  drawBg(ctx, colorPalette.bg);
	  // Update Particle models to new position
	  particles.map(function(p){
	    return updateParticleModel(p);
	  });
	  // Draw em'
	  particles.forEach(function(p){
	      drawParticle(p.x, p.y, p.r, p.c);
	  });
	  // Play the same song? Ok!
	  window.requestAnimFrame(frame);
	};

	// Click listener
	$home.on('click', function(e){
		var x = e.clientX,
	        y = e.clientY;
	    cleanUpArray();
	    initParticles(config.particleNumber, x, y);
	});
	$(window).on('resize', function(){
		canvas.style.display = 'none';
		canvas.width = $home.width() - 4;
		canvas.height = $home.height() - 4;
		canvas.style.display = 'block';
	});

	frame();

	initParticles(config.particleNumber);
 }
