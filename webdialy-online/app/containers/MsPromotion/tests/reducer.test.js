import produce from 'immer';
import * as actions from '../actions';
import msPromotionReducer, { initialState } from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('msPromotionReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(msPromotionReducer(undefined, {})).toEqual(expectedResult);
  });
  it('should handle the initState action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.list = [];
      draft.data = {};
      draft.page = 'LIST';
      draft.currentId = '';
      draft.response = {};
    });
    expect(msPromotionReducer(state, actions.initState())).toEqual(expectedResult);
  });
  it('should handle the changePage action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.page = 'page';
      draft.response.status = '';
      draft.response.message = '';
    });
    expect(msPromotionReducer(state, actions.changePage('page'))).toEqual(expectedResult);
  });
  it('should handle the initLoad action correctly', () => {
    const expectedResult = produce(state, () => {});
    expect(msPromotionReducer(state, actions.initLoad('page'))).toEqual(expectedResult);
  });
  it('should handle the initLoadSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.list = [];
    });
    expect(msPromotionReducer(state, actions.initLoadSuccess([]))).toEqual(expectedResult);
  });
  it('should handle the initLoadError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Error';
      draft.response.message = 'Load data error!';
    });
    expect(msPromotionReducer(state, actions.initLoadError())).toEqual(expectedResult);
  });
  it('should handle the loadEdit action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.data = 'data';
    });
    expect(msPromotionReducer(state, actions.loadEdit('data'))).toEqual(expectedResult);
  });
  it('should handle the loadEditSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.list = [];
    });
    expect(msPromotionReducer(state, actions.loadEditSuccess([]))).toEqual(expectedResult);
  });
  it('should handle the loadEditError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Error';
      draft.response.message = 'Load data to edit error!';
    });
    expect(msPromotionReducer(state, actions.loadEditError())).toEqual(expectedResult);
  });
  // it('should handle the createItem action correctly', () => {
  //   const expectedResult = produce(state, draft => {
  //     draft.data = 'data';
  //     draft.data.uuid_index = v4();
  //   });
  //   expect(msPromotionReducer(state, actions.createItem('data'))).toEqual(expectedResult);
  // });
  it('should handle the createItemSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Success';
      draft.response.message = 'Create item success';
    });
    expect(msPromotionReducer(state, actions.createItemSuccess())).toEqual(expectedResult);
  });
  it('should handle the createItemError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Error';
      draft.response.message = 'Create data error!';
    });
    expect(msPromotionReducer(state, actions.createItemError())).toEqual(expectedResult);
  });
  it('should handle the updateItem action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.data = 'data';
    });
    expect(msPromotionReducer(state, actions.updateItem('data'))).toEqual(expectedResult);
  });
  it('should handle the updateItemSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Success';
      draft.response.message = 'Update data success';
    });
    expect(msPromotionReducer(state, actions.updateItemSuccess())).toEqual(expectedResult);
  });
  it('should handle the updateItemError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Error';
      draft.response.message = 'Update data error!';
    });
    expect(msPromotionReducer(state, actions.updateItemError())).toEqual(expectedResult);
  });
  it('should handle the deleteItem action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.data.uuid_index = 'uuid_index';
    });
    expect(msPromotionReducer(state, actions.deleteItem('uuid_index'))).toEqual(expectedResult);
  });
  it('should handle the deleteItemError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Success';
      draft.response.message = 'Delete data success';
    });
    expect(msPromotionReducer(state, actions.deleteItemSuccess())).toEqual(expectedResult);
  });
  it('should handle the deleteItemError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Error';
      draft.response.message = 'Delete data error!';
    });
    expect(msPromotionReducer(state, actions.deleteItemError())).toEqual(expectedResult);
  });
});
