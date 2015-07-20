'use strict';

describe('GroceryListApp', () => {
  let React = require('react/addons');
  let GroceryListApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    GroceryListApp = require('components/GroceryListApp.js');
    component = React.createElement(GroceryListApp);
  });

  it('should create a new instance of GroceryListApp', () => {
    expect(component).toBeDefined();
  });
});
