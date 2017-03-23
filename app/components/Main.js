var React = require('react');
var GetCityContainer = require('../containers/GetCityContainer');

var styles = {
    container: {
        width: '100%',
        height: '100%'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(252, 90, 44, 0.89)',
        padding: 5
    },
    text: {
        fontSize: 30,
        color: '#fff'
    }
}

var Main = React.createClass({
    render: function () {
        return (
            <div style={styles.container}>
                <div style={styles.header}>
                    <h1 style = {styles.text}>The Weather App</h1>
                    <GetCityContainer direction='row' />
                </div>
                {this.props.children}
            </div>
        )
    }
});

module.exports = Main;