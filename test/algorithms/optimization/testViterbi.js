const viterbi = require('../../../src').algorithms.optimization.viterbi;

const assert = require('assert');
/**
 * test implementation using parameters/results given in Wikipedia's example:
 *    https://en.wikipedia.org/wiki/Viterbi_algorithm#Example
 */
describe('Viterbi Algorithm', () => {
  //  define observation space and state space
  const O = ['normal', 'cold', 'dizzy'];
  const S = ['healthy', 'fever'];

  //  arbitrarily define parameters P, A, and B
  const P = { healthy: 0.6, fever: 0.4 };
  const A = {
    healthy: {
      healthy: 0.7,
      fever: 0.3
    },
    fever: {
      healthy: 0.4,
      fever: 0.6
    }
  };
  const B = {
    healthy: {
      normal: 0.5,
      cold: 0.4,
      dizzy: 0.1
    },
    fever: {
      normal: 0.1,
      cold: 0.3,
      dizzy: 0.6
    }
  };

  const Y = ['normal', 'cold', 'dizzy'];
  const X = ['healthy', 'healthy', 'fever']; //  expected results
  it(`should return the expected path: ${X.join(',')}`, () => {
    assert.deepEqual(viterbi(O, S, P, Y, A, B), X);
  });
});
