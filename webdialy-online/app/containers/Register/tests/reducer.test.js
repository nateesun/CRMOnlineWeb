import produce from 'immer';
import * as actions from '../actions';
import registerReducer, { initialState } from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('registerReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(registerReducer(undefined, {})).toEqual(expectedResult);
  });
  it('should handle the initState action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.data = {};
      draft.status = '';
      draft.error = '';
    });
    expect(registerReducer(state, actions.initState())).toEqual(expectedResult);
  });
  // it('should handle the addRegisterMember action correctly', () => {
  //   const expectedResult = produce(state, draft => {
  //     draft.data = action.payload;
  //     draft.data.uuid_index = v4();
  //   });
  //   expect(registerReducer(state, actions.addRegisterMember())).toEqual(expectedResult);
  // });
  it('should handle the addRegisterMemberSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.status = 'Success';
    });
    expect(registerReducer(state, actions.addRegisterMemberSuccess())).toEqual(expectedResult);
  });
  it('should handle the addRegisterMemberError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.error = 'error';
    });
    expect(registerReducer(state, actions.addRegisterMemberError('error'))).toEqual(expectedResult);
  });
});
