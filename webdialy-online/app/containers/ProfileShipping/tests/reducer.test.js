import profileShippingReducer from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('profileShippingReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      shipping: {
        address_type: '',
        member_prefix: '',
        member_code: '',
        member_name: '',
        member_lastname: '',
        address1: '',
        address2: '',
        province: '',
        district: '',
        sub_district: '',
        postcode: '',
        map_latitude: 13.752434,
        map_longitude: 100.494122,
      },
      address: {},
      status: '',
      error: '',
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(profileShippingReducer(undefined, {})).toEqual(expectedResult);
  });
});
