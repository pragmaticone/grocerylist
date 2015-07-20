'use strict';

var GroceryListApp = require('./GroceryListApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={GroceryListApp}>
    <Route name="/" handler={GroceryListApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
