var React = require('react');

var WeatherMessage = (props) => {
	var {location, temp} = props;
	return(
		<h4> It is {temp} degress in {location} </h4>
	)
	
}

module.exports = WeatherMessage;