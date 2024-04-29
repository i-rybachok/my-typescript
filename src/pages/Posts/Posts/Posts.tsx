// * Components
import { memo } from 'react';
import List from '../../../components/List/List';
import { useTranslation } from 'react-i18next';

import useTitle from '../../../hooks/useTitle.hook';

const ListPosts = memo(() => {
  useTitle({ title: 'Lists' });

  const { t } = useTranslation();
  return (
    <>
      <h2 className='text-center text-2xl font-semibold text-yellow-700 mb-5'>
        {t('post')}
      </h2>
      <List />
    </>
  );
});

export default ListPosts;
