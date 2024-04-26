// * Base
import { Outlet } from 'react-router-dom';

// * Components
import List from '../../../components/List/List';

// * Custom hooks
import useTitle from '../../../hooks/useTitle.hook';

const ListPosts = () => {
  useTitle({ title: 'ListPosts' });
  return (
    <>
      <h1 className='text-center text-2xl font-semibold text-yellow-700 mb-5'>
        ListPosts
      </h1>
      <List />
      <Outlet />
    </>
  );
};

export default ListPosts;
