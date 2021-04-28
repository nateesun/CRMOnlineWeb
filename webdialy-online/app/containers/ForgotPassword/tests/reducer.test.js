import produce from 'immer';
import forgotPasswordReducer, { initialState } from '../reducer';
import * as actions from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('forgotPasswordReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(forgotPasswordReducer(undefined, {})).toEqual(expectedResult);
  });
  it('should handle the initState action correctly', () => {
    const expectedResult = produce(state, () => {});
    expect(forgotPasswordReducer(state, actions.initState())).toEqual(expectedResult);
  });
  it('should handle the requestPassword action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.request = 'request';
    });
    expect(forgotPasswordReducer(state, actions.requestPassword('request'))).toEqual(
      expectedResult,
    );
  });
  it('should handle the requestPasswordSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.status = 'Success';
      draft.msg = 'Change password to default success';
    });
    expect(forgotPasswordReducer(state, actions.requestPasswordSuccess())).toEqual(expectedResult);
  });
  it('should handle the requestPasswordError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.status = 'Error';
      draft.msg = 'Error to Change password !!!';
    });
    expect(forgotPasswordReducer(state, actions.requestPasswordError())).toEqual(expectedResult);
  });
  it('should handle the sendEmail action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.request = {
        email: 'email@gmail.com',
      };
    });
    expect(forgotPasswordReducer(state, actions.sendEmail('email@gmail.com'))).toEqual(
      expectedResult,
    );
  });
  it('should handle the sendEmailSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.status = 'Success';
      draft.msg = 'Change password to default success';
    });
    expect(forgotPasswordReducer(state, actions.sendEmailSuccess())).toEqual(expectedResult);
  });
  it('should handle the sendEmailError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.status = 'Error';
      draft.msg = 'Error to Change password !!!';
    });
    expect(forgotPasswordReducer(state, actions.sendEmailError())).toEqual(expectedResult);
  });
});
