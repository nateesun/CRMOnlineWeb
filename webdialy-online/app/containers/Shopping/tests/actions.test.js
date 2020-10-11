import { initState } from '../actions';
import { INIT_STATE } from '../constants';

describe('Shopping actions', () => {
  describe('Initail State', () => {
    it('has a type of INIT_STATE', () => {
      const expected = {
        type: INIT_STATE,
      };
      expect(initState()).toEqual(expected);
    });
  });
});
