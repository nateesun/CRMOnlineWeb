import msRoleReducer from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('msRoleReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      list: [],
      data: {
        uuid_index: '',
        code: '',
        name: '',
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
    expect(msRoleReducer(undefined, {})).toEqual(expectedResult);
  });
});
