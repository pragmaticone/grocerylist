'use strict';

//var Board = require('./Board');
var BoardList = require('./BoardList');
var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('normalize.css');
require('../styles/main.css');

var GroceryListApp = React.createClass({
  getInitialState: function() {
    return {
      newBoardName: '',
      boardList: [{
        id: 0,
        name: 'Safeway',
        items: [{
          name: 'Coffee'
        }, {
          name: 'Brocolli florets'
        }]
      }, {
        id: 1,
        name: 'CostCo',
        numItems: 0,
        items: []
      }, {
        id: 2,
        name: 'Indian/Pak Store',
        items: [{
          name: 'Rice'
        }, {
          name: 'Moong dal'
        }, {
          name: 'Atta'
        }]
      }]
    };
  },
  onChange: function(e) {
    this.setState({
      newBoardName: e.target.value
    });
  },
  onSubmit: function(e) {
    e.preventDefault();
    var newListOfBoards = this.state.boardList.concat([{name: this.state.newBoardName}]);
    this.setState({
      newBoardName: '',
      boardList: newListOfBoards
    });
  },
  render: function() {
    return (
      <div className="main">
        <ReactTransitionGroup transitionName="fade">
          <h3>Create a new board</h3>
          <form onSubmit={this.onSubmit}>
            <input type="text" placeholder="Enter board name" value={this.state.newBoardName} onChange={this.onChange} />
            <button>Add Board</button>
          </form>
          <h3>Or start adding items to an existing board</h3>
          <BoardList boards={this.state.boardList} />
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = GroceryListApp;
