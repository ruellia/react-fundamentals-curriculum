var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var Detail = require('../components/Detail');
var ForecastContainer = require('../containers/ForecastContainer');
var HomeContainer = require('../containers/HomeContainer');

var routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={HomeContainer}/>
            <Route path='forecast/:city' component={ForecastContainer} />
            <Route path='detail/:city' component={Detail} />
        </Route>
    </Router>
);

module.exports = routes;