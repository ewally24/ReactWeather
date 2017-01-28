var React = require('react');
var {Link, IndexLink} = require('react-router');
/*
var Nav = React.createClass({
	render: function() {
		return(
			<ul>
			<IndexLink to="/" activeClassName='active' activeStyle={{fontWeight: 'bold'}}> Weather App </IndexLink>
			<Link to="about" activeClassName='active' activeStyle={{fontWeight: 'bold'}}> About </Link>
			<Link to="example" activeClassName='active' activeStyle={{fontWeight: 'bold'}}> Example </Link>
			</ul>
		)
	}
})
*/
var Nav = () => {
	return(
			<ul>
			<IndexLink to="/" activeClassName='active' activeStyle={{fontWeight: 'bold'}}> Weather App </IndexLink>
			<Link to="about" activeClassName='active' activeStyle={{fontWeight: 'bold'}}> About </Link>
			<Link to="example" activeClassName='active' activeStyle={{fontWeight: 'bold'}}> Example </Link>
			</ul>
		)
}

module.exports = Nav;