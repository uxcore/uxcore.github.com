require('./style/kuma/src/kuma.less');
// require('./style/kuma/src/theme/blue.less');
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
	'uxcore-table': require('uxcore-table'),
	'uxcore-dropdown': require('uxcore-dropdown'),
	'uxcore-mention': require('uxcore-mention'),
	'uxcore-tree': require('uxcore-tree'),
	'uxcore-transfer': require('uxcore-transfer'),
	'uxcore-popover': require('uxcore-popover'),
	'uxcore-collapse': require('uxcore-collapse'),
	'uxcore-progress': require('uxcore-progress'),
	'uxcore-steps': require('uxcore-steps'),
	'uxcore-uploader': require('uxcore-uploader'),
	'uxcore-menu': require('uxcore-menu'),
	'uxcore-layout': require('uxcore-layout'),
	'uxcore-crumb': require('uxcore-crumb'),
	'uxcore-multi-select': require('uxcore-multi-select'),
	'uxcore-totop': require('uxcore-totop'),
	'uxcore-checkbox-group': require('uxcore-checkbox-group'),
	'uxcore-radiogroup': require('uxcore-radiogroup'),
	'classnames': require('classnames')
};

/*
 * init code highlighter
 */
(function(d){
	d.addEventListener('DOMContentLoaded', function() {

		// set current nav item
		let pathname = location.pathname, id;
		if (pathname.indexOf('/components/') !== -1) {
			id = 'components';
		} else if (pathname.indexOf('/css/') !== -1) {
			id = 'css';
		} else {
			id = 'home';
		}
		let navItem = d.querySelectorAll('#J-head .nav-list li[data-id="' + id + '"]');
		if (navItem.length > 0) {
			navItem.item(0).classList.add('active');
		}

		// init code highlight
		window.onload = function(){
			[].forEach.call(d.querySelectorAll('.markdown pre code'), function(el){
				hljs.highlightBlock(el);
			});
			[].forEach.call(d.querySelectorAll('.code-box-markdown pre code'), function(el){
				hljs.highlightBlock(el);
			});
			[].forEach.call(d.querySelectorAll('.code-toggle'), function(el){
				let codeBox = el.parentElement.nextElementSibling;
				codeBox.style.height = 'auto';
				codeBox.dataset.height = codeBox.clientHeight + 'px';
				codeBox.style.height = '';
				el.addEventListener('click', function(e){
					el.parentElement.parentElement.classList.toggle('code-show-demo');
					if (codeBox.style.height) {
						codeBox.style.height = '';
					} else {
						codeBox.style.height = codeBox.dataset.height;
					}
				});
			});
		};
		if (d.querySelector('#site-home')) {
			initHomeLayout();
		}
	});
}(document));

 function initHomeLayout(){
	 // Little Canvas things
	var $home = document.querySelector('#site-home');
	var canvas = document.createElement('canvas');
	$home.appendChild(canvas);
	var ctx = canvas.getContext('2d');

	// Set Canvas to be window size
	canvas.width = $home.clientWidth - 4;
	canvas.height = $home.clientHeight - 4;

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
	      {r:255, g:153, b: 0} // orange: F90
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
	$home.addEventListener('click', function(e){
		var x = e.clientX,
	        y = e.clientY;
	    cleanUpArray();
	    initParticles(config.particleNumber, x, y);
	});
	window.addEventListener('resize', function(){
		canvas.style.display = 'none';
		canvas.width = $home.clientWidth - 4;
		canvas.height = $home.clientHeight - 4;
		canvas.style.display = 'block';
	});

	frame();

	initParticles(config.particleNumber);
 }
