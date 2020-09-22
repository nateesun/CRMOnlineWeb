/**
 *
 * Asynchronously loads the component for MsPromotion
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
