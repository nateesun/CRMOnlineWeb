import produce from 'immer';
import memberOrdersConfirmReducer, { initialState } from '../reducer';
import * as actions from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('memberOrdersConfirmReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(memberOrdersConfirmReducer(undefined, {})).toEqual(expectedResult);
  });
  it('should handle the initLoad action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.data = 'data';
      draft.response = {};
    });
    expect(memberOrdersConfirmReducer(state, actions.initLoad('data'))).toEqual(expectedResult);
  });
  it('should handle the initLoadSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.list = [];
      draft.response = {};
    });
    expect(memberOrdersConfirmReducer(state, actions.initLoadSuccess([]))).toEqual(expectedResult);
  });
  it('should handle the initLoadError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Error';
      draft.response.message = 'Error load initial data';
    });
    expect(memberOrdersConfirmReducer(state, actions.initLoadError())).toEqual(expectedResult);
  });
  it('should handle the confirmOrder action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.confirmData = 'confirm';
      draft.response = {};
    });
    expect(memberOrdersConfirmReducer(state, actions.confirmOrder('confirm'))).toEqual(
      expectedResult,
    );
  });
  it('should handle the confirmOrderSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Success';
    });
    expect(memberOrdersConfirmReducer(state, actions.confirmOrderSuccess([]))).toEqual(
      expectedResult,
    );
  });
  it('should handle the confirmOrderError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Error';
      draft.response.message = 'Update status confirm order error';
    });
    expect(memberOrdersConfirmReducer(state, actions.confirmOrderError())).toEqual(expectedResult);
  });
});
