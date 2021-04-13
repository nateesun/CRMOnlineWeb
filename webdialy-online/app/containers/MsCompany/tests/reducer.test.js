import msCompanyReducer from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('msCompanyReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      list: [],
      data: {
        uuid_index: '',
        code: '',
        name: '',
        line_official_id: '',
      },
      page: 'LIST',
      status: null,
      message: null,
      img_upload: null,
      currentId: '',
      response: {
        status: null,
        message: null,
      },
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(msCompanyReducer(undefined, {})).toEqual(expectedResult);
  });
});
