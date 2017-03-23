var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require('../components/GetCity');
var api = require('../helpers/api');

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
        api.getCityInfo(this.state.city.replace(/\s/g,'')).then(function (data) {
                console.log(data[0]);
                console.log(data[1]);
            }.bind(this))
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