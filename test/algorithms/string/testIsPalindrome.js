const assert = require('assert');

const palindrome = require('../../../src/algorithms/string/isPalindrome');

describe('palindrome', () => {
  it('should return true if the string passed is palindrome', () =>{
    assert.equal(palindrome("racecar"),  true );
    assert.equal(palindrome("rotor"),  true );
    assert.equal(palindrome("tenet"),  true );
    assert.equal(palindrome("kayak"),  true );
    assert.equal(palindrome("redder"),  true );
  });

  it('should return false if the string passed is not palindrome', () =>{
    assert.equal(palindrome("race"),  false );
    assert.equal(palindrome("motor"),  false );
    assert.equal(palindrome("tenant"),  false );
    assert.equal(palindrome("kayaking"),  false );
    assert.equal(palindrome("red"),  false );
  });

});
