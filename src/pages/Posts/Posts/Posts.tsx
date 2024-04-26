// * Components
import { memo } from 'react';
import List from '../../../components/List/List';

import useTitle from '../../../hooks/useTitle.hook';

const ListPosts = () => {
  useTitle({ title: 'Lists' });
  return (
    <>
      <h2 className='text-center text-2xl font-semibold text-yellow-700 mb-5'>
        Posts
      </h2>
      <List />
    </>
  );
};

export default ListPosts;
