var React = require('react/addons');
var Item = require('./Item');

var ItemList = React.createClass({
  render: function() {
    var createItem = function(item) {
      return (
        <Item data={item} />
      );
    };
    return (
      <div>
        {this.props.items.map(createItem)}
      </div>
    );
  }
});

module.exports = ItemList;
