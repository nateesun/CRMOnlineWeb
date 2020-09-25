import { initLoad } from '../actions';
import { INIT_LOAD } from '../constants';

describe('Profile actions', () => {
  describe('initLoad', () => {
    it('has a type of INIT_LOAD', () => {
      const expected = {
        type: INIT_LOAD,
      };
      expect(initLoad()).toEqual(expected);
    });
  });
});
