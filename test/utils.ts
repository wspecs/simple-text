import * as lib from '../lib/utils';
import { expect } from 'chai';

describe('word parser', () => {
  beforeEach(() => {
    // Set up before running tests.
  });

  it('initializes', () => {
    expect(lib.simplify('à la mode')).to.equal('a la mode');
  });

  it('simplifies all keys', () => {
    for (const key of Object.keys(lib.REPLACE_MAP)) {
      expect(lib.simplify(key)).to.equal(lib.REPLACE_MAP[key]);
    }
  });
});
