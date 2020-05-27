const { expect } = require('chai');

describe('main', () => {
  let value;
  let total;
  let arr;

  before(() => {

  });

  beforeEach(() => {
    value = 2;
    total = 0;
    arr = [4, 2, 1, 9];
  });

  afterEach(() => {

  });

  after(() => {

  });

  it('should be an array', () => {
    expect(arr).to.be.an('array');
  });

  it('should have a 4 value in the array', () => {
    expect(arr).to.include(4);
  });

  it('should length size be 4 in the array', () => {
    arr.pop();
    expect(arr).to.be.lengthOf(3);
  });

  it('should be a array and includes 9', () => {
    expect(arr).to.be.an('array').to.include(9);
  });

  it('should be a number', () => {
    expect(total).to.be.a('number');
  });

  it('should have a value of 4 when total up', () => {
    total = value + value;
    expect(total).to.be.equal(4);
  });

  it('should have a value of 4 when multiplied by', () => {
    total = value * value;
    expect(total).to.be.equal(4);
  });

  it('should have a value of 1 when divided by', () => {
    total = value / value;
    expect(total).to.be.equal(1);
  });
});
