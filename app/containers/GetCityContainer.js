var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require('../components/GetCity');

var GetCityContainer = React.createClass({
    propTypes: {
        direction: PropTypes.string
    },
    getDefaultProps: function () {
        return {direction: 'column'}
    },
    getInitialState: function () {
        return {city: ''}
    },
    handleSubmitCity: function () {
        console.log(this.state.city)
    },
    handleUpdateCity: function (e) {
        this.setState({city: e.target.value})
    },
    render: function () {
        return (<GetCity
            direction={this.props.direction}
            onSubmitCity={this.handleSubmitCity}
            onUpdateCity={this.handleUpdateCity}
            city={this.state.city}/>)
    }
});

module.exports = GetCityContainer;