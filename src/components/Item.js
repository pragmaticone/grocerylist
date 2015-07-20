var React = require('react/addons');

var Item = React.createClass({
  render: function() {
    return (
      <div className="item-container">
        <span className="item-checkbox">
          <i className="fa fa-square-o fa-lg"></i>
        </span>
        <span>{this.props.data.name}</span>
      </div>
    );
  }
});

module.exports = Item;
