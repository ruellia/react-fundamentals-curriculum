var React = require('react');

var styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

var GetCity = React.createClass({
    render: function () {
        return (
            <div style = {styles.container}>
                <input placeholder='St. George, Utah' type='text'/>
                <br/>
                <button type='button' className='btn btn-lg btn-success'>Get Weather</button>
            </div>
        )
    }
});

module.exports = GetCity;