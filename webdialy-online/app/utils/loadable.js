import React, { lazy, Suspense } from 'react';
import Loading from 'components/LoadingBackdrop';

const loadable = (
  importFunc,
  { fallback = null } = { fallback: <Loading /> },
) => {
  const LazyComponent = lazy(importFunc);

  return props => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default loadable;
