import { initState } from '../actions';
import { INIT_STATE } from '../constants';

describe('Login actions', () => {
  describe('Initail State', () => {
    it('has a type of INIT_STATE', () => {
      const expected = {
        type: INIT_STATE,
      };
      expect(initState()).toEqual(expected);
    });
  });
});
