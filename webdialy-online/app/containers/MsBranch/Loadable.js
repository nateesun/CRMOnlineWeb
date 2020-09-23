/**
 *
 * Asynchronously loads the component for MsBranch
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
