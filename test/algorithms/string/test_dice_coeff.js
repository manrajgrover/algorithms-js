const diceCoeff = require('../../../src').algorithms.string.dice_coeff;
const assert = require('assert');

describe('Dice Coefficient', () => {

    const stringOne = "batman", stringTwo = "cowgirl", stringThree = "batmen";
    const n = 2; const over = 100

    it('should return 1 for the same string', () => {      
  
        const result = diceCoeff(stringOne,stringOne,n);
        assert.strictEqual(result,1);
    });

    it('should return -1 if either of the strings is empty', () => {      
  
        const resultOne = diceCoeff("",stringTwo,n);
        assert.strictEqual(resultOne,-1);
        const resultTwo = diceCoeff(stringOne,"",n);
        assert.strictEqual(resultTwo,-1);
    });

    it('should return -1 if the n value is more than the minimum length of either of the two strings', () => {      
        const result = diceCoeff(stringOne,stringTwo,over);
        assert.strictEqual(result,-1);
    });


    it(`should return 0 for ${stringOne} and ${stringTwo} with n = ${n}`, () => {      
        const result = diceCoeff(stringOne,stringTwo,n);
        assert.strictEqual(result,0);        
    });

    it(`should return 0. for ${stringTwo} and ${stringThree} with n = ${n}`, () => {      
        const result = diceCoeff(stringTwo,stringThree,n);

        assert.strictEqual(result,0.6)
        
    });
});