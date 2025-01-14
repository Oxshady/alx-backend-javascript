const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should correctly add two rounded numbers', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
      expect(calculateNumber('SUM', -1.4, 4.5)).to.equal(4);
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    });
  });

  describe('SUBTRACT', () => {
    it('should correctly subtract two rounded numbers', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
      expect(calculateNumber('SUBTRACT', 4.5, 1.4)).to.equal(4);
      expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    });
  });

  describe('DIVIDE', () => {
    it('should correctly divide two rounded numbers', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.closeTo(0.2, 0.01);
      expect(calculateNumber('DIVIDE', 4.5, 1.4)).to.equal(5);
    });

    it('should return "Error" when dividing by 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });

  describe('Invalid type', () => {
    it('should throw an error for invalid operation type', () => {
      expect(() => calculateNumber('MULTIPLY', 1.4, 4.5)).to.throw('Invalid type');
    });
  });
});
