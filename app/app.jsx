var reactDOM = require('react-dom');
var React = require('react');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Example = require('Example');

// load foundation css
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// load Custom application css
require('style!css!sass!ApplicationStyles');

reactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute  component={Weather}/>
			<Route path='about' component={About}/>
			<Route path='example' component={Example}/>
		</Route>
	</Router>,
	document.getElementById('app')
)