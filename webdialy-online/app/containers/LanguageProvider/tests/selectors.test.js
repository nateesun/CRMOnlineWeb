import { selectLanguage } from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectLanguage', () => {
  it('should select the global state', () => {
    const globalState = {};
    const mockedState = {
      language: globalState,
    };
    expect(selectLanguage(mockedState)).toEqual(globalState);
  });
});
