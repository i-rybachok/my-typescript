// * Base
import { Outlet } from 'react-router-dom';
import { memo } from 'react';

const Lists = memo(() => {
  return (
    <>
      <Outlet />
    </>
  );
});

export default Lists;
