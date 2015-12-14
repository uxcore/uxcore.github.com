// set current nav item
let pathname = location.pathname, id;
if (pathname.indexOf('/components/') !== -1) {
	id = 'components';
} else if (pathname.indexOf('/css/') !== -1) {
	id = 'css';
} else if (pathname.indexOf('/scene/') !== -1) {
	id = 'scene';
} else if (pathname.indexOf('/start') !== -1) {
	id = 'start'
} else {
	id = 'home';
}
let $navItem = $('#J-head .nav-list li[data-id="' + id + '"]');
if ($navItem.size() > 0) {
	$navItem.addClass('active');
}
