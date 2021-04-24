import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectAppDomain', () => {
  const domainRouter = selectors.selectRouter(mockPayload);
  const domain = selectors.selectAppDomain(mockPayload);

  it('Expect from selectRouter is equal', () => {
    const state = selectors.selectRouter(mockPayload);
    expect(state).toEqual(mockPayload.router);
  });
  it('Expect from selectAppDomain is equal', () => {
    const state = selectors.selectAppDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
  it('Expect from makeSelectLocation is equal', () => {
    const state = selectors.makeSelectLocation();
    expect(state(mockPayload)).toEqual(domainRouter.location);
  });
  it('Expect from makeSelectApp is equal', () => {
    const state = selectors.makeSelectApp();
    expect(state(mockPayload)).toEqual(domain);
  });
  it('Expect from makeSelectLeftMenu is equal', () => {
    const state = selectors.makeSelectLeftMenu();
    expect(state(mockPayload)).toEqual(domain.leftMenu);
  });
});
