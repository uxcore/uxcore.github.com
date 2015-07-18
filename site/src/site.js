var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

const NavItems = [
	//{ value: 'css',         label: 'CSS' },
	//{ value: 'buttons',     label: 'Buttons' },
	{ value: 'forms',       label: 'Forms' },
	{ value: 'home',       label: 'Home' }
];

var PageNav = React.createClass({
	getInitialState: function() {
		return {
			showMenu: false
		};
	},
	toggleMenu: function() {
		this.setState({
			showMenu: !this.state.showMenu
		});
	},
	render: function() {
		var self = this;
		var menuClass = this.state.showMenu ? 'primary-nav-menu is-visible' : 'primary-nav-menu is-hidden';
		var menuItems = NavItems.map(function(item) {
			return (
				<Router.Link key={item.value} className="primary-nav__item" onClick={self.toggleMenu} to={item.value}>
					<span className="primary-nav__item-inner">{item.label}</span>
				</Router.Link>
			);
		});
		return (
			<nav className="primary-nav">
				<div className={menuClass}>
					<div className="primary-nav-menu-inner">
						{menuItems}
					</div>
				</div>
				
			</nav>
		);
	}
});

var App = React.createClass({
	render: function() {
		return (
			<div className="page-wrapper">
				<PageNav />
				<div className="page-body">
					<Router.RouteHandler/>
				</div>
				<div className="page-footer">
					<div className="demo-container container">
					</div>
				</div>
			</div>
		);
	}
});

var __location= window.location.pathname, devmode=false, rootPath="/";
if(__location.lastIndexOf("site/src")!=-1) {
	devmode=true;
	rootPath="/site/src/index.html";
}

var routes = (
	<Route  path={rootPath} handler={App}>
		<Route name="home" path="home" handler={require('./pages/Home')} />
		<Route name="forms" path="forms" handler={require('./pages/Forms')} />
		<Router.DefaultRoute handler={require('./pages/Home')} />
	</Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
	React.render(<Handler/>, document.body);
});
