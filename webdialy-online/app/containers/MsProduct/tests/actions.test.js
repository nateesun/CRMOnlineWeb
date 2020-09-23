import * as actions from '../actions';
import * as constants from '../constants';

describe('MsProduct actions', () => {
  describe('initial load Action', () => {
    it('has a type of INIT_LOAD', () => {
      const expected = {
        type: constants.INIT_LOAD,
      };
      expect(actions.initLoad()).toEqual(expected);
    });
  });
});
