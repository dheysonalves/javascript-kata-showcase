import { expect } from 'chai';
import { sub, sum, mult, div, pow } from '../src/main';

describe('Calculator', () => {
  // SMOKE TESTS
  describe('Smoke tests', () => {
    it('should exist the method sum', () => {
      expect(sum).to.exist;
    });

    it('should exist the method sub', () => {
      expect(sub).to.exist;
    });

    it('should exist the method mult', () => {
      expect(mult).to.exist;
    });

    it('should exist the method div', () => {
      expect(div).to.exist;
    });

    it('should exist the method pow', () => {
      expect(pow).to.exist;
    });
  });

  describe('Sum', () => {
    it('should return 4 when `sum(2,2)`', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });

    it('should return 8 when `sum(6,2)`', () => {
      expect(sum(6, 2)).to.be.equal(8);
    });
  });

  describe('Sub', () => {
    it('should return 2 when `sub(4,2)`', () => {
      expect(sub(4, 2)).to.be.equal(2);
    });
  });

  describe('Mult', () => {
    it('should return 16 when `mult(4,4)`', () => {
      expect(mult(4, 4)).to.be.equal(16);
    });
  });

  describe('Div', () => {
    it('should return 4 when `div(16,4)`', () => {
      expect(div(16, 4)).to.be.equal(4);
    });

    it('should return `Not possible to divide by zero` when divided by zero', () => {
      expect(div(16, 0)).to.be.equal('Not possible to divide by zero');
    });
  });

  describe('Pow', () => {
    it('should return 256 when `pow(4,4)`', () => {
      expect(pow(4, 4)).to.be.equal(256);
    });
  });
});
