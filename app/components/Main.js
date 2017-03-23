var React = require('react');

var styles = {
    container: {
        width: '100%',
        height: '100%',
    }
}

var Main = React.createClass({
    render: function () {
        return (
            <div style={styles.container}>
                <h1>Header from Main.js</h1>
                {this.props.children}
            </div>
        )
    }
});

module.exports = Main;