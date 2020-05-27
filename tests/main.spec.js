
// We describe some file or method
describe('Main', () => {
  describe('Method A', () => {
    // We set a context based on a method
    context('Case 1', () => {
      // It is gonna run the tests
      it('should happen something', () => {
        // What should happen here!
      });
    });

    context('Case 2', () => {
      it('should happen something', () => {
        // What should happen here!
      });

      it('should happen ninini', () => {
        // What should happen here!
      });
    });
  });

  describe('Method B', () => {

  });
});
