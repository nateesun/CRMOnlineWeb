import produce from 'immer';
import checkCartsReducer, { initialState } from '../reducer';
import * as actions from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('checkCartsReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(checkCartsReducer(undefined, {})).toEqual(expectedResult);
  });
  it('should handle the changePage action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.list = [];
      draft.data = {};
      draft.page = 'LIST';
      draft.status = null;
      draft.message = null;
      draft.currentId = '';
      draft.response = {};
    });
    expect(checkCartsReducer(state, actions.initState())).toEqual(expectedResult);
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
  it('should handle the searchSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.list = [];
    });
    expect(checkCartsReducer(state, actions.searchSuccess([]))).toEqual(expectedResult);
  });
  it('should handle the searchError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Error';
      draft.response.message = 'Search data error!';
    });
    expect(checkCartsReducer(state, actions.searchError([]))).toEqual(expectedResult);
  });
  it('should handle the loadView action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.data = 'load';
    });
    expect(checkCartsReducer(state, actions.loadView('load'))).toEqual(expectedResult);
  });
  it('should handle the loadViewSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.list = [];
    });
    expect(checkCartsReducer(state, actions.loadViewSuccess([]))).toEqual(expectedResult);
  });
  it('should handle the loadViewError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Error';
      draft.response.message = 'Load data to view error!';
    });
    expect(checkCartsReducer(state, actions.loadViewError())).toEqual(expectedResult);
  });
  it('should handle the loadViewOrderError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Error';
      draft.response.message = 'Load data to view order error!';
    });
    expect(checkCartsReducer(state, actions.loadViewOrderError())).toEqual(expectedResult);
  });
  it('should handle the updateShoppingStep action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.carts = [];
    });
    expect(checkCartsReducer(state, actions.updateShoppingStep([]))).toEqual(expectedResult);
  });
  it('should handle the updateShoppingStep action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Success';
      draft.response.message = 'Delete data success';
    });
    expect(checkCartsReducer(state, actions.updateShoppingStepSuccess())).toEqual(expectedResult);
  });
  it('should handle the updateShoppingStep action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Error';
      draft.response.message = 'Load data to view order error!';
    });
    expect(checkCartsReducer(state, actions.updateShoppingStepError())).toEqual(expectedResult);
  });
});
