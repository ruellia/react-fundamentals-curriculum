var React = require('react');

var Detail = React.createClass({
    render: function () {
        console.log(this.props.location.state.weather)
        return (
            <div>
                Detail Component
            </div>
        )
    }
});

module.exports = Detail;