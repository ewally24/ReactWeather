var React = require('react');
var {Link, IndexLink} = require('react-router');

/*
var Example = React.createClass({
	render: function() {
		return (
			<h3> Weather Examples </h3>
		)
	}
})
*/

var Example = (props) => {
	return(
		<div>
			<h2 className='text-center page-title'> Examples </h2>
			<p> Here are some example location to try out</p>
			<ol>
				<li> <Link to='/?location=New York'> New York </Link> </li>
				<li> <Link to='/?location=Rio'> Rio </Link> </li>
				<li> <Link to='/?location=California'> California </Link> </li>
			</ol>
		</div>
	)
}

module.exports = Example;

