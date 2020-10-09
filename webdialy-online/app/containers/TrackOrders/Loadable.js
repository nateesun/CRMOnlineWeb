/**
 *
 * Asynchronously loads the component for TrackOrders
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
