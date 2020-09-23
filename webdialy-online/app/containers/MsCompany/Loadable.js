/**
 *
 * Asynchronously loads the component for MsCompany
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
