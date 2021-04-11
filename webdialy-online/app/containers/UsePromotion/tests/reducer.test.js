import usePromotionReducer from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('usePromotionReducer', () => {
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
    expect(usePromotionReducer(undefined, {})).toEqual(expectedResult);
  });
});
