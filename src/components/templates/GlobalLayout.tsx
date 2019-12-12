import React, { Suspense, FC } from 'react';

const GlobalLayout: FC<{}> = props => {
  return (
    <>
      <Suspense fallback={<div>loading</div>}>{props.children}</Suspense>
    </>
  );
};

export default GlobalLayout;
