import produce from 'immer';
import dashboardReducer from '../reducer';
import * as actions from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('dashboardReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      redeem: [],
      redeemPoint: {
        uuid_index: '',
        product_code: '',
        redeem_code: '',
      },
      email: '',
      error: '',
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(dashboardReducer(undefined, {})).toEqual(expectedResult);
  });
});
