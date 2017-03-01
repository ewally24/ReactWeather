var React = require('react');

var ErrorModal = React.createClass({
	getDefaultProps: function() {
		return {
			title: 'Error',
		}
	},	
	propTypes: {
		title: React.PropTypes.string.isRequired,
		// message: React.Proptypes.string.isRequired
	},
	componentDidMount: function() {
		var modal = new Foundation.Reveal($('#error-modal'));
		modal.open();
	},
	render: function() {
		var {title, message} = this.props;


		return (
			<div id='error-modal' className='tiny text-center reveal' data-reveal="">
				<h3> {title} </h3>
				<p> {message} </p>
				<p>
					<button className='button hollow' data-close=""> Okay </button>
				</p>
			</div>
		);
	}
});

module.exports = ErrorModal;