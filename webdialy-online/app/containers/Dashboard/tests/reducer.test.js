import produce from 'immer';
import dashboardReducer, { initialState } from '../reducer';
import * as actions from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('dashboardReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(dashboardReducer(undefined, {})).toEqual(expectedResult);
  });
  it('should handle the initState action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.redeem = [];
      draft.redeemPoint = {};
      draft.email = '';
      draft.error = '';
    });
    expect(dashboardReducer(state, actions.initState())).toEqual(expectedResult);
  });
  it('should handle the loadRedeem action correctly', () => {
    const expectedResult = produce(state, () => {});
    expect(dashboardReducer(state, actions.loadRedeem())).toEqual(expectedResult);
  });
  it('should handle the loadRedeemSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.redeem = 'redeem';
    });
    expect(dashboardReducer(state, actions.loadRedeemSuccess('redeem'))).toEqual(expectedResult);
  });
  it('should handle the loadRedeemError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.error = 'error';
    });
    expect(dashboardReducer(state, actions.loadRedeemError('error'))).toEqual(expectedResult);
  });
  // it('should handle the createRedeem action correctly', () => {
  //   const expectedResult = produce(state, draft => {
  //     draft.redeemPoint.product_code = 'p001';
  //       draft.redeemPoint.uuid_index = v4();
  //   });
  //   expect(dashboardReducer(state, actions.createRedeem('p001'))).toEqual(expectedResult);
  // });
  it('should handle the createRedeemSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.redeemPoint.redeem_code = 'r001';
    });
    expect(dashboardReducer(state, actions.createRedeemSuccess('r001'))).toEqual(expectedResult);
  });
  it('should handle the createRedeemError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.error = 'error';
    });
    expect(dashboardReducer(state, actions.createRedeemError('error'))).toEqual(expectedResult);
  });
});
