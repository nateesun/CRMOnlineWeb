import produce from 'immer';
import * as actions from '../actions';
import membersReducer, { initialState } from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('membersReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(membersReducer(undefined, {})).toEqual(expectedResult);
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
    expect(membersReducer(state, actions.initState())).toEqual(expectedResult);
  });
  it('should handle the changePage action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.page = 'page';
      draft.response.status = '';
      draft.response.message = '';
    });
    expect(membersReducer(state, actions.changePage('page'))).toEqual(expectedResult);
  });
  it('should handle the initLoad action correctly', () => {
    const expectedResult = produce(state, () => {});
    expect(membersReducer(state, actions.initLoad('page'))).toEqual(expectedResult);
  });
  it('should handle the initLoadSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.list = [];
    });
    expect(membersReducer(state, actions.initLoadSuccess([]))).toEqual(expectedResult);
  });
  it('should handle the initLoadError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Error';
      draft.response.message = 'Load data error!';
    });
    expect(membersReducer(state, actions.initLoadError())).toEqual(expectedResult);
  });
  it('should handle the loadEdit action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.data = 'data';
    });
    expect(membersReducer(state, actions.loadEdit('data'))).toEqual(expectedResult);
  });
  it('should handle the loadEditSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.list = [];
    });
    expect(membersReducer(state, actions.loadEditSuccess([]))).toEqual(expectedResult);
  });
  it('should handle the loadEditError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Error';
      draft.response.message = 'Load data to edit error!';
    });
    expect(membersReducer(state, actions.loadEditError())).toEqual(expectedResult);
  });
  // it('should handle the createItem action correctly', () => {
  //   const expectedResult = produce(state, draft => {
  //     draft.data = 'data';
  //     draft.data.uuid_index = v4();
  //   });
  //   expect(membersReducer(state, actions.createItem('data'))).toEqual(expectedResult);
  // });
  it('should handle the createItemSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Success';
      draft.response.message = 'Create item success';
    });
    expect(membersReducer(state, actions.createItemSuccess())).toEqual(expectedResult);
  });
  it('should handle the createItemError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Error';
      draft.response.message = 'Create data error!';
    });
    expect(membersReducer(state, actions.createItemError())).toEqual(expectedResult);
  });
  it('should handle the updateItem action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.data = 'data';
    });
    expect(membersReducer(state, actions.updateItem('data'))).toEqual(expectedResult);
  });
  it('should handle the updateItemSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Success';
      draft.response.message = 'Update data success';
    });
    expect(membersReducer(state, actions.updateItemSuccess())).toEqual(expectedResult);
  });
  it('should handle the updateItemError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Error';
      draft.response.message = 'Update data error!';
    });
    expect(membersReducer(state, actions.updateItemError())).toEqual(expectedResult);
  });
  it('should handle the deleteItem action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.data.email = 'email';
    });
    expect(membersReducer(state, actions.deleteItem('email'))).toEqual(expectedResult);
  });
  it('should handle the deleteItemSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Success';
      draft.response.message = 'Delete data success';
    });
    expect(membersReducer(state, actions.deleteItemSuccess())).toEqual(expectedResult);
  });
  it('should handle the deleteItemError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Error';
      draft.response.message = 'Delete data error!';
    });
    expect(membersReducer(state, actions.deleteItemError())).toEqual(expectedResult);
  });
  it('should handle the search action correctly', () => {
    const expectedResult = produce(state, () => {});
    expect(membersReducer(state, actions.search('email'))).toEqual(expectedResult);
  });
  it('should handle the searchSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.list = [];
    });
    expect(membersReducer(state, actions.searchSuccess([]))).toEqual(expectedResult);
  });
  it('should handle the searchError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Error';
      draft.response.message = 'Search data error!';
    });
    expect(membersReducer(state, actions.searchError())).toEqual(expectedResult);
  });
  it('should handle the loadView action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.data = 'data';
    });
    expect(membersReducer(state, actions.loadView('data'))).toEqual(expectedResult);
  });
  it('should handle the loadViewSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.list = [];
    });
    expect(membersReducer(state, actions.loadViewSuccess([]))).toEqual(expectedResult);
  });
  it('should handle the loadViewError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Error';
      draft.response.message = 'Load data to view error!';
    });
    expect(membersReducer(state, actions.loadViewError())).toEqual(expectedResult);
  });
  it('should handle the loadRoles action correctly', () => {
    const expectedResult = produce(state, () => {});
    expect(membersReducer(state, actions.loadRoles())).toEqual(expectedResult);
  });
  it('should handle the loadRolesSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.rolesList = [];
    });
    expect(membersReducer(state, actions.loadRolesSuccess([]))).toEqual(expectedResult);
  });
  it('should handle the loadRolesError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Error';
      draft.response.message = 'Load role list!';
    });
    expect(membersReducer(state, actions.loadRolesError())).toEqual(expectedResult);
  });
});
