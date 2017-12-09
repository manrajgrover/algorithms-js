/* eslint-env mocha */
const bfs = require('../../../src').algorithms.search.bfs;
const assert = require('assert');

describe('BFS', () => {
  it('should perform bfs on a tree', () => {
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
    bfs(tree.root, 'children', node => children.push(node.name));
    assert.deepStrictEqual(
      children, [
        'root',
        'child_1',
        'child_2',
        'child_3',
        'child_4',
        'child_5',
        'child_6',
        'child_7'
      ]
    );
  });
});
