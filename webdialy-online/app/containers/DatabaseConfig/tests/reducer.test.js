import produce from 'immer';
import databaseConfigReducer from '../reducer';
import * as actions from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('databaseConfigReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      list: [],
      data: {
        uuid_index: '',
        col1: '',
        col2: '',
        col3: '',
      },
      page: 'LIST',
      status: null,
      message: null,
      currentId: '',
      response: {
        status: null,
        message: null,
      },
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(databaseConfigReducer(undefined, {})).toEqual(expectedResult);
  });
});
