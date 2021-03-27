/**
 *
 * Asynchronously loads the component for MainLayoutApp
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
