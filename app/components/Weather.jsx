var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
	getInitialState: function() {
		return {
			isLoading: false
		}
	},
	handleSearch: function(location, temp) {
		var that = this;
		that.setState({isLoading: true})
		openWeatherMap.getTemp(location).then(function(temp) {
			that.setState({
				location: location,
				temp: temp,
				isLoading: false
			})
		}, function(errorMessage) {
			var errorMessage = 'City Does not Exist Bruh';
			alert(errorMessage);
			that.setState({isLoading: false})
		})
	},
	render: function() {
		var {location, temp, isLoading} = this.state;

		function renderMessage() {
			if(isLoading) {
				return <h3> Fetching Weather Data...</h3>
			} else if(location && temp) {
				return <WeatherMessage location={location} temp={temp}/>
			}
		}
		return(
			<div>
				<h2> Get Weather </h2>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
			</div>
		)
	}
})

module.exports = Weather;