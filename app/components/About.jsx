var React = require('react');

/*
var About = React.createClass({
	render: function() {
		return(
			<h3> About The React Weather App </h3>
		)
	}
})
*/

var About = (props) => {
	return(
		<div>
			<h3> About </h3>
			<p> About The Weather App </p>
		</div>
	)
}

module.exports = About;