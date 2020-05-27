describe('main', () => {
  let value;
  let total;

  before(() => {

  });

  beforeEach(() => {
    value = 2;
    total = 0;
  });

  afterEach(() => {

  });

  after(() => {

  });

  it('should have a value of 4 when total up', () => {
    total = value + value;
    console.log(total);
  });

  it('should have a value of 4 when multiplied by', () => {
    total = value * value;
    console.log(total);
  });

  it('should have a value of 1 when divided by', () => {
    total = value / value;
    console.log(total);
  });
});
