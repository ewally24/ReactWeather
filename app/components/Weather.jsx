var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
	getInitialState: function() {
		return {
			isLoading: false
		}
	},
	handleSearch: function(location, temp) {
		var that = this;

		that.setState({
			isLoading: true,
			errorMessage: undefined
		});
		OpenWeatherMap.getTemp(location).then(function(temp) {
			that.setState({
				location: location,
				temp: temp,
				isLoading: false
			})
		}, function(e) {
			var errorMessage = 'City does not exist bruh';
			that.setState({
				isLoading: false,
				errorMessage: e.message
			})
		})
	},
	render: function() {
		var {location, temp, isLoading, errorMessage} = this.state;

		function renderError() {
			if(typeof errorMessage === 'string') {
				return <ErrorModal/> 
			}
		}

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
				{renderError()}
			</div>
		)
	}
})

module.exports = Weather;