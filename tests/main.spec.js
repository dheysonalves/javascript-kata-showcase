const expect = require('chai').expect;
const calc = require('../src/main');

describe('Calculator', () => {
  // SMOKE TESTS
  describe('Smoke tests', () => {
    it('should exist the calc lib', () => {
      expect(calc).to.exist;
    });

    it('should exist the method sum', () => {
      expect(calc.sum).to.exist;
    });

    it('should exist the method sub', () => {
      expect(calc.sub).to.exist;
    });

    it('should exist the method mult', () => {
      expect(calc.mult).to.exist;
    });

    it('should exist the method div', () => {
      expect(calc.div).to.exist;
    });

    it('should exist the method pow', () => {
      expect(calc.pow).to.exist;
    });
  });

  describe('Sum', () => {
    it('should return 4 when `sum(2,2)`', () => {
      expect(calc.sum(2, 2)).to.be.equal(4);
    });

    it('should return 8 when `sum(6,2)`', () => {
      expect(calc.sum(6, 2)).to.be.equal(8);
    });
  });

  describe('Sub', () => {
    it('should return 2 when `sub(4,2)`', () => {
      expect(calc.sub(4, 2)).to.be.equal(2);
    });
  });

  describe('Mult', () => {
    it('should return 16 when `mult(4,4)`', () => {
      expect(calc.mult(4, 4)).to.be.equal(16);
    });
  });

  describe('Div', () => {
    it('should return 4 when `div(16,4)`', () => {
      expect(calc.div(16, 4)).to.be.equal(4);
    });

    it('should return `Not possible to divide by zero` when divided by zero', () => {
      expect(calc.div(16, 0)).to.be.equal('Not possible to divide by zero');
    });
  });

  describe('Pow', () => {
    it('should return 256 when `pow(4,4)`', () => {
      expect(calc.pow(4, 4)).to.be.equal(256);
    });
  });
});
