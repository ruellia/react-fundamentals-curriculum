var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var Forecast = require('../components/Forecast');
var HomeContainer = require('../containers/HomeContainer');

var routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={HomeContainer}/>
            <Route path='forecast/:city' component={Forecast} />
        </Route>
    </Router>
);

module.exports = routes;