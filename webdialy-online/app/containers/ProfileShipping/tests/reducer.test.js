import produce from 'immer';
import * as actions from '../actions';
import profileShippingReducer, { initialState } from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('profileShippingReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(profileShippingReducer(undefined, {})).toEqual(expectedResult);
  });
  it('should handle the initState action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.status = '';
      draft.error = '';
      draft.data = {};
    });
    expect(profileShippingReducer(state, actions.initState())).toEqual(expectedResult);
  });
  it('should handle the initLoad action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.member_code = 'm001';
    });
    expect(profileShippingReducer(state, actions.initLoad('m001'))).toEqual(expectedResult);
  });
  it('should handle the initLoadSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.shipping = [1];
    });
    expect(profileShippingReducer(state, actions.initLoadSuccess([1]))).toEqual(expectedResult);
  });
  it('should handle the initLoadError action correctly', () => {
    const expectedResult = produce(state, () => {});
    expect(profileShippingReducer(state, actions.initLoadError())).toEqual(expectedResult);
  });
  it('should handle the editShipping action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.address = 'address';
    });
    expect(profileShippingReducer(state, actions.editShipping('address'))).toEqual(expectedResult);
  });
  it('should handle the editShippingSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.status = 'Success';
    });
    expect(profileShippingReducer(state, actions.editShippingSuccess())).toEqual(expectedResult);
  });
  it('should handle the editShippingError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.error = 'error';
    });
    expect(profileShippingReducer(state, actions.editShippingError('error'))).toEqual(
      expectedResult,
    );
  });
  it('should handle the changeMapsValue action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.shipping.map_latitude = 1;
      draft.shipping.map_longitude = 1;
    });
    expect(
      profileShippingReducer(state, actions.changeMapsValue({ map_latitude: 1, map_longitude: 1 })),
    ).toEqual(expectedResult);
  });
});
