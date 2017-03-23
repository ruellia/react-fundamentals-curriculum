var React = require('react');
var PropTypes = React.PropTypes;
var Forecast = require('../components/Forecast');
var api = require('../helpers/api');

var ForecastContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function () {
        return {isLoading: true, weatherData: {}}
    },
    componentDidMount: function () {
        api
            .getCityInfo(this.props.routeParams.city)
            .then(function (data) {
                this.setState({isLoading: false, weatherData: data[1]})
            }.bind(this));
    },
    handleClick: function (weather) {
        this
            .context
            .router
            .push({
                pathname: '/detail/' + this.props.routeParams.city,
                state: {
                    weather: weather
                }
            })
    },
    render: function () {
        return (<Forecast
            isLoading={this.state.isLoading}
            city={this.props.routeParams.city}
            forecastData={this.state.weatherData}
            handleClick={this.handleClick}/>)
    }
});

module.exports = ForecastContainer;