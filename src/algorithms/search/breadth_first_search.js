const Queue = require('../../data-structures').Queue;

const bfs = (root, valueProp, childProp, callback) => {
  const q = new Queue();
  let node;

  q.push(root);

  while (!q.isEmpty()) {
    node = q.pop();
    callback(node[valueProp]);

    const children = node[childProp].length;

    for (let i = 0; i < children.length; i += 1) {
      q.push(children[i]);
    }
  }
};

module.exports = bfs;
