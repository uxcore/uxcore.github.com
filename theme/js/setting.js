let Select = require('uxcore-select2');
let Option = Select.Option;
let themeList = ['orange', 'blue'];
let $themePicker = $("#J_ThemePickerBox");
let $themeSelector = $("#J_ThemeSelector");
let $themeLink = $("#J_ThemeStyle");
let $themeSiteLink = $("#J_ThemeSiteStyle");

if (location.pathname !== "/") {
    $themeSelector.show();
}

const themeMap = {
    'orange': ['阿里橙', '#F37327'],
    'blue': ['晴空蓝', '#2599f2']
};

let onSelectTheme = function(value){
    if (!value in themeMap) {
    	value = 'orange';
    }
    setTheme(value);
	if (Modernizr.localstorage) {
		localStorage.setItem('theme', value);
	}
}
let setTheme = function(theme){
    $themeSiteLink.attr('href', `/static/style/${theme}.css`);
}

// Lighten
// var NewColor = LightenDarkenColor("#F06D06", 20); 

// Darken
// var NewColor = LightenDarkenColor("#F06D06", -20);

let LightenDarkenColor = function(col, amt) {
  
    var usePound = false;
  
    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }
 
    var num = parseInt(col,16);
 
    var r = (num >> 16) + amt;
 
    if (r > 255) r = 255;
    else if  (r < 0) r = 0;
 
    var b = ((num >> 8) & 0x00FF) + amt;
 
    if (b > 255) b = 255;
    else if  (b < 0) b = 0;
 
    var g = (num & 0x0000FF) + amt;
 
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
 
    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
  
}



ReactDOM.render(
	<ul className="theme-picker">
		{themeList.map(function(item, index) {
			let itemBoardStyle = {};
			if (Modernizr.canvas) {
				itemBoardStyle = {
					backgroundImage: 'linear-gradient(to bottom right, ' 
									+ LightenDarkenColor(themeMap[item][1], 20) + ',' 
									+ themeMap[item][1] + ','
									+ LightenDarkenColor(themeMap[item][1], 20)
									+ ')'
				};
			}
			else {
				itemBoardStyle = {
					backgroundColor: themeMap[item][1]
				};
			}
			return <li className="picker-item zoomInRight" key={index} data-key={item} style={{
				animationDelay: index / 4 + 's'
			}}>
						<div className="picker-item-board" style={itemBoardStyle}></div>
						<span className="picker-item-name">{themeMap[item][0]}</span>
				   </li>
		})}
	</ul>,
$('#J_ThemePickerBox')[0]);

$themeSelector.on("click", function(e) {
	e.stopPropagation();
	if ($themePicker.is(":visible")) {
		$themePicker.hide();
	}
	else {
		$themePicker.addClass("picker-animate");
		$themePicker.show();
	}
	
})

$("body").on("click", function(e) {
	var $target = $(e.target);
	if (!$target.hasClass("theme-picker-box") && $target.parents('.theme-picker-box').length == 0 && $themePicker.is(':visible')) {
		$themePicker.hide();
	}
});

$themePicker.on("click", '.picker-item', function(e) {
	var target = e.currentTarget;
	var key = $(target).data('key');
	$themePicker.hide();
	onSelectTheme(key);
});
