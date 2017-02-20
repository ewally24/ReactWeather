var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
	getInitialState: function() {
		return {
			isLoading: false
		}
	},
	handleSearch: function(location, temp) {
		var that = this;
		that.setState({isLoading: true});
		OpenWeatherMap.getTemp(location).then(function(temp) {
			that.setState({
				location: location,
				temp: temp,
				isLoading: false
			})
		}, function(errorMessage) {
			var errorMessage = 'City does not exist bruh';
			alert(errorMessage);
			that.setState({isLoading: false})
		})
	},
	render: function() {
		var {location, temp, isLoading} = this.state;

		function renderMessage() {
			if(isLoading) {
				return <h3 className='text-center'> Fetching Data... </h3>;
			} else if (location && temp) {
				return <WeatherMessage location={location} temp={temp}/>;
			}
		}
		return (
			<div>
				<h1 className='center-text'> Get Weather </h1>
				<WeatherForm search={this.handleSearch}/>
				{renderMessage()}
			</div>
		)
	}
})

module.exports = Weather;