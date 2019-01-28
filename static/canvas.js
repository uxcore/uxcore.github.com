var initCanvas = function() {
	var util = {
		deepcopy: function(a) {
			return JSON.parse(JSON.stringify(a))
		},
		extend: function(a, b) {
			var c = this.deepcopy(a);
			for (var item in b) {
				if (b.hasOwnProperty(item)) {
					c[item] = b[item]
				}
			}
			return c;
		}
	};

	var page = new fabric.StaticCanvas('canvas', {
		height: 500,
		width: 400
	});

	var commonCfg = {
		stroke: 'white',
		fill: 'transparent',
		strokeWidth: 3,
		centeredRotation: true,
		originX: 'center',
		originY: 'center'
	}

	var points = [
		{x: 0, y: 62},
		{x: 30, y: 10},
		{x: 90, y: 10},
		{x: 120, y: 62},
		{x: 90, y: 114},
		{x: 30, y: 114}
	];

	var linePts = [
		70, 0, 30, 0
	]

	var hexagon1 = new fabric.Polygon(points, util.extend(commonCfg, {
		left: 100,
		top: 160
	}));

	var hexagon2 = new fabric.Polygon(util.deepcopy(points), util.extend(commonCfg, {
		left: 490,
		top: -108,
		opacity: 0
	}));

	var hexagon3 = new fabric.Polygon(util.deepcopy(points), util.extend(commonCfg, {
		// left: 190,
		// top: 212
	}));

	var hexagon4 = new fabric.Polygon(util.deepcopy(points), util.extend(commonCfg, {
		left: 70,
		top: 108,
		strokeWidth: 1,
		opacity: 0
	}));

	var hexagon5 = new fabric.Polygon(util.deepcopy(points), util.extend(commonCfg, {
		left: 160,
		top: 56,
		strokeWidth: 1,
		opacity: 0
	}));

	var hexagon6 = new fabric.Polygon(util.deepcopy(points), util.extend(commonCfg, {
		left: 160,
		top: 160,
		strokeWidth: 1,
		opacity: 0
	}));

	var line1 = new fabric.Line(util.deepcopy(linePts), {
		stroke: 'white',
		originX: 'center',
		strokeWidth: 2,
		top: 50,
		left: 0
	})

	var line2 = new fabric.Line(util.deepcopy(linePts), {
		stroke: 'white',
		strokeWidth: 2,
		originX: 'center',
		angle: -60,
		top: 28,
		left: 35
	})

	var group1 = new fabric.Group([hexagon3, line1, line2], {
		left: 490,
		top: 400,
		originX: 'center',
		originY: 'center'
	});


	page.add(hexagon1, hexagon2, hexagon4, hexagon5, hexagon6, group1);

	setTimeout(function() {
		hexagon1.animate('angle', 360, {
			duration: 1500,
			onChange: page.renderAll.bind(page),
			onComplete: function() {
				hexa2In();
			}
		})
	})

	var hexa2In = function() {
		hexagon2.animate({
			left: 190,
			top: 108,
			opacity: 1
		}, {
			duration: 800,
			onChange: page.renderAll.bind(page),
			easing: fabric.util.ease.easeOutBounce,
			onComplete: function() {
				group1In();
			}
		})
	};

	var group1In = function() {
		group1.animate({
			left: 190,
			top: 212
		}, {
			duration: 800,
			onChange: page.renderAll.bind(page),
			easing: fabric.util.ease.easeOutBounce,
			onComplete: function() {
				twinkle(hexagon4, 6);
				twinkle(hexagon5, 6);
				twinkle(hexagon6, 6);
			}
		})
	}

	var twinkle = function(obj, num) {

		if (num <= 0) {
			obj.set({
				opacity: 1
			});
			page.renderAll();
			return;
		}

		obj.animate({
			opacity: (num % 2 == 0) ? 0 : 0.7 
		}, {
			duration: 200,
			onChange: page.renderAll.bind(page),
			easing: fabric.util.ease.easeOutBounce,
			onComplete: function() {
				twinkle(obj, num - 1)
			}
		})
	}
	
}



if ($('#site-banner').size() > 0 && Modernizr.canvas) {
	initCanvas();
}