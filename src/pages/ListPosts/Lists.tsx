// * Base
import { Outlet } from 'react-router-dom';

// * Custom hooks
import useTitle from '../../hooks/useTitle.hook';

const Lists = () => {
  useTitle({ title: 'Lists' });
  return (
    <>
      <h1 className='text-center text-2xl font-bold text-orange-500 mb-5'>
        Lists
      </h1>
      <Outlet />
    </>
  );
};

export default Lists;
