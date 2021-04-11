import * as selectors from '../selectors';

const mockPayload = {
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

describe('selectProfileShippingDomain', () => {
  it('Expect mock state and initial state from selectProfileShippingDomain is equal', () => {
    const state = selectors.selectProfileShippingDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
