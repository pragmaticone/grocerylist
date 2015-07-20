var React = require('react/addons');
var ItemList = require('./ItemList');

var Board = React.createClass({
  getInitialState: function() {
    return {
      expansionState: 'board-body-maximized'
    };
  },
  handleBoardExpansion: function() {
  },
  handleBoardDelete: function() {
  },
  render: function() {
    return (
      <div key={this.props.data.id} className="board">
        <div className="board-title">
          <span className="board-bars">
            <i className="fa fa-bars" onClick={this.handleBoardExpansion}></i>
          </span>
          <span className="board-del" onClick={this.handleBoardDelete}>
            <i className="fa fa-times"></i>
          </span>
          <span>{this.props.data.name}</span>
        </div>
        <ItemList items={this.props.data.items} />
      </div>
    );
  }
});

module.exports = Board;
