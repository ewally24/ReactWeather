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
			<h1 className='text-centered subheader'> About </h1>
			<p> This is a weather app I build using React </p>

			<p>
				<ul>	
					<li>	
						<a href='https://facebook.github.io/react'>React </a> - This was the javascript framework used
					</li>
					<li>
						<a href='http://openweathermap.org'> Open Weather Map </a> I used Open Weather Map to search for weather data by city name.
					</li>
				</ul>
			</p>
		</div>
	)
}

module.exports = About;