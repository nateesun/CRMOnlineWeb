import msProductReducer from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('msProductReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      list: [],
      data: {
        uuid_index: '',
        code: '',
        name: '',
        unit_sale: '',
        group_code: '',
      },
      productImportHeaders: [],
      productImports: [],
      page: 'LIST',
      img_upload: null,
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
    expect(msProductReducer(undefined, {})).toEqual(expectedResult);
  });
});
