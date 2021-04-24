import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectMemberOrdersConfirmDomain', () => {
  const domain = selectors.selectMemberOrdersConfirmDomain(mockPayload);
  it('Expect from selectMemberOrdersConfirmDomain is equal', () => {
    const state = selectors.selectMemberOrdersConfirmDomain(mockPayload);
    expect(state).toEqual(domain);
  });
  it('Expect from makeSelectMemberOrdersConfirm is equal', () => {
    const state = selectors.makeSelectMemberOrdersConfirm();
    expect(state(mockPayload)).toEqual(domain);
  });
  it('Expect from makeSelectData is equal', () => {
    const state = selectors.makeSelectData();
    expect(state(mockPayload)).toEqual(domain.data);
  });
  it('Expect from makeSelectOrderList is equal', () => {
    const state = selectors.makeSelectOrderList();
    expect(state(mockPayload)).toEqual(domain.list);
  });
  it('Expect from makeSelectConfirmData is equal', () => {
    const state = selectors.makeSelectConfirmData();
    expect(state(mockPayload)).toEqual(domain.confirmData);
  });
  it('Expect from makeSelectResponse is equal', () => {
    const state = selectors.makeSelectResponse();
    expect(state(mockPayload)).toEqual(domain.response);
  });
});
