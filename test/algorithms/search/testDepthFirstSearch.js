/* eslint-env mocha */
const dfs = require('../../../src').algorithms.search.dfs;
const assert = require('assert');

describe('DFS', () => {
  it('should perform dfs on a tree', () => {
    const tree = {
      root: {
        name: 'root',
        children: [{
          name: 'child_1',
          children: [{
            name: 'child_4',
            children: []
          }, {
            name: 'child_5',
            children: []
          }]
        }, {
          name: 'child_2',
          children: [{
            name: 'child_6',
            children: []
          }]
        }, {
          name: 'child_3',
          children: [{
            name: 'child_7',
            children: []
          }]
        }]
      }
    };

    const children = [];
    dfs(tree.root, 'children', node => children.push(node.name));

    assert.deepStrictEqual(
      children, [
        'root',
        'child_3',
        'child_7',
        'child_2',
        'child_6',
        'child_1',
        'child_5',
        'child_4'
      ]
    );
  });
});
