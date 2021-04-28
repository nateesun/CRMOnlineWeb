import produce from 'immer';
import * as actions from '../actions';
import usePromotionReducer, { initialState } from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('usePromotionReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(usePromotionReducer(undefined, {})).toEqual(expectedResult);
  });
  it('should handle the initState action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.list = [];
      draft.data = {};
      draft.page = 'LIST';
      draft.status = null;
      draft.message = null;
      draft.currentId = '';
      draft.response = {};
    });
    expect(usePromotionReducer(state, actions.initState())).toEqual(expectedResult);
  });
  it('should handle the changePage action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.page = 'page';
      draft.response.status = '';
      draft.response.message = '';
    });
    expect(usePromotionReducer(state, actions.changePage('page'))).toEqual(expectedResult);
  });
  it('should handle the initLoad action correctly', () => {
    const expectedResult = produce(state, () => {});
    expect(usePromotionReducer(state, actions.initLoad('page'))).toEqual(expectedResult);
  });
  it('should handle the initLoadSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.list = [];
    });
    expect(usePromotionReducer(state, actions.initLoadSuccess([]))).toEqual(expectedResult);
  });
  it('should handle the initLoadError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Error';
      draft.response.message = 'Load data error!';
    });
    expect(usePromotionReducer(state, actions.initLoadError('page'))).toEqual(expectedResult);
  });
  it('should handle the search action correctly', () => {
    const expectedResult = produce(state, () => {});
    expect(usePromotionReducer(state, actions.search('page'))).toEqual(expectedResult);
  });
  it('should handle the searchSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.list = [];
    });
    expect(usePromotionReducer(state, actions.searchSuccess([]))).toEqual(expectedResult);
  });
  it('should handle the searchError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Error';
      draft.response.message = 'Search data error!';
    });
    expect(usePromotionReducer(state, actions.searchError('error'))).toEqual(expectedResult);
  });
});
