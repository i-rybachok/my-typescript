// * Components
import Form from '../../components/Form/Form';

// * Custom hooks
import useTitle from '../../hooks/useTitle.hook';

const SignUp = () => {
  useTitle({ title: 'SignUp' });
  return (
    <>
      <h1 className='text-center text-2xl font-bold text-orange-500 mb-5'>
        Sign up
      </h1>
      <Form />
    </>
  );
};

export default SignUp;
