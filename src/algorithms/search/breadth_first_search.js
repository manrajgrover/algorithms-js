const Queue = require('../../data-structures').Queue;

const bfs = (root, childProp, callback) => {
  const q = new Queue();
  let node;

  q.push(root);

  while (!q.isEmpty()) {
    node = q.pop();
    callback(node);

    const children = node[childProp];

    for (let i = 0; i < children.length; i += 1) {
      q.push(children[i]);
    }
  }
};

module.exports = bfs;
