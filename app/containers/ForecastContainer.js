var React = require('react');
var PropTypes = React.PropTypes;
var Forecast = require('../components/Forecast');
var api = require('../helpers/api');

var ForecastContainer = React.createClass({
    getInitialState: function () {
        return {isLoading: true, weatherData:{}}
    },
    componentDidMount: function () {
        api
            .getCityInfo(this.props.routeParams.city)
            .then(function (data) {
                console.log(data)
                this.setState({isLoading: false, weatherData: data[1]})
            }.bind(this));
    },
    render: function () {
        return (<Forecast isLoading={this.state.isLoading} city={this.props.routeParams.city} forecastData={this.state.weatherData}/>)
    }
});

module.exports = ForecastContainer;