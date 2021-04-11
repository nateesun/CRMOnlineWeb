import msBranchReducer from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('msBranchReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      list: [],
      data: {
        uuid_index: '',
        code: '',
        name: '',
        map_latitude: 13.809992,
        map_longitude: 100.41313,
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
    expect(msBranchReducer(undefined, {})).toEqual(expectedResult);
  });
});
