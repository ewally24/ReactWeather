var React = require('react');

var WeatherMessage = (props) => {
	var {location, temp} = props;
	return(
		<h3 className='text-center'> It is {temp} degrees in {location} </h3>
	)
	
}

module.exports = WeatherMessage;