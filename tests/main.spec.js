
// We describe some file or method
describe('Main', () => {
  describe('Method A', () => {
    // We set a context based on a method
    context('Case 1', () => {
      // It is gonna run the tests
      // Skip allow to jump to the next case
      it.skip('should happen something', () => {
        // What should happen here!
        throw new Error('Just an error');
      });
    });
    // It tells to run only this code block
    context('Case 2', () => {
      it('should happen something', () => {
        // What should happen here!
        throw new Error('Just an error');
      });

      it('should happen ninini', () => {
        // What should happen here!
      });
    });
  });

  describe('Method B', () => {

  });
});
