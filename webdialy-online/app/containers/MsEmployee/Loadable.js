/**
 *
 * Asynchronously loads the component for MsEmployee
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
