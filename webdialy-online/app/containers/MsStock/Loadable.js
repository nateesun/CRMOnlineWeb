/**
 *
 * Asynchronously loads the component for MsStock
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
