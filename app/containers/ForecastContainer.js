var React = require('react');
var PropTypes = React.PropTypes;
var Forecast = require('../components/Forecast');
var api = require('../helpers/api');

var ForecastContainer = React.createClass({
    getInitialState: function () {
        return {isLoading: true}
    },
    componentDidMount: function () {
        api
            .getCityInfo(this.props.routeParams.city)
            .then(function (data) {
                console.log(data)
                this.setState({isLoading: false})
            }.bind(this));
    },
    render: function () {
        console.log('hey' + this.state.isLoading)
        return (<Forecast isLoading={this.state.isLoading}/>)
    }
});

module.exports = ForecastContainer;