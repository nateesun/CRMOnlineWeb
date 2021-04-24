import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectAppDomain', () => {
  it('Expect mock state and initial state from selectRouter is equal', () => {
    const dataSelector = selectors.selectRouter(mockPayload);
    expect(dataSelector).toEqual(mockPayload.router);
  });
  it('Expect mock state and initial state from selectAppDomain is equal', () => {
    const dataSelector = selectors.selectAppDomain(mockPayload);
    expect(dataSelector).toEqual(mockPayload);
  });
  it('Expect mock state and initial state from makeSelectLocation is equal', () => {
    const domain = selectors.selectRouter(mockPayload);
    const dataSelector = selectors.makeSelectLocation();
    expect(dataSelector(mockPayload)).toEqual(domain.location);
  });
  it('Expect mock state and initial state from makeSelectApp is equal', () => {
    const domain = selectors.selectAppDomain(mockPayload);
    const dataSelector = selectors.makeSelectApp();
    expect(dataSelector(mockPayload)).toEqual(domain);
  });
  it('Expect mock state and initial state from makeSelectLeftMenu is equal', () => {
    const domain = selectors.selectAppDomain(mockPayload);
    const dataSelector = selectors.makeSelectLeftMenu();
    expect(dataSelector(mockPayload)).toEqual(domain.leftMenu);
  });
});
