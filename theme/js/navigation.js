// set current nav item
let pathname = location.pathname, id;
let brandMatch = pathname.match(/^\/([^\/]*)/), brand;
if (brandMatch.length > 1) {
	brand = brandMatch[1];
}
switch (brand) {
	case 'components':
	case 'css':
	case 'scene':
	case 'start':
	case 'theme':
		id = brand;
		break;
	default:
		id = 'home'
		break;
}
let $navItem = $('#J-head .nav-list li[data-id="' + id + '"]');
if ($navItem.size() > 0) {
	$navItem.addClass('active');
}