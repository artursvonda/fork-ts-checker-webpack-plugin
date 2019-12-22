const mock = require('mock-require');

mock('../../../lib/IncrementalChecker', {
  IncrementalChecker: class {
    nextIteration() {
      throw new Error("I'm an error!");
    }
  }
});
