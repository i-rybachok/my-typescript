// * Base
import { useTranslation } from 'react-i18next';

// * Components
import Form from '../../components/Form/Form';

// * Custom hooks
import useTitle from '../../hooks/useTitle.hook';

const SignUp = () => {
  useTitle({ title: 'SignUp' });

  const { t } = useTranslation();

  return (
    <>
      <h1 className='text-center text-2xl font-bold text-orange-500 mb-5'>
        {t('sign up')}
      </h1>
      <Form />
    </>
  );
};

export default SignUp;
