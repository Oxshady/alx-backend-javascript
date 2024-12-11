const assert = require('assert');

describe('calculateNumber', () => {
  const calculateNumber = require('./0-calcul');
  it('add correctly', () => {
    assert.equal(calculateNumber(1.2, 1), 2, 'should be 2');
    assert.equal(calculateNumber(1, 1.8), 3, 'should be 3');
    assert.equal(calculateNumber(1.2, 1.7), 3, 'should be 3');
    assert.equal(calculateNumber(1.6, 1.7), 4, 'should be 4');
    assert.equal(calculateNumber(1, 1), 2, 'should be 2');
  });
  it('edge cases where passing string', () => {
    assert.equal(calculateNumber('holberton', 2), NaN, 'should be NaN');
    assert.equal(calculateNumber('holberton', 'School'), NaN, 'should be NaN');
  });
  it('edge cases where no passing for args', () => {
    assert.equal(calculateNumber(), NaN, 'should be NaN');
    assert.equal(calculateNumber(1), NaN, 'should be NaN');
  });
});
