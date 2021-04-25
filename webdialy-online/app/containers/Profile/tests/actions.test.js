import * as actions from '../actions';
import * as constants from '../constants';

describe('Profile actions', () => {
  describe('initState', () => {
    it('has a type of INIT_STATE', () => {
      const expected = {
        type: constants.INIT_STATE,
      };
      expect(actions.initState()).toEqual(expected);
    });
  });
  describe('initLoadCompany', () => {
    it('has a type of INIT_LOAD_COMPANY', () => {
      const expected = {
        type: constants.INIT_LOAD_COMPANY,
      };
      expect(actions.initLoadCompany()).toEqual(expected);
    });
  });
  describe('initLoadCompanySuccess', () => {
    it('has a type of INIT_LOAD_COMPANY_SUCCESS', () => {
      const expected = {
        type: constants.INIT_LOAD_COMPANY_SUCCESS,
      };
      expect(actions.initLoadCompanySuccess()).toEqual(expected);
    });
  });
  describe('initLoadCompanyError', () => {
    it('has a type of INIT_LOAD_COMPANY_ERROR', () => {
      const expected = {
        type: constants.INIT_LOAD_COMPANY_ERROR,
      };
      expect(actions.initLoadCompanyError()).toEqual(expected);
    });
  });
});
