const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('first number rounded', () => {
  it('add correctly', () => {
    assert.equal(calculateNumber(1.2, 1), 2, 'should be 2');
  });
});
