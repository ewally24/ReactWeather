var React = require('react');

var Nav = require('Nav');

var objOne = {
		name: 'Andrew',
		location: 'Philadelphia'
	}

	var objTwo = {
		age: 25,
		...objOne
	};

	console.log(objTwo);

	function addPromise(a, b) {
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				if(typeof a === 'number' && typeof b === 'number') {
					var sum = a + b;
					resolve(sum)
				} else {
					reject('One or both of the values entered is NaN');
				}
			}, 1000)
		})
	}

	addPromise(4, 7).then(function(sum) {
		console.log('Addition Successful sum is: ' + sum)
	}, function(err) {
		console.log('Addition failed, error is:' + err)
	})

/*
var Main = React.createClass({

	render: function() {
		return(
			<div>
				<Nav/>
				{this.props.children}
			</div>
		)
	}
})
*/

var Main = (props) => {
	return(
		<div>
			<Nav/>
			<div className='row'>
				<div className='medium-6 large-4 small-centered'>
					{props.children}
				</div>
			</div>
		</div>
	)
}

module.exports = Main;