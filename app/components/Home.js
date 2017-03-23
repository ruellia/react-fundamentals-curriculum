var React = require('react');
var GetCity = require('./GetCity');

var styles = {
  background: {
    backgroundSize: 'cover',
    backgroundImage: "url('app/images/pattern.svg')",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  }
}

var Home = React.createClass({
    render: function () {
        return (
            <div style = {styles.background}>
                <h1>Enter a City and State</h1>
                <GetCity />
            </div>
        )
    }
});

module.exports = Home;