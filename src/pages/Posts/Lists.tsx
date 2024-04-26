// * Base
import { Outlet } from 'react-router-dom';

// * Custom hooks
import useTitle from '../../hooks/useTitle.hook';

const Lists = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Lists;
