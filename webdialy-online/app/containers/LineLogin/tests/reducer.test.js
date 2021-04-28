import produce from 'immer';
import lineLoginReducer from '../reducer';
import * as actions from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('lineLoginReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      token: null,
      profile: {},
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(lineLoginReducer(undefined, {})).toEqual(expectedResult);
  });
  it('should handle the initState action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.token = null;
      draft.profile = {};
    });
    expect(lineLoginReducer(state, actions.initState())).toEqual(expectedResult);
  });
  it('should handle the verifyToken action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.token = 'token';
    });
    expect(lineLoginReducer(state, actions.verifyToken('token'))).toEqual(expectedResult);
  });
  it('should handle the verifyTokenSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.profile = 'profile';
    });
    expect(lineLoginReducer(state, actions.verifyTokenSuccess('profile'))).toEqual(expectedResult);
  });
  it('should handle the verifyTokenError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.error = 'error';
    });
    expect(lineLoginReducer(state, actions.verifyTokenError('error'))).toEqual(expectedResult);
  });
});
