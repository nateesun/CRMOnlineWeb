import { initState } from '../actions';
import { INIT_STATE } from '../constants';

describe('AddressShipping actions', () => {
  describe('Initial state Action', () => {
    it('has a type of INIT_STATE', () => {
      const expected = {
        type: INIT_STATE,
      };
      expect(initState()).toEqual(expected);
    });
  });
});
