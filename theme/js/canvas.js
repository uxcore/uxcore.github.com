var util = {
	deepcopy: function(a) {
		return JSON.parse(JSON.stringify(a))
	},
	extend: function(a, b) {
		console.log(a, b)
		var c = this.deepcopy(a);
		for (var item in b) {
			if (b.hasOwnProperty(item)) {
				c[item] = b[item]
			}
		}
		return c;
	}
}

var page = new fabric.StaticCanvas('canvas', {
	height: 300,
	width: 400,
	top: 100
});

var commonCfg = {
	stroke: 'white',
	fill: 'transparent',
	strokeWidth: 3,
};

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
	top: 110
}));

var hexagon2 = new fabric.Polygon(util.deepcopy(points), util.extend(commonCfg, {
	left: 190,
	top: 58
}));

var hexagon3 = new fabric.Polygon(util.deepcopy(points), util.extend(commonCfg, {
	left: 190,
	top: 162
}));

var hexagon4 = new fabric.Polygon(util.deepcopy(points), util.extend(commonCfg, {
	left: 70,
	top: 58,
	strokeWidth: 1
}));

var hexagon5 = new fabric.Polygon(util.deepcopy(points), util.extend(commonCfg, {
	left: 160,
	top: 6,
	strokeWidth: 1
}));

var hexagon6 = new fabric.Polygon(util.deepcopy(points), util.extend(commonCfg, {
	left: 160,
	top: 110,
	strokeWidth: 1
}));

var line1 = new fabric.Line(util.deepcopy(linePts), {
	stroke: 'white',
	strokeWidth: 2,
	top: 260,
	left: 230
})

var line2 = new fabric.Line(util.deepcopy(linePts), {
	stroke: 'white',
	strokeWidth: 2,
	top: 255,
	left: 280,
	angle: -60
})


page.add(hexagon1, hexagon2, hexagon3, hexagon4, hexagon5, hexagon6, line1, line2);

// setTimeout(function() {
// 	hexagon1.animate('top', 110, {
// 		duration: 1000,
// 	    onChange: page.renderAll.bind(page),
// 		easing: fabric.util.ease.easeOutBounce
// 	})
// }, 20);

