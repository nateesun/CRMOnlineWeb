import membersReducer from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('membersReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      list: [],
      rolesList: [],
      data: {
        uuid_index: '',
        code: '',
        email: '',
        first_name: '',
        last_name: '',
        member_role: '',
        total_score: 0,
        total_purchase: 0,
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
    expect(membersReducer(undefined, {})).toEqual(expectedResult);
  });
});
