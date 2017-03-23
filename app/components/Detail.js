var React = require('react');
var util = require('../helpers/util');
var DayItem = require('./DayItem');
var convertTemp = util.convertTemp;

var styles = {
    descriptionContainer: {
        fontSize: 34,
        fontWeight: 100,
        maxWidth: 400,
        margin: '0 auto',
        textAlign: 'center'
    }
}

var Detail = React.createClass({
    render: function () {
        return (
            <div style={styles.container}>
                <DayItem day={this.props.weather}/>
                <div style={styles.descriptionContainer}>
                    <p>{this.props.city}</p>
                    <p>{this.props.weather.weather[0].description}</p>
                    <p>min temp: {convertTemp(this.props.weather.temp.min)}
                        degrees</p>
                    <p>max temp: {convertTemp(this.props.weather.temp.max)}
                        degrees</p>
                    <p>humidity: {this.props.weather.humidity}</p>
                </div>
            </div>
        )
    }
});

module.exports = Detail;