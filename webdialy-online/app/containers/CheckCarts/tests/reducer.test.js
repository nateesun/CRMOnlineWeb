import produce from 'immer';
import checkCartsReducer from '../reducer';
import * as actions from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('checkCartsReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      list: [],
      data: {},
      page: 'LIST',
      status: null,
      message: null,
      currentId: '',
      response: {
        status: null,
        message: null,
      },
      carts: {
        cart_no: '',
        cart_create_date: null,
        approve: '',
        reason: '',
      },
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(checkCartsReducer(undefined, {})).toEqual(expectedResult);
  });
  it('should handle the changePage action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.page = 'newPage';
      draft.response.status = '';
      draft.response.message = '';
    });
    expect(checkCartsReducer(state, actions.changePage('newPage'))).toEqual(expectedResult);
  });
  it('should handle the initLoadSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.list = 'newPage';
    });
    expect(checkCartsReducer(state, actions.initLoadSuccess('newPage'))).toEqual(expectedResult);
  });
  it('should handle the initLoadError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Error';
      draft.response.message = 'Load data error!';
    });
    expect(checkCartsReducer(state, actions.initLoadError('newPage'))).toEqual(expectedResult);
  });
  it('should handle the loadEdit action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.data = 'newPage';
    });
    expect(checkCartsReducer(state, actions.loadEdit('newPage'))).toEqual(expectedResult);
  });
  it('should handle the loadEditSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.list = 'newPage';
    });
    expect(checkCartsReducer(state, actions.loadEditSuccess('newPage'))).toEqual(expectedResult);
  });
  it('should handle the loadEditError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Error';
      draft.response.message = 'Load data to edit error!';
    });
    expect(checkCartsReducer(state, actions.loadEditError('newPage'))).toEqual(expectedResult);
  });
});
