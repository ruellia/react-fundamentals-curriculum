var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('./Loading');

var Forecast = React.createClass({
    render: function () {
        if (this.props.isLoading === true) {
           return <Loading text="Loading" speed={300}/>
        }
        return (
            <div>
                Forecast Component
            </div>
        )
    }
});

module.exports = Forecast;