var React = require('react/addons');
var Board = require('./Board');

var BoardList = React.createClass({
  getInitialState: function() {
    return {
      expansionState: '+'
    };
  },
  render: function() {
    var createBoard = function(board) {
      return (
        <Board data={board} />
      );
    };
    return (
      <div>
        {this.props.boards.map(createBoard)}
      </div>
    );
  }
});

module.exports = BoardList;
