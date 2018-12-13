/*jslint node: true, maxerr: 50, maxlen: 80 */

/*global define */

'use strict';

var a, b, c,
    assert = require('assert'),
    solve = require('./node_main.js'),
    util = require('util'),
    assertNumEqual,
    assertNumArrayEqual;

assertNumEqual = function (actual, expected, epsilon) {
    if (epsilon === undefined) {
        epsilon = 0.00001; // small but arbitrary
    }
    assert(Math.abs(actual - expected) < epsilon,
           util.format('|%d - %d| < epsilon', actual, expected));
};

assertNumArrayEqual = function (actualArray, expectedArray, epsilon) {
    if (expectedArray === null) {
        assert.equal(actualArray, expectedArray);
        return;
    }
    expectedArray.forEach(function (expected, i) {
        assertNumEqual(actualArray[i], expected, epsilon);
    });
};

// Nothing:
assertNumArrayEqual(solve([], [], [], [], []), []);

// One unknown:
assertNumArrayEqual(solve([], [2], [], [0]), [0]);
assertNumArrayEqual(solve([], [0], [], [2]), null);
assertNumArrayEqual(solve([], [0], [], [0]), null);
assertNumArrayEqual(solve([], [2], [], [10]), [5]);
assertNumArrayEqual(solve([], [-1.5], [], [-1.125]), [0.75]);

// Two unknowns:
assertNumArrayEqual(solve([4], [11, 24], [6], [6, 2]), [0.55, -0.00833333]);
assertNumArrayEqual(solve([0], [11, 24], [6], [6, 2]), [0.5, 0.0833333]);
assertNumArrayEqual(solve([1], [1, 0], [1], [1, 0]), [0, 1]);

// Solution exists, but is not found (matrix not diagonally dominant):
assertNumArrayEqual(solve([0], [1, 0], [1], [1, 0]), null);

// Three unknowns:
assertNumArrayEqual(solve([4, 3], [9, -7, 8], [1, 2], [5, 6, 2]),
                    [0.6, -0.4, 0.4]);
assertNumArrayEqual(solve([4, 3], [11, 24, 4], [6, 13], [6, 2, 14]),
                    [2.61017, -3.78531, 6.33898]);
assertNumArrayEqual(solve([4, 3], [11, 24, 4], [6, 13], [0, 0, 0]),
                    [0, 0, 0]);
assertNumArrayEqual(solve([4, 3], [1, 5, 8], [9, 7], [5, 6, 2]),
                    [0.784387, 0.468401, 0.0743494]);

// Solution exists, but is not found (matrix not diagonally dominant):
assertNumArrayEqual(solve([0, 3], [11, 0, 4], [6, 13], [6, 2, 14]), null);

// Four unknowns:
assertNumArrayEqual(solve([4, 3, 8], [11, 24, 4, 3],
                          [6, 13, 5], [6, 2, 7, 14]),
                    [1.0266, -0.882103, 1.46647, 0.756088]);

console.log('Passed');
