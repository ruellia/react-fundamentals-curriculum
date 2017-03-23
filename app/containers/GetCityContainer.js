var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require('../components/GetCity');
var api = require('../helpers/api');

var GetCityContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    propTypes: {
        direction: PropTypes.string
    },
    getDefaultProps: function () {
        return {direction: 'column'}
    },
    getInitialState: function () {
        return {city: ''}
    },
    handleSubmitCity: function (e) {
        this.context.router.push({
            pathname: '/forecast/' + this.state.city
        })
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