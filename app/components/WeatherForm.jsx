var React = require('react');

var WeatherForm = React.createClass({
	onFormSubmit: function() {
		var location = this.refs.location.value;
		if(location.length > 0) {
			this.refs.location.value = '';
			this.props.search(location);
		}
	},
	render: function() {
		return(
			<form onSubmit={this.onFormSubmit}>
				<input type='text' ref='location' placeholder='Enter City'/>
				<button> Submit </button>
			</form>
		)
	}
})

module.exports = WeatherForm;