import produce from 'immer';
import forgotPasswordReducer from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('forgotPasswordReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      request: {
        email: '',
        mobile: '',
        secret: '',
      },
      status: '',
      msg: '',
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(forgotPasswordReducer(undefined, {})).toEqual(expectedResult);
  });
});
