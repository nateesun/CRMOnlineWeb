/**
 *
 * Asynchronously loads the component for MasterUI
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
