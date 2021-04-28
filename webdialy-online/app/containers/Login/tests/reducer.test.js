import produce from 'immer';
import loginReducer, { initialState } from '../reducer';
import * as actions from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('loginReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(loginReducer(undefined, {})).toEqual(expectedResult);
  });
  it('should handle the initDatabase action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.queryDb = 'db';
    });
    expect(loginReducer(state, actions.initDatabase('db'))).toEqual(expectedResult);
  });
  it('should handle the initState action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loginForm = {};
      draft.response = {};
      draft.profile = {};
      draft.loggedIn = false;
      draft.error = '';
    });
    expect(loginReducer(state, actions.initState())).toEqual(expectedResult);
  });
  it('should handle the checkLogin action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loginForm = {};
    });
    expect(loginReducer(state, actions.checkLogin({}))).toEqual(expectedResult);
  });
  it('should handle the checkLoginSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loggedIn = true;
    });
    expect(loginReducer(state, actions.checkLoginSuccess())).toEqual(expectedResult);
  });
  it('should handle the checkLoginError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.error = 'error';
      draft.loggedIn = false;
    });
    expect(loginReducer(state, actions.checkLoginError('error'))).toEqual(expectedResult);
  });
});
