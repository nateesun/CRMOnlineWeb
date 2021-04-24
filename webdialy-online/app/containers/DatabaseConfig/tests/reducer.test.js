import produce from 'immer';
import databaseConfigReducer, { initialState } from '../reducer';
import * as actions from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('databaseConfigReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(databaseConfigReducer(undefined, {})).toEqual(expectedResult);
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
    expect(databaseConfigReducer(state, actions.initState())).toEqual(expectedResult);
  });
  it('should handle the changePage action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.page = 'newPage';
      draft.response.status = '';
      draft.response.message = '';
    });
    expect(databaseConfigReducer(state, actions.changePage('newPage'))).toEqual(expectedResult);
  });
  it('should handle the changePage action correctly', () => {
    const expectedResult = produce(state, draft => {});
    expect(databaseConfigReducer(state, actions.initLoad())).toEqual(expectedResult);
  });
  it('should handle the initLoadSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.list = [];
    });
    expect(databaseConfigReducer(state, actions.initLoadSuccess([]))).toEqual(expectedResult);
  });
  it('should handle the initLoadError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Error';
      draft.response.message = 'Load data error!';
    });
    expect(databaseConfigReducer(state, actions.initLoadError())).toEqual(expectedResult);
  });
  it('should handle the loadEdit action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.data = 'data';
    });
    expect(databaseConfigReducer(state, actions.loadEdit('data'))).toEqual(expectedResult);
  });
  it('should handle the loadEditSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.list = [];
    });
    expect(databaseConfigReducer(state, actions.loadEditSuccess([]))).toEqual(expectedResult);
  });
  it('should handle the loadEditError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Error';
      draft.response.message = 'Load data to edit error!';
    });
    expect(databaseConfigReducer(state, actions.loadEditError())).toEqual(expectedResult);
  });
  // it('should handle the createItem action correctly', () => {
  //   const expectedResult = produce(state, draft => {
  //     draft.data = action.payload;
  //     draft.data.uuid_index = v4();
  //   });
  //   expect(databaseConfigReducer(state, actions.createItem('data'))).toEqual(expectedResult);
  // });
  it('should handle the createItemSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Success';
      draft.response.message = 'Create item success';
    });
    expect(databaseConfigReducer(state, actions.createItemSuccess([]))).toEqual(expectedResult);
  });
  it('should handle the createItemError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Error';
      draft.response.message = 'Create data error!';
    });
    expect(databaseConfigReducer(state, actions.createItemError())).toEqual(expectedResult);
  });
  it('should handle the updateItem action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.data = 'data';
    });
    expect(databaseConfigReducer(state, actions.updateItem('data'))).toEqual(expectedResult);
  });
  it('should handle the updateItemSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Success';
      draft.response.message = 'Update data success';
    });
    expect(databaseConfigReducer(state, actions.updateItemSuccess())).toEqual(expectedResult);
  });
  it('should handle the updateItemError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Error';
      draft.response.message = 'Update data error!';
    });
    expect(databaseConfigReducer(state, actions.updateItemError())).toEqual(expectedResult);
  });
  it('should handle the deleteItem action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.data.uuid_index = 'uuid_index';
    });
    expect(databaseConfigReducer(state, actions.deleteItem('uuid_index'))).toEqual(expectedResult);
  });
  it('should handle the deleteItemSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Success';
      draft.response.message = 'Delete data success';
    });
    expect(databaseConfigReducer(state, actions.deleteItemSuccess())).toEqual(expectedResult);
  });
  it('should handle the deleteItemError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Error';
      draft.response.message = 'Delete data error!';
    });
    expect(databaseConfigReducer(state, actions.deleteItemError())).toEqual(expectedResult);
  });
  it('should handle the search action correctly', () => {
    const expectedResult = produce(state, draft => {});
    expect(databaseConfigReducer(state, actions.search('uuid_index'))).toEqual(expectedResult);
  });
  it('should handle the searchSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.list = [];
    });
    expect(databaseConfigReducer(state, actions.searchSuccess([]))).toEqual(expectedResult);
  });
  it('should handle the searchError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Error';
      draft.response.message = 'Search data error!';
    });
    expect(databaseConfigReducer(state, actions.searchError())).toEqual(expectedResult);
  });
  it('should handle the search action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.data = 'data';
    });
    expect(databaseConfigReducer(state, actions.loadView('data'))).toEqual(expectedResult);
  });
  it('should handle the searchSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.list = [];
    });
    expect(databaseConfigReducer(state, actions.loadViewSuccess([]))).toEqual(expectedResult);
  });
  it('should handle the searchError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Error';
      draft.response.message = 'Load data to view error!';
    });
    expect(databaseConfigReducer(state, actions.loadViewError())).toEqual(expectedResult);
  });
});
