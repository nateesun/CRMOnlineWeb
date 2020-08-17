import logger from '../logger';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    logger.log('error', e);
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    logger.log('error', e);
  }
};

export const clearState = () => {
  try {
    localStorage.removeItem('state');
  } catch (e) {
    logger.log('error', e);
  }
};
